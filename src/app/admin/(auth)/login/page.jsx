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
import { useRouter } from "next/navigation";
import { fetchAuthLogin } from "@/lib/action/authThunk";

const Login = () => {
  const regData = useSelector((state) => state.auth);
  const router = useRouter();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    dispatch(fetchAuthLogin(data));
  };
  console.log(regData);

  //! User register controlled
  const logSuccess = useSelector((state) => state.auth);

  useEffect(() => {
    if (logSuccess.status === "Error") {
      toast.error(
        "No account found with this username. Please try again with a valid username or create a new account.",
        {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        }
      );
    } else if (logSuccess.logToken) {
      router.push(`/admin/products`);
    }
  }, [logSuccess]);

  //!Controlled
  const handleDirection = () => {
    if (regData.status == "Success") {
      toast.info("You are registered, please log in", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    } else router.push("/admin/register");
  };
  return (
    <>
      <AuthModal contentClasname={"auth_login"}>
        <div className="login_header">
          <Image src={Logo} alt="Logo" />
          <h4>Login in to admin</h4>
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
            <span onClick={handleDirection}>Register here</span>
          </p>
        </div>
      </AuthModal>
      <ToastContainer />
    </>
  );
};

export default Login;
