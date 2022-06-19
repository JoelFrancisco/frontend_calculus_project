import type { NextPage } from 'next'
import { MathJax } from 'better-react-mathjax';
import { withRouter, useRouter } from 'next/router';
import { useState, useEffect, useContext } from 'react';
import { AppContext } from './_app';
import { Container } from './matrix3by3';
import BackButton from '../components/backButton';
import styled from 'styled-components';

const Result: NextPage = () => {
  const { mainState } = useContext(AppContext);
  
  const [steps, setSteps] = useState([]);

  const router = useRouter();
  
  useEffect(() => {
    const { steps } = mainState
    
    let id = 1;
    const enumerated_steps = steps.map((x: any) => {
      const value = [id, x];
      id++;
      return value;
    });

    setSteps(enumerated_steps);
  }, []);

  return (
    <Container>
      <BackButton />

      { steps.length > 0 ? steps.map(([id, step]) => (
        <MathJax key={id}>{step}</MathJax>
      )): null}
    </Container>
  )
}

export default withRouter(Result);