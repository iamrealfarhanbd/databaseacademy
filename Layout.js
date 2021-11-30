import Head from 'next/head';
import React from 'react';
import Footer from './components/Homepage/Footer';
import Header from './components/Homepage/Header';


const Layout = ({children}) => {
    return (
        <>
            <Head>
                <link rel="icon" href="assets/images/favicon.ico" type="image/x-icon" />
                <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:300,300i,400,400i,600,600i,700,700i&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Muli:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap" rel="stylesheet" />
                <link href="assets/css/font-awesome-all.css" rel="stylesheet" />
                <link href="assets/css/flaticon.css" rel="stylesheet" />
                <link href="assets/css/owl.css" rel="stylesheet" />
                <link href="assets/css/bootstrap.css" rel="stylesheet" />
                <link href="assets/css/jquery.fancybox.min.css" rel="stylesheet" />
                <link href="assets/css/animate.css" rel="stylesheet" />
                <link href="assets/css/imagebg.css" rel="stylesheet" />
                <link href="assets/css/global.css" rel="stylesheet" />
                <link href="assets/css/header.css" rel="stylesheet" />
                <link href="assets/css/color.css" rel="stylesheet" />
                <link href="assets/css/style.css" rel="stylesheet" />
                <link href="assets/css/responsive.css" rel="stylesheet" />

                <script src="assets/js/jquery.js"></script>
                <script src="assets/js/popper.min.js"></script>
                <script src="assets/js/bootstrap.min.js"></script>
                <script src="assets/js/owl.js"></script>
                <script src="assets/js/wow.js"></script>
                <script src="assets/js/validation.js"></script>
                <script src="assets/js/jquery.fancybox.js"></script>
                <script src="assets/js/appear.js"></script>
                <script src="assets/js/jquery.countTo.js"></script>
                <script src="assets/js/scrollbar.js"></script>
                <script src="assets/js/tilt.jquery.js"></script>
                <script src="assets/js/script.js"></script>
            </Head>
            <div className="page-wrapper">
                <Header/>
                {children}
                <Footer/>

            </div>
            
            
        </>
    );
};

export default Layout;