import React from 'react'
import { IconBaseProps } from 'react-icons'
interface IContactItem{
    title:string
    contact?:string
    icon:IconBaseProps
    type?:string
}
function ContactItem({title,contact,icon,type}:IContactItem) {
    return (
        <a href={`${type}:${contact}`}>

        <div className="px-8 py-14 mb-10 dark:bg-dark-background_dark_grey bg-light-sidebar_dark  flex flex-row  items-center
        dark:hover:border-indigo-700 hover:border-light-border_2
        transition-all ease-in-out
        dark:border-dark-background_dark_grey border-light-border
        hover:translate-y-3  border-t-4">
            <div className="left pr-10">
                <p className="text-5xl">{icon}</p>
            </div>
            <div className="right">
                <h6 className="text-lg font-medium">{title}</h6>
                <p  className="break-all">{contact}</p>
            </div>
        </div>
        </a>
    )
}

export default ContactItem
