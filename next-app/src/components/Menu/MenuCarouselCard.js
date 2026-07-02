import React, { useState } from 'react'
import Image from 'next/image'

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
                <Image
                    className="MenuImage"
                    src={image}
                    alt={text || 'Menu item'}
                    width={360}
                    height={240}
                />
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