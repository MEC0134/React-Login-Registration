import React from "react";
// import FormInput from "./input";
// import FormLabel from "./label";

function Form(props) {

    return (
        <div className="row align-items-center" style={{height: "85vh"}}>
            <div className="mx-auto col-8 col-md-6 col-lg-4 form-frame">
                <h1 className="form-title">{props.formTitle}Placeholder</h1>
                <form action={props.action} method="POST">
                    <FormLabel labelName="Email" labelFor="useremail" />
                    <FormInput inputType="email" inputName="useremail" class="form-control" />
                    <FormLabel labelName="Name" labelFor="username" />
                    <FormInput inputType="text" inputName="username" class="form-control" />
                    <FormLabel labelName="Password" labelFor="userpassword" />
                    <FormInput inputType="password" inputName="userpassword" class="form-control" />
                    <FormLabel labelName="Confirm Password" labelFor="confirmpassword" />
                    <FormInput inputType="password" inputName="confirmpassword" class="form-control" />
                </form>
            </div>
        </div>
    );
}


export default Form;