import React, {useState} from 'react';
import classes from './MyInput.module.css'
import {useMemo} from "react";
import ContentEditable from "react-contenteditable";


const MyInput = ({type,setTextIfEmpty,defaultText,placeholder,...props}) => {

    const [text, setText] = useState(defaultText)
    const [isFocus, setIsFocus] = useState(false)

    // set input classes

    const types = {
        header: classes.resume_input_header,
        text: classes.resume_input_small,
        persDetHeader: classes.persDetHeader,
        persDetPar: classes.persDetPar,
        contactPar: classes.resume_contact_par,
        name: classes.name,
        h3: classes.h3,
        h4: classes.h4,

    }
    let classInput =[classes.resume_input];

    if (Object.keys(types).includes(type)) {
        classInput.push(types[type])
    }

    console.log(classInput)


    useMemo(() => {

        if (text === '' && !isFocus && setTextIfEmpty) {
            setText(defaultText)
        }

    }, [isFocus])


    return (
        <>
            <ContentEditable
                html={text}
                placeholder={placeholder}
                onBlur={() => setIsFocus(false)}
                onFocus={() => setIsFocus(true)}
                onChange={e => setText(e.target.value)} className={classInput.join(' ')}/>
        </>
    );
};

export default MyInput;