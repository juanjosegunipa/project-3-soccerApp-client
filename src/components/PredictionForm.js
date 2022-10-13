import { useState, useEffect } from 'react';
import axios from 'axios';

function PredictionForm() {

    const [matches, setMatches] = useState([])

    const [groupA, setGroupA] = useState([]);

    const updateGroupA = index => event => {
        const copyGroupA = [...groupA];
        copyGroupA[index] = {
            ...copyGroupA[index],
            score: {
                ...copyGroupA[index].score,
                [event.target.name]: event.target.value
            }
        }
        setGroupA(copyGroupA)
    }

    const [groupB, setGroupB] = useState([]);

    const updateGroupB = index => event => {
        const copyGroupB = [...groupB];
        copyGroupB[index] = {
            ...copyGroupB[index],
            score: {
                ...copyGroupB[index].score,
                [event.target.name]: event.target.value
            }
        }
        setGroupB(copyGroupB)
    }

    const [groupC, setGroupC] = useState([]);

    const updateGroupC = index => event => {
        const copyGroupC = [...groupC];
        copyGroupC[index] = {
            ...copyGroupC[index],
            score: {
                ...copyGroupC[index].score,
                [event.target.name]: event.target.value
            }
        }
        setGroupC(copyGroupC)
    }

    const [groupD, setGroupD] = useState([]);

    const updateGroupD = index => event => {
        const copyGroupD = [...groupD];
        copyGroupD[index] = {
            ...copyGroupD[index],
            score: {
                ...copyGroupD[index].score,
                [event.target.name]: event.target.value
            }
        }
        setGroupD(copyGroupD)
    }

    const [groupE, setGroupE] = useState([]);

    const updateGroupE = index => event => {
        const copyGroupE = [...groupD];
        copyGroupE[index] = {
            ...copyGroupE[index],
            score: {
                ...copyGroupE[index].score,
                [event.target.name]: event.target.value
            }
        }
        setGroupE(copyGroupE)
    }

    const [groupF, setGroupF] = useState([]);

    const updateGroupF = index => event => {
        const copyGroupF = [...groupF];
        copyGroupF[index] = {
            ...copyGroupF[index],
            score: {
                ...copyGroupF[index].score,
                [event.target.name]: event.target.value
            }
        }
        setGroupF(copyGroupF)
    }

    const [groupG, setGroupG] = useState([]);

    const updateGroupG = index => event => {
        const copyGroupG = [...groupG];
        copyGroupG[index] = {
            ...copyGroupG[index],
            score: {
                ...copyGroupG[index].score,
                [event.target.name]: event.target.value
            }
        }
        setGroupG(copyGroupG)
    }

    const [groupH, setGroupH] = useState([]);

    const updateGroupH = index => event => {
        const copyGroupH = [...groupH];
        copyGroupH[index] = {
            ...copyGroupH[index],
            score: {
                ...copyGroupH[index].score,
                [event.target.name]: event.target.value
            }
        }
        setGroupH(copyGroupH)
    }


    const handleSubmit = event => {
        event.preventDefault();
        const body = {
            groupA, groupB, groupC, groupD, groupE, groupF, groupG, groupH
        }
        axios.post('http://localhost:3001/prediction', body, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('authToken')}`
            }
        })
            .then(axiosRes => console.log(axiosRes))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get('http://localhost:3001/matches/all')
            .then(res => {
                setMatches(res.data.matches);
                let groupAMatches = res.data.matches.filter(e => {
                    return e.group === 'GROUP_A'
                }).map(e => {
                    return {
                        homeTeam: e.homeTeam,
                        awayTeam: e.awayTeam,
                        score: {
                            homeTeam: "",
                            awayTeam: ""
                        }
                    }
                })
                setGroupA(groupAMatches)
                //groupB here
                let groupBMatches = res.data.matches.filter(e => {
                    return e.group === 'GROUP_B'
                }).map(e => {
                    return {
                        homeTeam: e.homeTeam,
                        awayTeam: e.awayTeam,
                        score: {
                            homeTeam: "",
                            awayTeam: ""
                        }
                    }
                })
                setGroupB(groupBMatches)
                //groupC here
                let groupCMatches = res.data.matches.filter(e => {
                    return e.group === 'GROUP_C'
                }).map(e => {
                    return {
                        homeTeam: e.homeTeam,
                        awayTeam: e.awayTeam,
                        score: {
                            homeTeam: "",
                            awayTeam: ""
                        }
                    }
                })
                setGroupC(groupCMatches)
                //etc etc
                let groupDMatches = res.data.matches.filter(e => {
                    return e.group === 'GROUP_D'
                }).map(e => {
                    return {
                        homeTeam: e.homeTeam,
                        awayTeam: e.awayTeam,
                        score: {
                            homeTeam: "",
                            awayTeam: ""
                        }
                    }
                })
                setGroupD(groupDMatches)

                let groupEMatches = res.data.matches.filter(e => {
                    return e.group === 'GROUP_E'
                }).map(e => {
                    return {
                        homeTeam: e.homeTeam,
                        awayTeam: e.awayTeam,
                        score: {
                            homeTeam: "",
                            awayTeam: ""
                        }
                    }
                })
                setGroupE(groupEMatches)

                let groupFMatches = res.data.matches.filter(e => {
                    return e.group === 'GROUP_F'
                }).map(e => {
                    return {
                        homeTeam: e.homeTeam,
                        awayTeam: e.awayTeam,
                        score: {
                            homeTeam: "",
                            awayTeam: ""
                        }
                    }
                })
                setGroupF(groupFMatches)

                let groupGMatches = res.data.matches.filter(e => {
                    return e.group === 'GROUP_G'
                }).map(e => {
                    return {
                        homeTeam: e.homeTeam,
                        awayTeam: e.awayTeam,
                        score: {
                            homeTeam: "",
                            awayTeam: ""
                        }
                    }
                })
                setGroupG(groupGMatches)

                let groupHMatches = res.data.matches.filter(e => {
                    return e.group === 'GROUP_H'
                }).map(e => {
                    return {
                        homeTeam: e.homeTeam,
                        awayTeam: e.awayTeam,
                        score: {
                            homeTeam: "",
                            awayTeam: ""
                        }
                    }
                })
                setGroupH(groupHMatches)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <div className='group-container-1to4'>
                <div className='single-group'>
                    <h1>Group A</h1>
                    {
                        groupA.map((e, index) => {
                            return (
                                <div>
                                    {
                                        <form style={{ marginBottom: '50px' }}>
                                            <label>{e.homeTeam.name} </label>
                                            <input type="number" name='homeTeam' value={e.score.homeTeam} onChange={updateGroupA(index)} style={{ width: '3%' }} />
                                            <p style={{ display: 'inline' }}> vs </p>
                                            <input type="number" name='awayTeam' value={e.score.awayTeam} onChange={updateGroupA(index)} style={{ width: '3%' }} />
                                            <label> {e.awayTeam.name} </label>
                                        </form>
                                    }
                                </div>
                            );
                        })
                    }
                </div>
                <div className='single-group'>
                    <h1>Group B</h1>
                    {
                        groupB.map((e, index) => {
                            return (
                                <div>
                                    {
                                        <form style={{ marginBottom: '50px' }}>
                                            <label>{e.homeTeam.name} </label>
                                            <input type="number" name='homeTeam' value={e.score.homeTeam} onChange={updateGroupB(index)} style={{ width: '3%' }} />
                                            <p style={{ display: 'inline' }}> vs </p>
                                            <input type="number" name='awayTeam' value={e.score.awayTeam} onChange={updateGroupB(index)} style={{ width: '3%' }} />
                                            <label> {e.awayTeam.name} </label>
                                        </form>
                                    }
                                </div>
                            );
                        })
                    }
                </div>
                <div className='single-group'>
                    <h1>Group C</h1>
                    {
                        groupC.map((e, index) => {
                            return (
                                <div>
                                    {
                                        <form style={{ marginBottom: '50px' }}>
                                            <label>{e.homeTeam.name} </label>
                                            <input type="number" name='homeTeam' value={e.score.homeTeam} onChange={updateGroupC(index)} style={{ width: '3%' }} />
                                            <p style={{ display: 'inline' }}> vs </p>
                                            <input type="number" name='awayTeam' value={e.score.awayTeam} onChange={updateGroupC(index)} style={{ width: '3%' }} />
                                            <label> {e.awayTeam.name} </label>
                                        </form>
                                    }
                                </div>
                            );
                        })
                    }
                </div>
                <div className='single-group'>
                    <h1>Group D</h1>
                    {
                        groupD.map((e, index) => {
                            return (
                                <div>
                                    {
                                        <form style={{ marginBottom: '50px' }}>
                                            <label>{e.homeTeam.name} </label>
                                            <input type="number" name='homeTeam' value={e.score.homeTeam} onChange={updateGroupD(index)} style={{ width: '3%' }} />
                                            <p style={{ display: 'inline' }}> vs </p>
                                            <input type="number" name='awayTeam' value={e.score.awayTeam} onChange={updateGroupD(index)} style={{ width: '3%' }} />
                                            <label> {e.awayTeam.name} </label>
                                        </form>
                                    }
                                </div>
                            );
                        })
                    }
                </div>
                {/* </div> */}
                {/* <div className='group-container-1to4'> */}
                <div className='single-group'>
                    <h1>Group E</h1>
                    {
                        groupE.map((e, index) => {
                            return (
                                <div>
                                    {
                                        <form style={{ marginBottom: '50px' }}>
                                            <label>{e.homeTeam.name} </label>
                                            <input type="number" name='homeTeam' value={e.score.homeTeam} onChange={updateGroupE(index)} style={{ width: '3%' }} />
                                            <p style={{ display: 'inline' }}> vs </p>
                                            <input type="number" name='awayTeam' value={e.score.awayTeam} onChange={updateGroupE(index)} style={{ width: '3%' }} />
                                            <label> {e.awayTeam.name} </label>
                                        </form>
                                    }
                                </div>
                            );
                        })
                    }
                </div>
                <div className='single-group'>
                    <h1>Group F</h1>
                    {
                        groupF.map((e, index) => {
                            return (
                                <div>
                                    {
                                        <form style={{ marginBottom: '50px' }}>
                                            <label>{e.homeTeam.name} </label>
                                            <input type="number" name='homeTeam' value={e.score.homeTeam} onChange={updateGroupF(index)} style={{ width: '3%' }} />
                                            <p style={{ display: 'inline' }}> vs </p>
                                            <input type="number" name='awayTeam' value={e.score.awayTeam} onChange={updateGroupF(index)} style={{ width: '3%' }} />
                                            <label> {e.awayTeam.name} </label>
                                        </form>
                                    }
                                </div>
                            );
                        })
                    }
                </div>
                <div className='single-group'>
                    <h1>Group G</h1>
                    {
                        groupG.map((e, index) => {
                            return (
                                <div>
                                    {
                                        <form style={{ marginBottom: '50px' }}>
                                            <label>{e.homeTeam.name} </label>
                                            <input type="number" name='homeTeam' value={e.score.homeTeam} onChange={updateGroupG(index)} style={{ width: '3%' }} />
                                            <p style={{ display: 'inline' }}> vs </p>
                                            <input type="number" name='awayTeam' value={e.score.awayTeam} onChange={updateGroupG(index)} style={{ width: '3%' }} />
                                            <label> {e.awayTeam.name} </label>
                                        </form>
                                    }
                                </div>
                            );
                        })
                    }
                </div>
                <div className='single-group'>
                    <h1>Group H</h1>
                    {
                        groupH.map((e, index) => {
                            return (
                                <div>
                                    {
                                        <form style={{ marginBottom: '50px' }}>
                                            <label>{e.homeTeam.name} </label>
                                            <input type="number" name='homeTeam' value={e.score.homeTeam} onChange={updateGroupH(index)} style={{ width: '3%' }} />
                                            <p style={{ display: 'inline' }}> vs </p>
                                            <input type="number" name='awayTeam' value={e.score.awayTeam} onChange={updateGroupH(index)} style={{ width: '3%' }} />
                                            <label> {e.awayTeam.name} </label>
                                        </form>
                                    }
                                </div>
                            );
                        })
                    }
                </div>
            </div>
            <button onClick={handleSubmit}>Submit predictions</button>
        </>
    );
}

export default PredictionForm