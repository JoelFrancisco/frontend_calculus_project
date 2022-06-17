import type { NextPage } from 'next'
import { MathJax } from 'better-react-mathjax';
import { withRouter } from 'next/router';
import { useState, ChangeEvent, useEffect, useContext } from 'react';
import { AppContext } from './_app';
import { Container } from './matrix3by3';
import styled from 'styled-components';

const Result: NextPage = () => {
  const { mainState } = useContext(AppContext);
  
  const [steps, setSteps] = useState([]);
  
  useEffect(() => {
    const { steps } = mainState
    setSteps(steps);
  }, []);

  return (
    <Container>
      { steps.length > 0 ? steps.map((step) => (
        <MathJax>{step}</MathJax>
      )): null}
    </Container>
  )
}

export default withRouter(Result);