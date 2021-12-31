import React, { useContext } from "react";
import { NavBar } from "../components/Login/navbar";
import { LoginForm } from "../components/LoginForm";

const LoginPage = (props) => {
  return (
    <div
      className={` h-screen overflow-hidden w-screen bg-no-repeat bg-right-bottom bg-[url(/home/dps/projects/javascript_/kavs-inventory-tool/src/assets/vectors/login_bg.svg)] 
        
       `}
    >
      <NavBar />
      <div className="flex justify-center md:justify-start lg:mx-16 mx-4 items-center h-full ">
        <div className="bg-white glassmorphic-bg bg-opacity-50  rounded-md   bprder border-white p-4">
          <h1 className="text-4xl">Login to your account</h1>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
