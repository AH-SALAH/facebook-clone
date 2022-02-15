import { Dispatch, FC, MouseEvent, useCallback, useContext } from 'react'
import Modal from '../../../../Modal';
import { ModalStatusCtx } from './OpenCreateModalProvider';
import FormBody from './FormBody';
import { useUppyUpload } from '../../../../FileUpload/Uppy';

const CreateModal: FC = () => {
    let { openModal, setOpenModal } = useContext(ModalStatusCtx);
    // init uppy here to persist data after modal close
    let upy = useCallback(() => useUppyUpload(), []);

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
            // size={'lg'}
        >
            <FormBody upy={upy()} />
        </Modal>
    )
}

export default CreateModal;
