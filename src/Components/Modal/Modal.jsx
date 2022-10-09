import React from 'react';
import classes from './modal.module.css'


const Modal = ({sectionModalVisible,SetSectionModalVisible}) => {

    const HideModal = (e) => {
        e.stopPropagation()
        SetSectionModalVisible(classes.modalBG)

    }

    return (
        <div onClick={HideModal} className={sectionModalVisible}>
            <div className={classes.modalWindow}>
                This is modea
            </div>
        </div>
    );
};

export default Modal;