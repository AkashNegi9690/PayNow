const express = require('express');
const router = express.Router();
const zod = require("zod");
const jwt = require("jsonwebtoken");
const { User, Account } = require("../db.js");
const { JWT_SECRET } = require("../config.js");
const { authMiddleware } = require("../middleware.js");

const signupBody = zod.object({
    userName: zod.string().email(),
    firstName: zod.string(),
    lastName: zod.string(),
    password: zod.string()
        .min(6, "password should contain minimun 6 characters")
        .max(30, "password can have at max 30 characters")
        .regex(/[a-z]/, "password must contain atleast one lowercase character")
        .regex(/[A-Z]/, "password must contain atleast one upppercase character")
        .regex(/\d/, "password must contain atleast one number")
        .regex(/[\W]/, "password must contain atleast one special character")
})

router.post("/signup", async (req, res) => {
    const { success ,error} = signupBody.safeParse(req.body);
    if (!success) {
        console.log(error);
        console.log("hello");
        console.log(req.body)
        return res.status(411).json({
            message: "Email already taken/incorrect inputs"
        })
    
    }
    const existingUser = await User.findOne({
        userName: req.body.userName
    })

    if (existingUser) {
        console.log("hello");
        console.log(req.body)
        return res.status(411).json({
            message: "Email already taken/Incorrect inputs"
        })
    }
    const user = await User.create({
        userName: req.body.userName,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password
    })

    const userId = user._id;

    await Account.create({
        userId,
        balance: 1 + Math.random() * 10000
    });

    const token = jwt.sign({
        userId
    }, JWT_SECRET
    )
    res.json({
        message: "user created successfully",
        token: token
    })

});

const signinBody = zod.object({
    username: zod.string().email(),
    password: zod.string()
})
router.post("/signin", async (req, res) => {
    const { success } = signinBody.safeParse(req.body);
    if (!success) {
        return res.status(411).json({
            message: "incorrect inputs"
        })
    }

    const user = await User.findOne({
        userName: req.body.username,
        password: req.body.password
    })
    if (user) {
        const token = jwt.sign({
            userId: user._id
        }, JWT_SECRET);

        res.json({
            token: token
        })
        return;
    }

    res.status(411).json({
        message: "Error while logging in"
    })
});

const updateBody = zod.object({
    password: zod.string().optional(),
    firstname: zod.string().optional(),
    lastname: zod.string().optional(),
})

router.put("/", authMiddleware, async (req, res) => {
    const success = updateBody.safeParse(req.body);
    if (!success) {
        res.status(411).json({
            message: "error while updating information"
        })
    }
    await User.updateOne({ _id: req.userId }, req.body);
    res.json({
        message: "Updated successfully"
    })

});

router.get("/bulk", authMiddleware, async (req, res) => {

    const filter = req.query.filter || "";
    const users = await User.find({
        $or: [{
            firstName: {
                "$regex": filter
            }
        }, {
            lastName: {
                "$regex": filter
            }
        }
        ]
    })

    if (users) {
        res.json({
            users: users.map(user => ({
                userName: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                _id: user._id
            }))
        })
    }
});

module.exports = router;