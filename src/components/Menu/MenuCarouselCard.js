import React, { useState } from 'react'

const MenuCarouselCard = (props) => {
    const [isHovering, setIsHovering] = useState(false)
    const imageSource = props.image

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    return (
        <div className="card-wrapper">
            <div className="MenuCardContainer">
                <img className="MenuImage" src={imageSource} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} />
                {isHovering && (
                    <div class="MenuTextBox">
                        <div class="MenuText">Centered</div>
                    </div>

                )}
            </div>

        </div>
    )
}

export default MenuCarouselCard