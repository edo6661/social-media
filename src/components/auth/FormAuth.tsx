import { AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FcGoogle } from "react-icons/fc";
import { MotionProps } from "@/types/Auth";
import { DataAuthSchema, getAuthSchema } from "@/lib/zod/zodAuth";
import { DevTool } from "@hookform/devtools";
import { DEV } from "@/constant";
import { useNavigate } from "react-router-dom";
import useAuthMutation from "@/hooks/useAuthMutation";
import { errorsAuth, optionalToast, requestPath } from "@/helpers/auth";
import { Button } from "../ui/button";
import React from "react";

const FormAuth = ({
  motionProps,
  isInRegister,
  setIsInRegister,
}: {
  motionProps: MotionProps;
  isInRegister: boolean;
  setIsInRegister: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const navigate = useNavigate();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<DataAuthSchema>({
    resolver: zodResolver(getAuthSchema(isInRegister)),
    mode: "onChange",
  });
  const { errorsUsername, errorsPassword, errorsEmail } = errorsAuth(errors);
  const reqPath = requestPath(isInRegister);
  const optToast = optionalToast(isInRegister);

  const { mutate, isPending } = useAuthMutation({
    reqPath,
    optToast,
    isInRegister,
    setIsInRegister,
    reset,
    navigate,
  });

  const submit = (data: DataAuthSchema) => {
    mutate(data);
  };

  const loginGoogle = (
    <Button
      className=" mx-auto  border-[0.5px] w-full rounded-xl"
      type="button"
    >
      <span>
        <FcGoogle size={20} />
      </span>
      <span className=" font-inter font-[500] text-[12px] text-primaryDarkGray">
        Login With Google
      </span>
    </Button>
  );

  const loginSignUpEl = (
    <motion.div className="container-actions" {...motionProps}>
      <Button variant="auth" type="submit">
        {!isPending ? (isInRegister ? "Sign Up" : "Login") : "Loading..."}
      </Button>
      {!isInRegister && loginGoogle}
    </motion.div>
  );

  const elLoginSignUpAnimated = (
    <>
      <AnimatePresence>{isInRegister && loginSignUpEl}</AnimatePresence>
      <AnimatePresence>{!isInRegister && loginSignUpEl}</AnimatePresence>
    </>
  );

  return (
    <>
      {DEV && <DevTool control={control} />}
      <form onSubmit={handleSubmit(submit)} className="">
        <div className="container-input">
          <input
            type="text"
            placeholder="Username"
            {...register("username")}
            className={errorsUsername}
          />

          <AnimatePresence>
            {isInRegister && (
              <motion.input
                type="email"
                placeholder="Email"
                className={errorsEmail}
                {...register("email")}
                {...motionProps}
              />
            )}
          </AnimatePresence>
          <input
            type="password"
            placeholder="Password"
            {...register("password")}
            className={errorsPassword}
          />
        </div>
        {!isInRegister && (
          <motion.div className="container-forgot" {...motionProps}>
            <div>
              <input type="checkbox" id="remember" />
              <p>Remember Me</p>
            </div>
            <Link to="/forgot">Forgot Password</Link>
          </motion.div>
        )}
        {elLoginSignUpAnimated}
        <p>
          <span className=" text-primaryRed">temporary</span> Look at the
          console after submitting
        </p>
      </form>
    </>
  );
};

export default FormAuth;
