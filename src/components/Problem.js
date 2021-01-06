import React, { useState } from 'react';
import Answer from './Answer'
import './styles/Problem.css'

function Problem(props){
    console.log(props)
    let answer = 0;

    const [active, setActive] = useState(false)

    const num1 = Math.floor((Math.random() * 10) + 1);
    const num2 = Math.floor((Math.random() * 10) + 1);
    const fixed = props.fixed;
    const sign1 = Math.floor((Math.random() * 2)) ? '+' : '-';
    const sign2 = Math.floor((Math.random() * 2)) ? '+' : '-';
    answer = eval(`${num1} ${sign1} ${num2} ${sign2} ${fixed} `);

    return(
        <div className='problem-container'>
            <h4>{num1}</h4>
            <h4>{sign1}{num2}</h4>
            <h4>{sign2}{fixed}</h4>
            <h4><input type='text' placeholder='Answer' /></h4>
            <Answer answer={answer}/>
            {/* THIS WOULDN'T WORK AS CHANGING STATE HERE RELOADS THE COMPONENT AND HENCE CHANGES THE PROBLEM TOO
            <div>
                <button onClick={(event)=>setActive(!active)}>{(active)? 'Hide Answer' : 'Show answer'}</button>
                <h4>{answer}</h4>
            </div> */}
        </div>
    )
}

export default Problem