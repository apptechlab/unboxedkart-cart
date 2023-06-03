
import dynamic from "next/dynamic";
import React from "react";
import { useUI } from "../../../contexts/ui.context";

const ManagedModal: React.FC = () => {
    const { displayModal, closeModal, modalView } = useUI();
    return (
        <></>
        // <Modal open={displayModal} onClose={closeModal}>
        // 	{modalView === "LOGIN_VIEW" && <LoginWithMobileNumberForm />}
        // 	{modalView === "SIGN_UP_VIEW" && <SignUpForm />}
        // </Modal>
    );
};

export default ManagedModal;
