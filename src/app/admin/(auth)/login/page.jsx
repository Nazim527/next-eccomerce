"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { AuthModal } from "@/components/admin";
import Image from "next/image";
import Logo from "../../../../assets/icon/Logo.svg";
import Link from "next/link";

import "../loginRegister.scss";
const Login = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm(
    {mode: "onChange"}
  );


  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <AuthModal contentClasname={"auth_login"}>
      <div className="login_header">
        <Image src={Logo} alt="Logo" />
        <h4>Login in to admin</h4>
      </div>

      <form className="login_footer" onSubmit={handleSubmit(onSubmit)}>
        <div className="login_input">
          <label htmlFor="userName">Username</label>
          <input
            {...register("userName", {
              required: "username cannot be blank",
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i,
                message: "Invalid username. Please enter a valid username",
              },
            })}
            type="text"
            id="userName"
            name="userName"
            placeholder="Ex: demo@demo.com"
          />
          {errors?.userName && (
            <div className="regError">{errors.userName.message}</div>
          )}
        </div>

        <div className="login_input">
          <label htmlFor="password">Password</label>
          <input
            {...register("password", { required: true })}
            type="password"
            id="password"
            name="password"
            placeholder="Ex: demo"
            {...register("password", {
              required: "password cannot be blank",
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/i,
                message: "Invalid password. Please enter a valid password",
              },
            })}
          />
          {errors?.password && (
            <div className="regError">{errors.password.message}</div>
          )}
        </div>

        <button type="submit">Submit</button>
      </form>

      <div className="direction">
        <p>
          Don't have an account?{" "}
          <Link href={"/admin/register"}>Register here</Link>
        </p>
      </div>
    </AuthModal>
  );
};

export default Login;
