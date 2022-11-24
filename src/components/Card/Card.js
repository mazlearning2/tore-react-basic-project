import React, { useState } from "react";
import "./Card.css";

const Card = (props) => {
    const [readMore, setReadMore] = useState(false);
    return (
        <div className="card">
            <div className="card-image">
                <img src={props.image} alt="تصویر یافت نشد" />
            </div>
            <h2 className="card-title">{props.name}</h2>
            <p className="card-description">
                {readMore ? props.info : `${props.info.substring(0, 120)}...`}
                &nbsp;
                <a
                    onClick={() => {
                        setReadMore(!readMore);
                    }}
                    className="card-read-more"
                >
                    {readMore ? " بستن ادامه مطالب" : "ادامه مطالب"}
                </a>
            </p>
            <div className="card-button-container">
                <button
                    onClick={() => props.click(props.id)}
                    className="card-button"
                >
                    جالب نیس این مکان
                </button>
            </div>
        </div>
    );
};

export default Card;
