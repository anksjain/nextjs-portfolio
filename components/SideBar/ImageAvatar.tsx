import React from 'react'
import {FaGithub,FaLinkedin,FaInstagram} from 'react-icons/fa'
function ImageAvatar() {
    return (
        <div>
            <img
              src={"./profile/p6.png"}
              className=" object-cover mx-auto my-auto w-48 h-48 
              dark:border-dark-border_color
               border-light-border
               border-4  rounded-full"
            />
            
          </div>
    )
}

export default ImageAvatar
