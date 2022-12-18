import React, { useState } from 'react'

const Card = ({ children, cardIndex, setCardIndex, index }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {cardIndex.includes(index) ? (
        isOpen ? (
          <div className="w-64  m-2 mx-6 bg-white flex flex-col justify-between shadow-lg shadow-gray-500/100">
            {children}
          </div>
        ) : (
          <div
            className="w-64 m-2 h-468 p-5 mx-6 bg-black flex justify-center items-center shadow-lg shadow-gray-500/100"
            onClick={() => {
              setCardIndex([...cardIndex, index + 1])
              setIsOpen(true)
            }}
          >
            <button className="bg-white text-black px-8 py-2 rounded-full text-xl hover:">
              Click me!
            </button>
          </div>
        )
      ) : null}
    </>
  )
}

export default Card
