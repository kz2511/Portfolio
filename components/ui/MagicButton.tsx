import React from 'react'

interface buttonProps {
    title:string,
    icon:React.ReactNode,
    position:string,
    handelClick?:()=>void,
    otherClasses?:string
}
const MagicButton = ({
    title,icon,position,handelClick,otherClasses
}:buttonProps) => {
  return (
      <div>
          <button role='button' tabIndex={1} onClick={handelClick} className={`relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none shadow-sm hover:shadow-md transition-shadow`}
        >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#fbc2eb_0%,#a18cd1_50%,#fbc2eb_100%)] opacity-70" />

            <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
             bg-white px-7 text-sm font-semibold text-foreground backdrop-blur-3xl gap-2 ${otherClasses}`}>
                {position=='left' && icon}
                {title}
                {position=='right' && icon}
            </span>
        </button>
    </div>
  )
}

export default MagicButton
