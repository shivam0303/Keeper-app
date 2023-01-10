import React from "react";

let newDate = new Date();
let year = newDate.getFullYear();

function Footer(){
    return(
        <footer>
            <p>Made with love by shivam {year}</p>
        </footer>
    );
};

export default Footer;