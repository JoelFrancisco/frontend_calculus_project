import type { NextPage } from 'next'
import { MathJax } from 'better-react-mathjax';
import { withRouter, useRouter } from 'next/router';
import { useState, useEffect, useContext } from 'react';
import { AppContext } from './_app';
import BackButton from '../components/backButton';
import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const Result: NextPage = () => {
  const { mainState } = useContext(AppContext);
  
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    const { steps } = mainState
    
    const enumerated_steps = steps.map((x: any, index: number) => [index + 1, x]);

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