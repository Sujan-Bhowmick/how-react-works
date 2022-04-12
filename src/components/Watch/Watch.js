import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';

const Watch = () => {
    const [steps, setSteps] = useState(0)
    
    const increaseSteps = () => {
        const newStepscount = steps + 1;
        setSteps(newStepscount);
        // console.log(steps)
    }
    useEffect( () => {
        // console.log(steps)
    }, [steps])

    return (
        <div style={{border: '3px solid purple', margin: '10px'}}>
            <h2>This is my smart watch</h2>
            <h3>My current step: {steps}</h3>
            <button onClick={increaseSteps}>De Dour .......</button>
            <Display name = "gramin" steps= {steps}></Display>
        </div>
    );
};

export default Watch;