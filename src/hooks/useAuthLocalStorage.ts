// import { useGlobalState } from "@/lib/zustand";
// import { UserType } from "@/types/User";
// import { useEffect } from "react";

// const useAuthLocalStorage = () => {
//   const { setCurrentUser, currentUser } = useGlobalState((state) => state);

//   useEffect(() => {
//     if (currentUser) {
//       localStorage.setItem("user", JSON.stringify(currentUser));
//     }
//   }, [currentUser]);

//   useEffect(() => {
//     const user = localStorage.getItem("user");
//     if (user) {
//       setCurrentUser(JSON.parse(user) as UserType);
//     }
//   }, [setCurrentUser]);

//   return { setCurrentUser };
// };

// export default useAuthLocalStorage;
