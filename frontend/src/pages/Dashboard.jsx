import { useEffect, useState } from "react"
import { Appbar } from "../components/appbar"
import { Balance } from "../components/balance"
import { Users } from "../components/users"
import axios from "axios"

export const Dashboard = () => {
    const [balance,setBalance]=useState();
    
    useEffect(() =>{
        axios.get("https://paynow-7wln.onrender.com/api/v1/account/balance", {
        headers:{
            Authorization: "Bearer "+localStorage.getItem("token")
        }}).then(reponse => {
            setBalance(reponse.data.balance)
        })
    },[balance])
   
    return <div>
        <Appbar />
        <div className="m-8">
            <Balance value={balance} />
            <Users />
        </div>
    </div>
}