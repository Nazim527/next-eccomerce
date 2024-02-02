"use client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { AuthModal } from "@/components/admin";
import Image from "next/image";
import Logo from "../../../../assets/icon/Logo.svg";
import Link from "next/link";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../loginRegister.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthRegister } from "@/lib/action/authThunk";
import { useRouter } from "next/navigation";
const Register = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onSubmit" });

  const onSubmit = (data) => {
    dispatch(fetchAuthRegister(data));
  };

  //! User register controlled
  const regSuccess = useSelector((state) => state.auth);

  useEffect(() => {
    if (regSuccess.status === "Error") {
      toast.error(
        "An account already exists with this email address. Please log in",
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        }
      );
    } else if (regSuccess.status === "Success") {
      router.push(`/admin/login`);
    }
  }, [regSuccess]);

  return (
    <>
      <AuthModal contentClasname={"auth_login"}>
        <div className="login_header">
          <Image src={Logo} alt="Logo" />
          <h4>Register to admin </h4>
        </div>

        <form className="login_footer" onSubmit={handleSubmit(onSubmit)}>
          <div className="login_input">
            <label htmlFor="username">Username</label>
            <input
              {...register("username", {
                required: "username cannot be blank",
                pattern: {
                  value: /^[a-z0-9_-]{3,15}$/i,
                  message: "Invalid username. Please enter a valid username",
                },
              })}
              type="text"
              id="username"
              name="username"
              placeholder="Ex: demo@demo.com"
            />
            {errors?.username && (
              <div className="regError">{errors.username.message}</div>
            )}
          </div>

          <div className="login_input">
            <label htmlFor="email">Email</label>
            <input
              {...register("email", {
                required: "email cannot be blank",
                pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i,
                  message: "Invalid email. Please enter a valid email",
                },
              })}
              type="text"
              id="email"
              name="email"
              placeholder="Ex: demo@demo.com"
            />
            {errors?.email && (
              <div className="regError">{errors.email.message}</div>
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
            If you have an account?
            <Link href={"/admin/login"}>Login here</Link>
          </p>
        </div>
      </AuthModal>
      <ToastContainer />
    </>
  );
};

export default Register;
