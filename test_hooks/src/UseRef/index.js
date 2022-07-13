import React from "react";
import { useImperativeHandle } from "react";
import { forwardRef } from "react";
import { useRef } from "react";

function UseRef(props,ref) {
    const inputRef = useRef();

    useImperativeHandle(ref, () => ({
        focus: () => {
          inputRef.current.focus();
        },
        theValue:() =>{
            return inputRef.current.value;
        }
      }));   
      
      

    const onButtonClick = () => {
      // `current` points to the mounted text input element
      inputRef.current.focus();
      console.log(inputRef.current.value)
    };
    return (
      <div>
        <h2>UseRef</h2>
        <input ref={inputRef} type="text" />
        <button onClick={onButtonClick}>Focus the input</button>
      </div>
    );

      
}
UseRef = forwardRef(UseRef);

export default UseRef;

          
          