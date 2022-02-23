import React from "react";
import {FaTimes} from 'react-icons/fa'
import { links, social } from "../Data";
import logo from '../logo.svg'

const Sidebar =() => {
    return <aside className="sidebar show-sidebar">
        <div className="sidebar-header">
            <img src={logo} className = "logo" alt = 'logo'/>
            <button className="close-btn"> <FaTimes /></button>
        </div>
        <ul className="links">
            {links.map((link)=>{
                const {id, url, text, icon} = link;
                return (
                    <li key={id}>
                        <a href={url}>
                            {icon}
                            {text}
                        </a>
                    </li>
                )
            })}
        </ul>
        <ul className="social-icons">
            {social.map((social)=>{
                const {id, url, icon} = social;
                return (
                    <li key={id}>
                        <a href={url}>
                            {icon}
                        </a>
                    </li>
                )
            })}
        </ul>
    </aside>
}

export default Sidebar