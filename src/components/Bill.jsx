import React from 'react'

const Bill = ({bill, setBill}) => {
    


  return (
    <div className='bill'>
        <div className="bill-text-input">
            <p>How Much was the Bill?</p>
            <input type="text" placeholder='Enter the Bill' value={bill} onChange={(e) => setBill(Number(e.target.value))} />
        </div>
      
    </div>
  )
}

export default Bill
