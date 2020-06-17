import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Main = () => {
    const [state, setState] = useState("Loading Message!!!!");
    useEffect(() => {
        axios.get("http://localhost:8000/testRun")
            .then(res=>setState(res.data.message))
            .catch(err=> console.log(err))
    })
    return ( 
        <div>
            <h2>Connection Status: {state}</h2>
        </div>
     );
}
 
export default Main;