//This File is created by Krishna
import React from "react";

const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

const ArticleCard = ({ headline, thumbnail, sectionName, webPublicationDate, webUrl }) => {
    const formattedDate = new Date(webPublicationDate).toLocaleDateString();
    const labelColor = getRandomColor();
    return (
        <article>
            <a href={webUrl} target="_blank">
                <div className="article">
                    <div className="article_img">
                        <div className="article_bg" style={{ backgroundImage: `url(${thumbnail})` }}></div>
                        <label><i style={{ backgroundColor: labelColor }}></i>{sectionName}</label>
                    </div>
                    <div className="article_txt">
                        <h3>{headline}</h3>
                        <p>Published On: <span> {formattedDate}</span></p>
                    </div>
                </div>
            </a>
        </article>
    );
}
export default ArticleCard;