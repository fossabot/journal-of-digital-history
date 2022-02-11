import React from 'react'
import Jupitercelltag from './Jupitercelltag'
import { Container, Row } from 'react-bootstrap'


const Jupitercell = ({
  isNarative = false,
  isHermeneutics = false,
  isData = false,
  children
  }) => {
  let divClassName = "Jupitercell";
  if (isNarative === true) {
    divClassName = "Jupitercell Narative";
  } else if (isHermeneutics === true) {
    divClassName = "Jupitercell Hermeneutics";
  } else if (isData === true) {
    divClassName = "Jupitercell Data";
  }
  return (
    <Container>
    <Row>
      <div className={divClassName}>
        {isNarative === true ? (
          <Jupitercelltag tag="Narrative"></Jupitercelltag>
        ) : null}
        {isHermeneutics ? (
          <Jupitercelltag tag="Hermeneutics"></Jupitercelltag>
        ) : null}
        {isData ? <Jupitercelltag tag="Data"></Jupitercelltag> : null}
        <p>{children}</p>
      </div>
      </Row>
    </Container>
  );
}

export default Jupitercell
