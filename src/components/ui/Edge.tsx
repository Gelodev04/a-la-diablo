

export const TopEdge = () => {
  return (
    <div className="group-hover:scale-125 duration-150 ease-out">
        <div className="w-[2.5rem] h-[3px] bg-[#ff1e00] shadow-red-glow "></div>
        <div className="w-[3px] h-[2.5rem] bg-[#ff1e00] shadow-red-glow"></div>
    </div>
  )
}

export const BottomEdge = () => {
    return (
        <div className="flex flex-col items-end group-hover:scale-125 duration-150 ease-out">
        <div className="w-[3px] h-[2.5rem] bg-[#ff1e00] shadow-red-glow"></div>
        <div className="w-[2.5rem] h-[3px] bg-[#ff1e00] shadow-red-glow"></div>
      </div>
      
    )
  }
