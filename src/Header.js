import React from "react"
import "./css/Header.css"
import left_image from "./images/header_image1.png"
import right_image from "./images/header_image2.png"

export default function Header() {
    return (
        <div className="Header">
            <img className="Header_Left_Image" src={left_image} />
            <div className="Header_Text">
                Meme Generator
            </div>
            <img className="Header_Right_Image" src={right_image} />
        </div>
    )
}