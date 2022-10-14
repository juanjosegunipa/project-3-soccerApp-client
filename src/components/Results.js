import axios from 'axios';
import { useState, useEffect } from 'react';
import _ from 'lodash';

function Results() {

    const [results, setResults] = useState([])

    const [thePoints, setThePoints] = useState({
        points: 0
    })

    useEffect(() => {
        Promise.all([axios.get(`${process.env.REACT_APP_BACKEND_URL}/results`), axios.get(`${process.env.REACT_APP_BACKEND_URL}/matches/predictions/all`)])
            .then(([resultsRes, usersRes]) => {
                const groupNames = resultsRes.data.matches.reduce((a, c) => {
                    if (c.stage === 'GROUP_STAGE' && !a.includes(c.group)) a.push(c.group);
                    return a;
                }, []);

                const groupNameKeys = groupNames.map(e => e.split('_')[0].toLowerCase() + e.split('_')[1])

                const groups = [];

                groupNameKeys.forEach((groupNameKey, i) => {
                    groups[groupNameKey] = resultsRes.data.matches.filter(e => e.group === groupNames[i]).map(e => ({ group: groupNames[i], homeTeam: e.homeTeam, awayTeam: e.awayTeam, score: { homeTeam: e.score.fullTime.home, awayTeam: e.score.fullTime.away } }));
                });

                setResults(groups);

                //loop through usets and check their match predictions against groups
                // const myPrediction = usersRes.data.map(e => e.prediction.groups.map(m => m.matches[0].score.awayTeam))
                // const myPrediction = usersRes.data.map(e => e.prediction.groups.map(g => g.matches.map(m => m.score)))
                // const myPredictionGroupA = myPrediction[0][0]
                // const myResultsGroupA = groups.groupA.map(s => s.score)
                // const myPredictionGroupB = myPrediction[0][1]
                // const myResultsGroupB = groups.groupB.map(s => s.score)
                // const myPredictionGroupC = myPrediction[0][2]
                // const myResultsGroupC = groups.groupC.map(s => s.score)
                // const myPredictionGroupD = myPrediction[0][3]
                // const myResultsGroupD = groups.groupD.map(s => s.score)
                // const myPredictionGroupE = myPrediction[0][4]
                // const myResultsGroupE = groups.groupE.map(s => s.score)
                // const myPredictionGroupF = myPrediction[0][5]
                // const myResultsGroupF = groups.groupF.map(s => s.score)
                // const myPredictionGroupG = myPrediction[0][6]
                // const myResultsGroupG = groups.groupG.map(s => s.score)
                // const myPredictionGroupH = myPrediction[0][7]
                // const myResultsGroupH = groups.groupH.map(s => s.score)


                // let myPoints = usersRes.data.map(e => e.points)[0]

                // for (let i = 0; i < myPredictionGroupA.length; i++) {
                //     if (_.isEqual(myPredictionGroupA[i], myResultsGroupA[i])) {
                //         myPoints++
                //     }
                // }
                // for (let i = 0; i < myPredictionGroupB.length; i++) {
                //     if (_.isEqual(myPredictionGroupB[i], myResultsGroupB[i])) {
                //         myPoints++
                //     }
                // }
                // for (let i = 0; i < myPredictionGroupC.length; i++) {
                //     if (_.isEqual(myPredictionGroupC[i], myResultsGroupC[i])) {
                //         myPoints++
                //     }
                // }
                // for (let i = 0; i < myPredictionGroupD.length; i++) {
                //     if (_.isEqual(myPredictionGroupD[i], myResultsGroupD[i])) {
                //         myPoints++
                //     }
                // }
                // for (let i = 0; i < myPredictionGroupE.length; i++) {
                //     if (_.isEqual(myPredictionGroupE[i], myResultsGroupE[i])) {
                //         myPoints++
                //     }
                // }
                // for (let i = 0; i < myPredictionGroupF.length; i++) {
                //     if (_.isEqual(myPredictionGroupF[i], myResultsGroupF[i])) {
                //         myPoints++
                //     }
                // }
                // for (let i = 0; i < myPredictionGroupG.length; i++) {
                //     if (_.isEqual(myPredictionGroupG[i], myResultsGroupG[i])) {
                //         myPoints++
                //     }
                // }
                // for (let i = 0; i < myPredictionGroupH.length; i++) {
                //     if (_.isEqual(myPredictionGroupH[i], myResultsGroupH[i])) {
                //         myPoints++
                //     }
                // }
                // console.log(myPoints)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <>
            <div className='group-container'>
                {
                    Object.keys(results).sort((a, b) => a.localeCompare(b)).map(k => {
                        return (
                            <div className='single-group'>
                                <div style={{ color: 'white' }}>{results[k][0].group.split('_').join(' ')}</div>
                                {
                                    results[k].map((e, i) => {
                                        return (
                                            <form style={{ marginBottom: '50px' }}>
                                                <h4 style={{ color: 'white' }}> {e.homeTeam.name} {results[k][i].score.homeTeam}  vs {results[k][i].score.awayTeam} {e.awayTeam.name}</h4>
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