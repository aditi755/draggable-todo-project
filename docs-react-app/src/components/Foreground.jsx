import React from 'react'
import Card from './Card'
import "../App.jsx"
import {useRef} from 'react'
function Foreground() {
  const ref = useRef(null) 
    const data = [
        {
          description : "Lorem ipsum here is the largest fvfvfn  that use nf og the part",
          filesize: ".9mb",
          close: true,
          tag: {
            isOpen: true, tagTitle: "download now", tagColor: "green", 
          }
        },
        {
          description : "Lorem ipsum here is the largest fvfvfn  that use nf og the part",
          filesize: ".9mb",
          close: true,
          tag: {
            isOpen: true, tagTitle: "download now", tagColor: "green", 
          }
        },
        {
          description : "This is a trial ipsum here is the largest fvfvfn  that use nf og the part",
          filesize: ".9mb",
          close: true,
          tag: {
            isOpen: true, tagTitle: "download now", tagColor: "green", 
          }
        }
    ]
  
  return (
    <div>
    <div ref={ref} className="flex gap-20 fixed top-0 left-0 z-[3] w-full h-full ">
       {data.map((item, index) => (
        <Card info={item} reference={ref}/>
      ))}
    </div>
    </div>
  )
}

export default Foreground