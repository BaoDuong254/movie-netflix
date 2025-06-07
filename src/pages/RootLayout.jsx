import React, { Suspense } from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Loading from "@components/Loading";
import ScrollToTop from "@components/ScrollToTop";
import Footer from "@components/Footer";

const RootLayout = () => {
    return (
        <div>
            <ScrollToTop />
            <Header />
            <Suspense fallback={<Loading />}>
                <Outlet />
            </Suspense>
            <Footer />
        </div>
    );
};

export default RootLayout;
