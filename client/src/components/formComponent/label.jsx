import React from "react";


function FormLabel(props) {

    return <label for={props.labelFor}>{props.labelName}</label>
}




export default FormLabel;