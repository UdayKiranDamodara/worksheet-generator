import React, { useState } from 'react'

const Answer = ({answer}) => {
    const [active, setActive] = useState(false)

    const handleCLick = () => {
        setActive(!active)
    }

    return(
        <div className='answer-container' onClick={event => handleCLick()}>
        {/* <button className='answer-element' onClick={(event)=>setActive(!active)}>{(active)? 'Hide Answer' : 'Show answer'}</button>
        <h4 className='answer-element'>{(active) ? answer : ''}</h4> */}
        {active ? answer : 'Show Answer'}
        </div>
    )
}

export default Answer