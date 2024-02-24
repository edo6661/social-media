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
import { useMutation } from "@tanstack/react-query";
import myAxios from "@/config/axiosConfig";
import { UserType } from "@/types/User";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const FormAuth = ({
  motionProps,
  isInRegister,
}: {
  motionProps: MotionProps;
  isInRegister: boolean;
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
    mode: "onBlur",
  });

  const errStyle = "border border-primaryRed  ";

  const errorsUsername = errors.username ? errStyle : "";
  const errorsPassword = errors.password ? errStyle : "";
  const errorsEmail = errors.email ? errStyle : "";
  const disabled = Object.keys(errors).length > 0;
  const requestPath = isInRegister ? "/auth/register" : "/auth/login";

  const mutation = useMutation({
    mutationKey: ["auth"],
    mutationFn: async (data: Partial<UserType>) => {
      await myAxios.post(requestPath, data);
      toast.success("Succesfully login");
      navigate("/");
      // navigate("/");
    },
  });

  if (mutation.isError) {
    console.error(mutation.error);
  }

  const submit = (data: DataAuthSchema) => {
    mutation.mutate(data);
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
        className=" bg-primaryOrange text-white h-10 rounded-xl disabled:cursor-not-allowed disabled:opacity-50 disabled:grayscale transition-all duration-300"
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
              <>
                <motion.input
                  type="text"
                  placeholder="Email"
                  className={errorsEmail}
                  {...register("email")}
                  {...motionProps}
                />
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
        <p>
          {" "}
          <span className=" text-primaryRed">temporary</span> Look at the
          console after submitting
        </p>
      </form>
    </>
  );
};

export default FormAuth;
