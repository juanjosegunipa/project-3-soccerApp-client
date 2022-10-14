import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'

function SinglePredictions() {

    const { predictionId } = useParams();

    const [prediction, setPrediction] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/prediction/${predictionId}`)
            .then(res => setPrediction(res.data.groups))
            .catch(err => console.log(err))
    }, [predictionId])

    return (
        <div className='group-container'>
            {/* <h1>Prediction</h1> */}
            {
                prediction.map(e => {
                    return (
                        <div className='single-group '>
                            <h2 style={{ color: 'white' }}>Group {e.groupName}</h2>
                            {
                                e.matches.map(m => {
                                    return (
                                        <>
                                            <h3 style={{ color: 'white' }}>{m.homeTeam.name} {m.score.homeTeam} vs {m.score.awayTeam} {m.awayTeam.name}</h3>
                                        </>
                                    );
                                })
                            }
                        </div>
                    );
                })
            }
        </div>
    );
}
export default SinglePredictions