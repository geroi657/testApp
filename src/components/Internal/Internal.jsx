import './Internal.css'
import '../ExternalContext/ExternalContext'

import { useState } from 'react';
import { useContext } from 'react';
import { ExternalContext } from '../ExternalContext/ExternalContext';
import { useEffect } from 'react';

export default function Internal(){

    const receivedContext = useContext(ExternalContext);
    const [value, valueChange] = useState(0);

    useEffect(() => {
        console.log("Component did mount");
    
        return () => {
            console.log("Component did unmount");
        }
    }, [ value ])

    function FunctionToWaitFor() {
        return new Promise((resolve) => {
            console.log("Said something!");
            resolve("Did it!");
            });
    }
    
    async function AsyncFunction() {
        const Result = await FunctionToWaitFor();
        console.log(Result); 
    }
    

    return (
    <div className="divStyle">
        <button className="buttonStyle" onClick={() => valueChange(value + 1)}>Value is - { value }</button>
        <button className="buttonStyle" onClick={() => valueChange(value - value)}>Reset value</button>
        <button className="buttonStyle" onClick={() => AsyncFunction()}>Test</button>
        <p>{ receivedContext }</p>
    </div>
    );
}