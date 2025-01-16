import { useState } from "react";
import { BottomWarning } from "../components/bottomwarning";
import { Button } from "../components/button";
import { Heading } from "../components/heading";
import { InputBox } from "../components/inputbox";
import { SubHeading } from "../components/subheading";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer";

export const Signin = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://paynow-7wln.onrender.com/api/v1/user/signin", {
        username,
        password,
      });
      localStorage.setItem("token", response.data.token);
      if (response.status === 200) {
        navigate("/dashboard");
      }
    } catch (error) {
      alert("Error while logging in");
    }
  }
  return (
    <div className="bg-blue-500 h-screen  font-sans">
    <div className="h-16 shadow-md border border-b-2 bg-white flex items-center"><div className=" text-blue-500 font-semibold text-2xl mx-5">PayNow</div></div>
      <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg w-96 p-8 " >
        <div className=" text-center ">
          <Heading label={"Sign in"} />
          <SubHeading label={"Enter your credentials to access your account"} />
          <div className="mt-4">
            <InputBox
              onChange={(e) => setUserName(e.target.value)}
              placeholder="akash@gmail.com"
              label={"Email"}
              type="email"
            />
          </div>
          <div className="mt-4">
            <InputBox
              onChange={(e) => setPassword(e.target.value)}
              placeholder="123456"
              label={"Password"}
              type="password"
            />
          </div>
          <div className="mt-6">
            <Button

              label={"Sign in"}
            />
          </div>
          <div className="mt-4">
            <BottomWarning
              label={"Don't have an account?"}
              buttonText={"Sign up"}
              to={"/signup"}
            />
          </div>
        </div>
      </form>
      </div>
      <Footer/>
    </div>
  );
};
