import ImageComponent from "@components/Image";
import { useModalContext } from "@context/ModalProvider";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Movie = (props) => {
    const { data, trailerVideoKey } = props;
    const { backdrop_path, title, release_date, overview, id } = data;

    const { openPopup } = useModalContext();

    return (
        <div>
            <ImageComponent
                src={
                    backdrop_path &&
                    `https://image.tmdb.org/t/p/original${backdrop_path}`
                }
                className="aspect-video h-[90vh] w-full object-cover brightness-50"
                alt={title}
                width={1920}
                height={1080}
            />
            <div className="absolute bottom-[10%] left-8 w-1/2 sm:w-1/3">
                <p className="mb-2 font-bold sm:text-[2vw]">{title}</p>
                <div>
                    <p className="mb-1 inline-block border border-gray-400 p-1 text-gray-400">
                        PG13
                    </p>
                    <p className="sm:text-[1.2vw]">{release_date}</p>
                </div>
                <div>
                    <div className="mt-4 hidden text-[1.2vw] sm:block">
                        <p className="mb-2 font-bold">Overview</p>
                        <p>{overview}</p>
                    </div>
                    <div className="mt-4">
                        <button
                            className="mr-2 rounded bg-white px-4 py-2 text-10 text-black transition duration-300 hover:bg-gray-200 lg:text-lg"
                            onClick={() => {
                                openPopup(
                                    <iframe
                                        title="Trailer"
                                        className="aspect-video w-[50vw]"
                                        src={`https://www.youtube.com/embed/${trailerVideoKey}`}
                                    />
                                );
                            }}
                        >
                            <FontAwesomeIcon icon={faPlay} /> Trailer
                        </button>
                        <Link to={`/movie/${id}`}>
                            <button className="rounded bg-slate-300/35 px-4 py-2 text-10 transition duration-300 hover:bg-slate-300/50 lg:text-lg">
                                View Detail
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Movie;
