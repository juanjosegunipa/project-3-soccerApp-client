import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'

function SinglePredictions() {

    const { predictionId } = useParams();

    const [prediction, setPrediction] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3001/prediction/${predictionId}`)
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
                            <h2 >Group {e.groupName}</h2>
                            {
                                e.matches.map(m => {
                                    return (
                                        <>
                                            <h3>{m.homeTeam.name} {m.score.homeTeam} vs {m.score.awayTeam} {m.awayTeam.name}</h3>
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