import React from 'react'

const Card = ({
        title= 'Title',
        description= 'Description',
}) => {
  return (
    <div className={"py-2 px-4 h-full w-full bg-gray-100 flex flex-col items-center justify-center rounded-md"}>
        <div>{title}</div>
        <div>{description}</div>
    </div>
  )
}

export default Card;