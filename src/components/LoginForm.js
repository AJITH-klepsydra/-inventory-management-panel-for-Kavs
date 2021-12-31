import React, { useContext, useEffect, useState } from "react";
import { ROUTES } from "../constants/routes";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { useNavigate } from "react-router";
import { LoaderContext } from "../context/loaderContext";

export const LoginForm = (props) => {
  const { isLoading, setisLoading } = useContext(LoaderContext);
  const navigate = useNavigate();
  const auth = getAuth();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");
  const invalid = (email.length < 3 || password.length < 3) && email.length > 0;
  useEffect(() => {
    if (invalid) {
      seterror("password or username is Too short");
    } else {
      seterror("");
    }
  }, [invalid]);

  function login(e) {
    e.preventDefault();
    setisLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((resp) => {
        navigate(ROUTES.home);
        setisLoading(false);
      })
      .catch((error) => {
        seterror("Invalid credentials");
        setemail("");
        setpassword("");
        setisLoading(false);
      });
  }

  return (
    <form onSubmit={login} className="grid grid-cols-1 gap-0">
      <label className="my-4 text-xs ">Email</label>
      <input
        aria-label="Enter your email addresss"
        onChange={(e) => {
          setemail(e.target.value);
        }}
        required
        type="email"
        className="p-4 outline-none rounded-md border border-black"
      />
      <label className="my-4 text-xs ">password</label>
      <input
        aria-label="enter your password"
        onChange={(e) => {
          setpassword(e.target.value);
        }}
        required
        type="password"
        className="p-4 outline-none rounded-md border border-black"
      />
      {error && (
        <p className="text-center bg-tertiary p-2 mt-4  rounded text-red-500">
          {error}
        </p>
      )}

      <button
        aria-label="clck to submit"
        type="submit"
        value="Submit"
        className="bg-primary p-4 outline-none text-white rounded-md my-4 border border-primary hover:bg-secondary hover:text-primary cursor-pointer"
      >
        Submit
      </button>
    </form>
  );
};
