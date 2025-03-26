import React from 'react'

interface SubmitButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({ onClick }) => {
  return (
    <button type='button' onClick={onClick} className='bg-green max-w-[200px] font-pirata py-2  cursor-pointer hover:bg-transparent hover:outline-1 hover:outline-green  transition-all duration-100 ease-out shadow-lg mb-1  '>
        <span>Submit</span>
    </button>
  )
}
