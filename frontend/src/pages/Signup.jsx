import { BottomWarning } from "../components/bottomwarning"
import { Heading } from "../components/heading"
import { InputBox } from "../components/inputbox"
import { SubHeading } from "../components/subheading"
import { Button } from "../components/button"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Footer from "../components/footer"

export const Signup = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  return (
    <div  iv className="bg-blue-500 min-h-screen">
      <div className="h-16 shadow-md border border-b-2 bg-white flex items-center"><div className=" text-blue-500 font-semibold text-2xl mx-5">PayNow</div></div>
      {/* Hero Section */}
      <section className="text-center py-10 px-4" id="hero">
        <div className="container mx-auto">
          <label className="text-4xl font-bold">Create Your PayNow Account</label>
         
          <p >Join us today to start sending and receiving money seamlessly.</p>
        </div>
      </section>

      {/* Signup Form */}
      <div className="flex justify-center pb-10">
        <div className="rounded-lg bg-white w-96 text-center p-8">
          <Heading label={"Signup"}/>
          <SubHeading label={"Enter your credentials to access your account"} />

          
          <InputBox
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="John"
            label="First Name"
            className="mb-4"
          />
          <InputBox
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Doe"
            label="Last Name"
            className="mb-4"
          />
          <InputBox
            onChange={(e) => setUserName(e.target.value)}
            placeholder="akash@gmail.com"
            label="Email"
            className="mb-4"
          />
          <InputBox
            onChange={(e) => setPassword(e.target.value)}
            placeholder="123456"
            label="Password"
            type="password"
            className="mb-6"
          />

          <Button
            onClick={async () => {
              const response = await axios.post("https://paynow-7wln.onrender.com/api/v1/user/signup", {
                userName,
                firstName,
                lastName,
                password
              })
              localStorage.setItem("token", response.data.token)
              if (response.status === 200) {
                navigate("/signin")
              }
            }}
            label="Sign up"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-all"
          />
          {/* <p className="mt-6 text-gray-700 hover:cursor-pointer" onClick={()=>{navigate('/signin')}}>Already have an account?</p> */}
          <BottomWarning label={"Don't have an account?"} buttonText={"Sign in"} to={"/signin"} />

        </div>
      </div>

      {/* PayNow Section */}
      <section className="bg-gray-100 py-16 text-center" id="about-paynow">
        <div className="container mx-auto">
          <h1 className="text-3xl mb-8 text-gray-700" >Why Choose PayNow?</h1>
          <div className="flex flex-col md:flex-row justify-center items-center gap-12">
            <div className="bg-white p-6 rounded-lg shadow-md w-80 text-gray-500">
              <h3 className="text-xl font-semibold mb-4 ">Secure Transactions</h3>
              <p>Your money is safe with us, protected by top-notch security protocols.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md w-80 text-gray-500">
              <h3 className="text-xl font-semibold mb-4">User-Friendly Dashboard</h3>
              <p>Manage your payments easily with an intuitive and seamless interface.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md w-80 text-gray-500">
              <h3 className="text-xl font-semibold mb-4">Real-Time Search</h3>
              <p>Find users quickly and send money in just a few clicks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
