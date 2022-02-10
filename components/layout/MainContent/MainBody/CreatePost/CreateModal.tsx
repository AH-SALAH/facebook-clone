import { Dispatch, FC, MouseEvent, useContext } from 'react'
import Modal from '../../../../Modal';
import { ModalStatusCtx } from './OpenCreateModalProvider';
import FormBody from './FormBody';

const CreateModal: FC = () => {
    let { openModal, setOpenModal } = useContext(ModalStatusCtx);

    let handleCloseModal = (e?: MouseEvent, setIsOpen?: Dispatch<any>) => {
        if (setIsOpen) setIsOpen(false);
        setOpenModal(false);
    };

    return (
        <Modal
            openModal={openModal}
            setOpenModal={setOpenModal}
            closeModal={handleCloseModal}
            routePath={'/createpost'}
        size={'lg'}
        >
            <FormBody />
        </Modal>
    )
}

export default CreateModal;
