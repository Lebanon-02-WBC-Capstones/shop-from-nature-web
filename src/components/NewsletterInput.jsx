import React, { useState } from "react";

const [email, setEmail] = useState("");

function handleSubmit(e) {
    e.preventDefault();
    setEmail(e.target.value);
}
export default function NewsletterInput() {
    return ( 
        <form onSubmit = { handleSubmit } >

        <input type = "text" name = "enterMail" value = { email } required />
        </form >
    
    );
}