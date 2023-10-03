import { motion } from "framer-motion"
import React from "react"
import { useState } from "react"

const Wisam = ({img}) => {
    const [isHovered, setIsHovered] = useState(false)
    const [isClicked, setIsClicked] = useState(false)

    const handleHover = () => { setIsHovered(!isHovered) }
    const handleClick = () => { setIsClicked(!isClicked) }
    const handleUnhover = () => { setIsHovered(!isHovered) }

    return (
        <motion.div 
            className="w-32" 
            onHoverStart={handleHover}
            onHoverEnd={handleUnhover}
            onTap={handleClick}
        >
            <motion.img whileHover={{ scale: 1.2, rotate: 90 }} whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }} src={img} className="w-32" />
            {isHovered || isClicked ? 
                <p className="text-center">قارئ القرآن</p>
                : null
            }
            
        </motion.div>
    )
}
export default Wisam