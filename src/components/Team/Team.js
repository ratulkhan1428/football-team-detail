import React from 'react';
import { Card, button, Row, Container, Col } from 'react-bootstrap';
import './Team.css';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Team = (props) => {
    const {strTeamBadge, strTeam, strSport} = props.team;

    return (
        <Container>
            <Row>
                <Col className="cards" style={{ width: '18rem' }}>
                    <Card.Img className="card-img" variant="top" src={strTeamBadge} />
                    <Card.Body>
                    <Card.Title><h2>{strTeam}</h2></Card.Title>
                    <Card.Text>
                        Sports Type: {strSport}
                    </Card.Text>
                    <Link to='/detail'>
                        <button className="main-button">Explore <FontAwesomeIcon icon={faArrowRight} /></button>
                    </Link>
                    </Card.Body>
                </Col>
            </Row>
        </Container>
    );
};

export default Team;