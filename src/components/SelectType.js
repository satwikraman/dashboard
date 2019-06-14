import React from 'react'
import A from '../assets/001-pen.svg'
import B from '../assets/002-web.svg'
import C from '../assets/003-web-design.svg'
const SelectType =()=>{
    return(
        <div className="selecthome">
        <span className="simg">
        <img src={A} className="img1" alt="1"/>
        </span>
        <span className="simg1">
        <img src={C} className="img2" alt="1"/>
        </span>
        <span className="simg">
        <img src={B} className="img2" alt="1"/>
        </span>
        </div>
    )
}
export default SelectType