import React, { useEffect, useState } from 'react';
import DisplayData from './DisplayData';
import "./style.css";
function App() {
    const [gatheredData, setGatheredData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    useEffect(() => {
        gatherData();
    }, []);

    const gatherData = () => {
        fetch('https://randomuser.me/api')
            .then((data) => data.json())
            .then(setGatheredData)
            .then(() => setLoading(false))
            .catch(setError);
    };
    if (loading) {
        return <p>waiting for response</p>;
    }
    if (gatherData === undefined) {
        return <pre>{JSON.stringify(error, null, 2)}</pre>;
    }
    return (
        <div className="app-background">
            <h3>Generate random person!</h3>
            <DisplayData data={gatheredData} />
            <button className='button' onClick={() => gatherData()}>GENERATE</button>
        </div>
    );
}

export default App;
