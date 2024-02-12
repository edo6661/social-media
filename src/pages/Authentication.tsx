import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { containerAuthVars } from "@/lib/framer-motion/authentication";
import { motion } from "framer-motion";
const Authentication = () => {
  return (
    <>
      <motion.section
        className="auth-container"
        variants={containerAuthVars}
        initial="initial"
        animate="animate"
        whileInView={"inView"}
      >
        <article className=" auth-img-container ">
          <img
            src="/temporary-auth.png"
            alt="auth"
            className=" w-[448px] h-[431px]"
          />
        </article>
        <article className="spesific-auth">
          <h1>Do'Talk</h1>
          <p className=" text-[20px] font-extralight italic">
            say what you want to say
          </p>
          <div className="container-input">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
          </div>
          <div className="flex items-center justify-between max-w-[300px] text-xs mx-auto">
            <div className="flex items-center gap-2 ">
              <input type="checkbox" id="remember" />
              <p className=" text-primaryDarkGray">Remember Me</p>
            </div>
            <Link className=" text-primaryBlue" to="/forgot">
              Forgot Password
            </Link>
          </div>
          <div className="flex flex-col gap-2  max-w-[300px] mx-auto pb-[81px] pt-[35px]">
            <button className=" bg-primaryNavy text-white h-10 rounded-xl">
              Login
            </button>
            <button className="flex items-center justify-center mx-auto gap-2 h-10 border-[0.5px] w-full rounded-xl">
              <span>
                <FcGoogle size={20} />
              </span>
              <span className=" font-inter font-[500] text-[12px] text-primaryDarkGray">
                Login With Google
              </span>
            </button>
          </div>
          <div className="flex items-center gap-2 text-xs justify-center ">
            <p className="  text-primaryBlack">Don’t have an account yet?</p>
            <button className=" text-primaryRed">Sign up</button>
          </div>
        </article>
      </motion.section>
    </>
  );
};

export default Authentication;
