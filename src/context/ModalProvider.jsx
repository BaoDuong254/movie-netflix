import React, { useEffect } from "react";

const ModalContext = React.createContext();

export const useModalContext = () => {
    const context = React.useContext(ModalContext);
    if (!context) {
        throw new Error("useModalContext must be used within a ModalProvider");
    }
    return context;
};

const ModalProvider = ({ children }) => {
    const [isShowing, setIsShowing] = React.useState(false);
    const [modalContent, setModalContent] = React.useState();

    useEffect(() => {
        if (isShowing) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "scroll";
            document.body.style.overflowX = "hidden";
        }
    }, [isShowing]);

    const openPopup = (content) => {
        setModalContent(content);
        setIsShowing(true);
    };

    return (
        <ModalContext.Provider value={{ openPopup }}>
            {children}{" "}
            {isShowing && (
                <div className="fixed inset-0">
                    <div
                        className="absolute inset-0 flex items-center justify-center bg-slate-600/60"
                        onClick={() => setIsShowing(false)}
                    >
                        {modalContent}
                    </div>
                </div>
            )}
        </ModalContext.Provider>
    );
};

export default ModalProvider;
