import React, {useState} from 'react';
import classes from './navigation.module.css'
import Modal from "../Modal/Modal";
import csModal from '../Modal/modal.module.css'


const Navigation = () => {

    const [sectionModalVisible,SetSectionModalVisible] = useState(csModal.modalBG);


    function HandleModal() {
        const classesModal = [csModal.modalBG,csModal['modalBG-active']].join(' ')
        SetSectionModalVisible(classesModal);
    }

    return (
        <>
            <Modal sectionModalVisible={sectionModalVisible} SetSectionModalVisible={SetSectionModalVisible} />
            <div className={classes.nav_container}>
                <div className={classes.nav_resume_setting}>
                    <div className={classes.nav_resume_setting_sections}>
                        <svg onClick={HandleModal} className={classes.icon_sections} xmlns="http://www.w3.org/2000/svg"
                             viewBox="-285 408.9 24 24">
                            <path
                                d="M-287.2 430.7h13.1v2.2h-13.1v-2.2zm0-4.3h13.1v2.2h-13.1v-2.2zm0-13.1h13.1v2.2h-13.1v-2.2zm0-4.4h13.1v2.2h-13.1v-2.2zm0 13.1h13.1v2.2h-13.1V422zm0-4.4h13.1v2.2h-13.1v-2.2zm15.3 15.3h10.9V422h-10.9v10.9zm0-13.1h10.9v-10.9h-10.9v10.9zm0-4.3h10.9v-6.6h-10.9v6.6z"
                                fill="#fff"/>
                        </svg>
                        <p>Sections</p>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Navigation;