import React, {useState} from "react";
export default function Contoh(){
    // let title = "welcome to my website";
    const [title, setTitle] = useState("Welcome to my website!!!")
    let subtitle = "this website for learning react";
    const handleClick = () =>{
        // title = "selamat datang di website saya";
        setTitle("selamat datang di website saya!!!")
        console.log(title);
    }
    return(
        <div>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <button onClick={handleClick}>click Me</button>
        </div>
    )
}