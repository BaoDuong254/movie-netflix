import React, { Suspense } from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Loading from "@components/Loading";
import ScrollToTop from "@components/ScrollToTop";

const RootLayout = () => {
    return (
        <div>
            <ScrollToTop />
            <Header />
            <Suspense fallback={<Loading />}>
                <Outlet />
            </Suspense>
        </div>
    );
};

export default RootLayout;
