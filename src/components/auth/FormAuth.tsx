import { AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FcGoogle } from "react-icons/fc";
import { MotionProps } from "@/types/Auth";
import { DataAuthSchema, getAuthSchema } from "@/lib/zod/zodAuth";

const FormAuth = ({
  motionProps,
  isInRegister,
}: {
  motionProps: MotionProps;
  isInRegister: boolean;
}) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<DataAuthSchema>({
    resolver: zodResolver(getAuthSchema(isInRegister)),
    mode: "onTouched",
  });

  const errStyle = "border border-primaryRed  ";

  const errorsUsername = errors.username ? errStyle : "";
  const errorsPassword = errors.password ? errStyle : "";
  const errorsEmail = errors.email ? errStyle : "";
  const disabled = Object.keys(errors).length > 0;

  const submit = (data: DataAuthSchema) => {
    console.log(data);
    reset();
  };

  const loginGoogle = (
    <button
      className="flex items-center justify-center mx-auto gap-2 h-10 border-[0.5px] w-full rounded-xl"
      type="button"
    >
      <span>
        <FcGoogle size={20} />
      </span>
      <span className=" font-inter font-[500] text-[12px] text-primaryDarkGray">
        Login With Google
      </span>
    </button>
  );

  const loginSignUpEl = (
    <motion.div className="container-actions" {...motionProps}>
      <button
        className=" bg-primaryNavy text-white h-10 rounded-xl disabled:cursor-not-allowed disabled:opacity-50 disabled:grayscale transition-all duration-300"
        type="submit"
        disabled={disabled}
      >
        {isInRegister ? "Sign Up" : "Login"}
      </button>
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
    <form onSubmit={handleSubmit(submit)}>
      <div className="container-input">
        <input
          type="text"
          placeholder="Username"
          {...register("username")}
          className={errorsUsername}
        />

        <AnimatePresence>
          {isInRegister && (
            <>
              <motion.input
                type="text"
                placeholder="Email"
                className={errorsEmail}
                {...register("email")}
                {...motionProps}
              />
              {errors.email && (
                <motion.p
                  className="text-primaryRed text-[12px] font-inter font-[500] mt-1"
                  {...motionProps}
                >
                  {errors.email.message}
                </motion.p>
              )}
            </>
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
    </form>
  );
};

export default FormAuth;
