import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="flex h-14 items-center justify-between bg-slate-950 px-8 text-white lg:h-20">
            <div className="flex items-center gap-4 lg:gap-6">
                <Link to="/">
                    <img src="/movieApp.svg" className="w-16 sm:w-20" />
                </Link>
                <Link
                    to={"/search?mediaType=movie"}
                    className="transition-all hover:text-red-500 lg:text-xl"
                >
                    Movie
                </Link>
                <Link
                    to={"/search?mediaType=tv"}
                    className="transition-all hover:text-red-500 lg:text-xl"
                >
                    TV Show
                </Link>
            </div>
            <div>
                <Link
                    to={"/search"}
                    className="transition-all hover:text-red-500"
                >
                    <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        className="cursor-pointer"
                    />
                </Link>
            </div>
        </header>
    );
};
export default Header;
