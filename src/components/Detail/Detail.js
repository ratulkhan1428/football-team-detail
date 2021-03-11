import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import './Detail.css';
import players from '../../data/Photo/male.png';
import found from '../../data/Icon/found.png';
import country from '../../data/Icon/flag.png';
import type from '../../data/Icon/football.png';
import gender from '../../data/Icon/male.png';
import twitter from '../../data/Icon/twitter.png';
import facebook from '../../data/Icon/facebook.png';
import youtube from '../../data/Icon/youtube.png';

// const Detail = (props) => {
//     const {strTeamBadge, strTeam, intFormedYear, strCountry, strSport, strGender} = props.team;
//     return (
//         <div>
//             <h1>This is Detail: {strTeam}</h1>
//             <h3>Founded: {intFormedYear}</h3>
//             <h3>Country: {strCountry}</h3>
//             <h3>Sport Type: {strSport}</h3>
//            <h3>Gender: {strGender}</h3>
//         </div>
//     );
// };

const Detail = () => {
    const {idTeam} = useParams();

    const [selectedTeam, setSelectedTeam] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4328`;
        fetch(url)
        .then(res => res.json())
        .then(data => setSelectedTeam(data.teams[0]))
    }, [idTeam])

    const {strTeamBadge, strTeam, intFormedYear, strCountry, strSport, strGender, strDescriptionEN, strTwitter, strFacebook, strYoutube} = selectedTeam;

    return (
        <div>
            <img className="logo" src={strTeamBadge} alt=""/>
            <div className="all-info">
                <div className="main-info">
                    <h1>{strTeam}</h1>
                    <h3><img src={found} alt=""/> Founded: {intFormedYear}</h3>
                    <h3><img src={country} alt=""/> Country: {strCountry}</h3>
                    <h3><img src={type} alt=""/> Sport Type: {strSport}</h3>
                    <h3><img src={gender} alt=""/> Gender: {strGender}</h3>
                    <div>
                        <img src={players} alt="" style={{width:'500px', margin:'0 0 0 700px'}}/>
                    </div>
                </div>
                <div className="description"><p>{strDescriptionEN}</p></div>
                <div className="social-media">
                    <a target='_blank' rel='noreferrer' href={strTwitter}><img src={twitter} alt=""/></a>
                    <a target='_blank' rel='noreferrer' href={strFacebook}><img src={facebook} alt=""/></a>
                    <a target='_blank' rel='noreferrer' href={strYoutube}><img src={youtube} alt=""/></a>
                </div>
            </div>
        </div>
    );
};

export default Detail;