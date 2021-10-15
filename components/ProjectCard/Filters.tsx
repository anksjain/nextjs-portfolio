import React, { MouseEventHandler } from 'react'
import FilterItem from './FilterItem'
interface IFilters{
    names:string[]
    applyFilter:(name:string)=>void
    active:string
}
function Filters({names,applyFilter,active}:IFilters) {
    return (
        <div className="flex flex-wrap justify-center my-7">
            {
                names.map((name,index)=>(
                    <FilterItem applyFilter={applyFilter} active={active} key={index} name={name}/>
                ))
            }
        </div>
    )
}

export default Filters
