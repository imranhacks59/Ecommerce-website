// import React from "react";
// import { Navigate, Outlet } from "react-router-dom";
// const ProtectedRoute = ({ isAuthenticated, children }) => {
 
//   if (!isAuthenticated) {
//     return <Navigate to="/login" />;
//   }
//   // return children; only work for children that will be using protected route
//   // we will use outlet to more readable
//   // return children ? children : <Outlet />;
//   return <Outlet />
// };
// export default ProtectedRoute;
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({
  isAuthenticated,
  children,
  adminRoute,
  isAdmin,
  redirect = "/login",
  redirectAdmin = "/profile",
}) => {
  if (!isAuthenticated) {
    return <Navigate to={redirect} />;
  }

  if (adminRoute && !isAdmin) {
    return <Navigate to={redirectAdmin} />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
// import { useState, useEffect } from "react";
// // import { useAuth } from "../../context/auth";
// import { Navigate, Outlet } from "react-router-dom";
// import { useSelector } from "react-redux";

// export default function ProtectedRoute() {
//   const [ok, setOk] = useState(false);
//   // const [auth, setAuth] = useAuth();
//   const {isAuthenticated}=useSelector(state=>state.user)

//   useEffect(() => {
//     // const authCheck = async () => {
//     //   const res = await axios.get("/api/v1/auth/user-auth");
//       if (isAuthenticated) {
//         setOk(true);
//       } else {
//         setOk(false);
//       }
//     // };
//     // if (auth?.token) authCheck();
//   }, [isAuthenticated]);

//   return ok ? <Outlet /> : Navigate('/login');
// }



