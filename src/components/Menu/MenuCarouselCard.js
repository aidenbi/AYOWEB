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
            <div className="MenuCardContainer">
                <img className="MenuImage" src={image} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} />
                {isHovering && (
                    <div class="MenuTextBox">
                        <div class="MenuText">{text}</div>
                    </div>

                )}
            </div>

        </div>
    )
}

export default MenuCarouselCard