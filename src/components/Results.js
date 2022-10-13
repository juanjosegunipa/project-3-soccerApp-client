import axios from 'axios';
import { useState, useEffect } from 'react';

function Results() {

    const [results, setResults] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/results`)
            .then(axiosRes => {
                const groupNames = axiosRes.data.matches.reduce((a, c) => {
                    if (c.stage === 'GROUP_STAGE' && !a.includes(c.group)) a.push(c.group);
                    return a;
                }, []);

                const groupNameKeys = groupNames.map(e => e.split('_')[0].toLowerCase() + e.split('_')[1])

                const groups = {};

                groupNameKeys.forEach((groupNameKey, i) => {
                    groups[groupNameKey] = axiosRes.data.matches.filter(e => e.group === groupNames[i]).map(e => ({ group: groupNames[i], homeTeam: e.homeTeam, awayTeam: e.awayTeam, score: { homeTeam: e.score.fullTime.home, awayTeam: e.score.fullTime.away } }));
                });

                setResults(groups);
            })
            .catch(err => {
                console.log(err)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <div className='group-container'>
                {
                    Object.keys(results).sort((a, b) => a.localeCompare(b)).map(k => {
                        return (
                            <div className='single-group'>
                                <div>{results[k][0].group.split('_').join(' ')}</div>
                                {
                                    results[k].map((e, i) => {
                                        return (
                                            <form style={{ marginBottom: '50px' }}>
                                                <h4> {e.homeTeam.name} {results[k][i].score.homeTeam}  vs {results[k][i].score.awayTeam} {e.awayTeam.name}</h4>
                                            </form>
                                        );
                                    })
                                }
                            </div>
                        )
                    })
                }

            </div>
        </>
    );
}

export default Results;