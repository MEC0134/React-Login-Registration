import React from "react";



function FormInput(props) {

    return <input type={props.inputType} name={props.inputName} className={props.class} required></input>
}



export default FormInput;