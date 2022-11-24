import React from "react";
import "./NotFound.css";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2 className="not-found-title">مکانی یافت نشد</h2>
            <button
                onClick={() => {
                    window.location.reload();
                }}
                className="not-found-reload"
            >
                جستجوی مکان
            </button>
        </div>
    );
};

export default NotFound;
