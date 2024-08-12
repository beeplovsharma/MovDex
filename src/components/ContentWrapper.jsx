import React from 'react'

function ContentWrapper({children}) {
  return (
    <>
        <div className='max-w-[1280px] mx-auto px-[20px]'>
            {children}
        </div>
    </>
  )
}

export default ContentWrapper