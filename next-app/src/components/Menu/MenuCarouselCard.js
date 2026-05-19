import React, { useState } from 'react'

const MenuCarouselCard = ({ image, text }) => {
    const [isHovering, setIsHovering] = useState(false)

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    return (
        <div className="card-wrapper">
            <div className="MenuCardContainer" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <img className="MenuImage" src={image} />
                {isHovering && (
                    <div className="MenuTextBox">
                        <div className="MenuText">{text}</div>
                    </div>

                )}
            </div>

        </div>
    )
}

export default MenuCarouselCard