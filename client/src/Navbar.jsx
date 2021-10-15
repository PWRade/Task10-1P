import React from 'react';
import './Navbar.css';

function Navbar(props)
{
    return <div className="navi">
        <div id="nav-left"><a href="/"><h2>{props.name}</h2></a></div>
        <div id="nav-center">
            <div><a href="/">{props.posttask}</a></div>
            <div><a href="/">{props.expert}</a></div>
            <div><a href="/">{props.findtask}</a></div>
            <div><a href="/">{props.howitworks}</a></div>
        </div>
        <div id="nav-right">
            <a href="/"><div>{props.signin}</div></a>
        </div>
    </div>;
}

export default Navbar;