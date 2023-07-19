import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
export default ProtectedRoute;



// import React, { Fragment, useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { Navigate, Route } from "react-router-dom";
// // import { USER_REGISTER_SUCCESS } from "../../constants/userConstant";

// const ProtectedRoute = ({ component: Component, isAdmin, ...rest }) => {
//   const { loading, isAuthenticated, user } = useSelector((state) => state.user);
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         isAuthenticated ? (
//           isAdmin ? (
//             <Component {...props} />
//           ) : (
//             <Navigate to="/login" />
//           )
//         ) : (
//           <Navigate to="/login" />
//         )
//       }
//     />
//   );
// };
// const ProtectedRoute = ({ isAdmin, component: Component, ...rest }) => {
//   const { loading, isAuthenticated, user } = useSelector((state) => state.user);
//    useEffect(()=>{
//     if(isAuthenticated){
       
//     }
//    })
//   return (
//     <Fragment>
//       {loading === false && (
//         <Route
//           {...rest}
//           render={(props) => {
//             if (isAuthenticated === false) {
//               return <Navigate to="/login" />;
//             }

//             if (isAdmin === true && user.role !== "admin") {
//               return <Navigate to="/login" />;
//             }

//             return <Component {...props} />;
//           }}
//         />
//       )}
//     </Fragment>
//   );
// };

// export default ProtectedRoute;




// import React from 'react';
// import { useSelector } from 'react-redux';
// import { Route, useNavigate } from 'react-router-dom';

// const ProtectedRoute = ({ isAdmin, component: Component, ...rest }) => {
//   const { loading, isAuthenticated, user } = useSelector((state) => state.user);
//   const navigate = useNavigate();

//   if (loading) {
//     return null; // Render loading state or placeholder if needed
//   }

//   if (!isAuthenticated) {
//     navigate('/login');
//     // return null; // Render loading state or placeholder if needed while navigating
//   }

//   if (isAdmin && user.role !== 'admin') {
//     navigate('/login');
//     // return null; // Render loading state or placeholder if needed while navigating
//   }

//   return <Route {...rest} element={<Component />} />;
// };

// export default ProtectedRoute;

