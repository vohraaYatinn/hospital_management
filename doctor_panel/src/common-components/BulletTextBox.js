import React, { useState, useRef, useEffect } from 'react';

function BulletTextbox({text, setText, name}) {
     useEffect(()=>{
        if(name){
            setText((prevMedication) => ({
                ...prevMedication,
                [name]: '\u2022 ',
              }));
        }
        else{
            setText(('\u2022 '))

        }
     },[]); 
    const textareaRef = useRef(null);

    const handleChange = (event) => {
        if(event.target.value != ""){
            if(name){
                setText((prevMedication) => ({
                    ...prevMedication,
                    [name]: event.target.value,
                  }));
            }
            else{
                setText(event.target.value);

            }
        }
    };

    useEffect(() => {
        adjustTextareaHeight();
    }, [text]);

    const adjustTextareaHeight = () => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto'; // Reset height to auto to properly calculate new height
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set the new height
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            insertBullet();
        }
    };

    const insertBullet = () => {
        const selectionStart = textareaRef.current.selectionStart;
        const selectionEnd = textareaRef.current.selectionEnd;
        const newText = `${text.slice(0, selectionStart)}\n\u2022 ${text.slice(selectionEnd)}`;
        if(name){
            setText((prevMedication) => ({
                ...prevMedication,
                [name]: newText,
              }));
        }
        else{
            setText(newText);

        }
        // Move cursor to the end of the inserted bullet point
        textareaRef.current.selectionStart = textareaRef.current.selectionEnd = selectionStart + 3;
        adjustTextareaHeight(); // Adjust height after inserting new text
    };

    return (
        <textarea
            ref={textareaRef}
            id="bulletTextbox"
            className="bullet-textbox"
            value={text}
            onChange={handleChange}
            onKeyDown={handleKeyPress}
            style={{width:"100%"}}
        />
    );
}

export default BulletTextbox;
