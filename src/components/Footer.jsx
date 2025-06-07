import React from "react";

const Footer = () => {
    return (
        <footer className="bg-black text-white">
            <div className="mx-auto w-full max-w-screen-xl p-4 md:py-8">
                <div className="max-sm:flex max-sm:flex-col max-sm:items-center sm:flex sm:items-center sm:justify-between">
                    <a
                        href="#"
                        className="mb-4 flex items-center space-x-3 sm:mb-0 rtl:space-x-reverse"
                    >
                        <img
                            src="/movieApp.svg"
                            className="h-8"
                            alt="MovieAPp Logo"
                        />
                        <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                            Movie App
                        </span>
                    </a>
                    <ul className="mb-6 flex flex-wrap items-center text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a
                                href="#"
                                className="me-4 hover:underline md:me-6"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="me-4 hover:underline md:me-6"
                            >
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="me-4 hover:underline md:me-6"
                            >
                                Licensing
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 max-sm:mt-1 sm:mx-auto lg:my-8 dark:border-gray-700" />
                <div className="block text-sm text-gray-500 max-sm:flex max-sm:flex-row max-sm:items-center max-sm:justify-center sm:text-center dark:text-gray-400">
                    <span>© 2025 BaoDuong</span>
                    <span>. All Rights Reserved.</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
