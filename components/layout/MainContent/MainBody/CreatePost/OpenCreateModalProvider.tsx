import { createContext, Dispatch, FC, SetStateAction, useEffect, useState } from "react";

interface IModalContext {
    openModal: boolean;
    setOpenModal:Dispatch<SetStateAction<any>>;
    modalSize: string;
    setModalSize: Dispatch<SetStateAction<any>>;
}

export const ModalStatusCtx = createContext<IModalContext>({ 
    openModal: false, 
    setOpenModal: (v:any) => v,
    modalSize: 'sm',
    setModalSize: (v:any) => v
});


const OpenCreateModalProvider: FC = ({ children }) => {
    let [openModal, setOpenModal] = useState(false);
    let [modalSize, setModalSize] = useState('sm');

    return (
        <ModalStatusCtx.Provider value={{ openModal, setOpenModal, modalSize, setModalSize }}>
            {children}
        </ModalStatusCtx.Provider>
    );
};

export default OpenCreateModalProvider;
