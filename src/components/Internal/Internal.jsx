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

        function FunctionToWaitFor() {
            return new Promise((resolve) => {
                resolveSomething(() => {
                    console.log("Said something!");
                    resolve("Success!");
                });
            });
        }

        async function AsyncFunction() {
            await FunctionToWaitFor;
            console.log("Waiting is no more"); 
        }
        
        return () => {
            console.log("Component did unmount");
        }
    }, [ value ])
    

    return (
    <div className="divStyle">
        <button className="buttonStyle" onClick={() => valueChange(value + 1)}>Value is - { value }</button>
        <button className="buttonStyle" onClick={() => valueChange(value - value)}>Reset value</button>
        <p>{ receivedContext }</p>
    </div>
    );
}