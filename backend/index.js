require('dotenv').config();
const express = require("express");
const rootRouter=require("./routes/index");
const cors=require("cors");
const app=express();

const cors = require('cors');
app.use(cors({
  origin: 'https://pay-now-akashnegi9690s-projects.vercel.app',
  methods: ['GET', 'POST'],
}));
app.use(express.json());
app.use("/api/v1",rootRouter);

const port = process.env.PORT || 3000;  
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});