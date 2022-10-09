import React, {useEffect, useMemo, useRef, useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import MyInput from "../MyInput/MyInput";
import classes from "./resumeSection.module.css";
import websiteImg from '../../assets/website.png'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillPhone, AiFillChrome} from 'react-icons/ai'
import {IoMailOpen} from 'react-icons/io5'


import styled from 'styled-components';


const ResumeSection = () => {


    const [image, setImage] = useState();
    const [imageURL, setImageURL] = useState();
    const [isImageHover, setIsImageHover] = useState('');

    const inputImageRef = useRef(null)

    const SelectFile = () => {
        inputImageRef.current.click()
    }

    const handleFileChange = e => {
        setImage(e.target.files[0])
    }


    const TestFunc = () => {
        console.log()
    }


    useEffect(() => {

        if (image) {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(image);
            fileReader.onload = e => {
                setImageURL(e.target.result)
            }
        }


    }, [image])

    return (<>
        <button onClick={TestFunc}>Console.log</button>
        <div className={'resume_editor'}>
            <div className={'resume_header_side'}>
                <div onMouseEnter={() => setIsImageHover('stylesButton')} onMouseLeave={() => setIsImageHover('')}
                     className={'resume_image'}>
                    {imageURL

                        ? <>
                            <button onClick={SelectFile} className={isImageHover}>
                                <AddIcon/>
                                Add image
                                <input accept="image/*" onChange={handleFileChange} style={{display: 'none'}}
                                       ref={inputImageRef} type={'file'}/>
                            </button>
                            <img src={imageURL}/>
                        </> : <button onClick={SelectFile} className={'stylesButton'}>
                            <AddIcon/>
                            Add image
                            <input accept="image/*" onChange={handleFileChange} style={{display: 'none'}}
                                   ref={inputImageRef} type={'file'}/>
                        </button>}

                </div>

                <div className={'resume_right_header'}>
                    <MyInput type={'name'} defaultText={''}
                             placeholder={'Enter your name'}/>
                    <MyInput type={'header'} defaultText={''}
                             placeholder={'Your role or profession'}/>
                    <MyInput type={'header'} defaultText={'WORK EXPERIENCE'}
                             placeholder={'WORK EXPERIENCE'}/>
                </div>


                {/*header: */}
                {/*text: */}
                {/*persDetHeader:*/}
                {/*persDetPar:*/}


            </div>


            <div className={'resume_body_side'}>

                <div className={'resume_body_left_side'}>


                    <MyInput type={'header'} setTextIfEmpty defaultText={'Address'} placeholder={'test'}/>
                    <MyInput type={'text'} defaultText={''}
                             placeholder={'Enter your professional summary. This is ' +
                                 'the first thing that a potential employer will read ' +
                                 'and it should give them an overview of your skills, ' +
                                 'experience and qualities. A good summary should be ' +
                                 'concise and to the point. To get help writing a ' +
                                 'professional summary, press the Writing Assistant ' +
                                 'button.'}/>


                    <div className={classes.personal_details}>
                        <MyInput type={'header'} setTextIfEmpty defaultText={'PERSONAL DETAILS'}
                                 placeholder={'PERSONAL DETAILS'}/>
                        <div className={classes.personal_details_module}>
                            <MyInput type={'persDetHeader'} setTextIfEmpty defaultText={'Birth date'}
                                     placeholder={'Birth date'}/>
                            <MyInput type={'persDetPar'} defaultText={''} placeholder={'Enter your birth date'}/>
                        </div>
                        <div className={classes.personal_details_module}>
                            <MyInput type={'persDetHeader'} setTextIfEmpty defaultText={'Nationality'}
                                     placeholder={'Nationality'}/>
                            <MyInput type={'persDetPar'} defaultText={''} placeholder={'Enter your nationality'}/>
                        </div>
                        <div className={classes.personal_details_module}>
                            <MyInput type={'persDetHeader'} setTextIfEmpty defaultText={'Address'}
                                     placeholder={'Birth date'}/>
                            <MyInput type={'persDetPar'} defaultText={''} placeholder={'Enter your address'}/>
                        </div>
                        <div className={classes.personal_details_module}>
                            <MyInput type={'persDetHeader'} setTextIfEmpty defaultText={'Marital status'}
                                     placeholder={'Birth date'}/>
                            <MyInput type={'persDetPar'} defaultText={''} placeholder={'Enter your marital status'}/>
                        </div>
                    </div>

                    {/*###CONTACT###*/}

                    <div className={classes.contacts_container}>
                        <MyInput type={'header'} setTextIfEmpty defaultText={'Contact'}
                                 placeholder={'Contact'}/>
                        <div className={classes.contacts_block}>
                            <IoMailOpen className={classes.contacts_block_img}/>
                            <MyInput type={'contactPar'} defaultText={''}
                                     placeholder={'Enter your email'}/>
                        </div>
                        <div className={classes.contacts_block}>
                            <AiFillPhone className={classes.contacts_block_img}/>
                            <MyInput type={'contactPar'} defaultText={''}
                                     placeholder={'Enter your phone'}/>
                        </div>
                        <div className={classes.contacts_block}>
                            <AiFillChrome className={classes.contacts_block_img}/>
                            <MyInput type={'contactPar'} defaultText={''}
                                     placeholder={'Enter your website'}/>
                        </div>
                        <div className={classes.contacts_block}>
                            <img src={websiteImg}/>
                            <MyInput type={'contactPar'} defaultText={''}
                                     placeholder={'Enter your website'}/>
                        </div>
                        <div className={classes.contacts_block}>
                            <BsLinkedin className={classes.contacts_block_img}/>
                            <MyInput type={'contactPar'} defaultText={''}
                                     placeholder={'Enter your website'}/>
                        </div>
                    </div>

                </div>


                <div className={'resume_body_right_side'}>
                    <MyInput type={'header'} defaultText={'WORK EXPERIENCE'}
                             placeholder={'WORK EXPERIENCE'}/>

                </div>
            </div>
        </div>
    </>);
};

export default ResumeSection;