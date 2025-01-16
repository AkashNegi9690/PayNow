import { useEffect, useState } from "react";
import { Button } from "./button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Users = () => {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        axios.get("https://paynow-7wln.onrender.com/api/v1/user/bulk?filter=" + filter, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
        .then(response => {
            setUsers(response.data.users)
        })
    }, [filter])

    return (
        <div className="max-w-4xl  mx-auto p-6 bg-white rounded-lg shadow-lg">
            <div className="font-bold text-2xl text-center text-gray-800 mb-4">
                Users List
            </div>
            <div className="mb-6 flex justify-center">
                <input
                    onChange={(e) => setFilter(e.target.value)}
                    type="text"
                    placeholder="Search users..."
                    className="w-full max-w-md px-4 py-2 border rounded-full border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition ease-in-out duration-300"
                />
            </div>
            <div className="space-y-4">
                {users.map(user => <User key={user._id} user={user} />)}
            </div>
        </div>
    );
};

function User({ user }) {
    const navigate = useNavigate();

    return (
        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition duration-300 ease-in-out w-full">
            <div className="flex items-center space-x-4 w-full">
                <div className="rounded-full h-16 w-16 bg-blue-500 flex justify-center items-center text-white font-bold text-xl">
                    {user.firstName[0].toUpperCase()}
                </div>
                <div className="text-lg text-gray-700 font-semibold flex-grow">
                    {user.firstName} {user.lastName}
                </div>
                <div className="flex flex-col justify-center">
                    <Button
                        onClick={() => {
                            navigate("/send?id=" + user._id + "&name=" + user.firstName);
                        }}
                        label="Send Money"
                    />
                </div>
            </div>
        </div>
    );
}
