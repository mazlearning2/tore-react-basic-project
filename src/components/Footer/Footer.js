import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container container-footer">
                <div className="footer-image">
                    <img src="/images/profile.jpg" alt="" />
                </div>
                <h2 className="about-author">برنامه نویس صفحه : محمدعلی زارعی</h2>
            </div>
        </footer>
    );
};

export default Footer;
