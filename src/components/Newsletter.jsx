import React from "react";
import NewsletterInput from "../src/components/NewsletterInput";

export default function Newsletter() {
    return ( 
        <div >
        
        <p> Subscribe to our newsletter and stay updated! </p>    
        <NewsletterInput />
         <button className = "btn" >
        Subscribe 
        </button> 
        </div>
    );
}