import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import { Helmet } from "react-helmet";
// import { Toaster } from "react-hot-toast";
const Layout = ({ children,title,description,keywords }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        {/* <meta name="author" content={author} /> */}
        <title>{title}</title>
      </Helmet>
      <Navbar />
      {/* <main style={{ minHeight: "70vh" }}>
        <Toaster /> */}

        {children}
      {/* </main> */}
      <Footer />
    </div>
  );
};

// Layout.defaultProps = {
//   title: "Ecommerce app - shop now",
//   description: "mern stack project",
//   keywords: "mern,react,node,mongodb",
//   author: "Techinfoyt",
// };

export default Layout;