import './home.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import { Translate } from 'react-jhipster';
import { Row, Col, Alert } from 'reactstrap';

import { useAppSelector } from 'app/config/store';
import ToDo from './ToDo';

export const Home = ({ tasks }) => {
  const account = useAppSelector(state => state.authentication.account);

  return (
    <Row>
      <Col md="3" className="pad">
        <span className="hipster rounded" />
      </Col>
      <Col md="9">
        <>
          <h2>Bienvenue, CV Tècheque!</h2>
          <p className="lead">Ceci est la CV Tècheque</p>
          <div>
            <h3>Profil</h3>
            Nom :
            <ul>
              {tasks.map(task => (
                <ToDo task={task} key={task.id} />
              ))}
            </ul>
            <br />
            Date de naissance :
            <br />
            Adresse :
            <br />
            Téléphone :
            <br />
            Email :
            <br />
            Site web :
          </div>

          <h3>Resume</h3>
          <div>
            Etude :
            <br />
            Experience :
            <br />
            Outil :
            <br />
            Design :
            <br />
            Langue :
          </div>
          <h3>Portfolio</h3>
          <div>Image/Video</div>
          <h3>Avis</h3>
          <div></div>
          <h3>Contact</h3>
        </>
      </Col>
    </Row>
  );
};

export default Home;
