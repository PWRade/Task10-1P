import React from 'react';
import './Footer.css';

function Footer(props)
{
    return <div className="footer-div">
        <div className="footer-left">
            <h4>{props.newsletter}</h4>
            <form action="/">
                <input type="email" name="newsletter" placeholder="Enter your email..."></input>
                <button type="submit">Subscribe</button>
            </form>
        </div>
        
        <div className="footer-right">
            <a href="#"><img src={process.env.PUBLIC_URL + '/images/twitter.png'} alt="" /></a>
            <a href="#"><img src={process.env.PUBLIC_URL + '/images/instagram.png'} alt="" /></a>
            <a href="#"><img src={process.env.PUBLIC_URL + '/images/facebook.png'} alt="" /></a>
            <div>{props.connect}</div>
        </div>
    </div>;
}

export default Footer;