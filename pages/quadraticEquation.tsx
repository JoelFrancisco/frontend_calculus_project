import type { NextPage } from 'next'
import Link from "next/link";
import { useRouter } from 'next/router';
import { useState, ChangeEvent, useEffect, useContext } from 'react';
import { AppContext } from './_app';
import { rule_of_sarrus } from '../utils/rule_of_sarrus';
import BackButton from '../components/backButton';
import styled from 'styled-components';
import { validateMatrix } from '../utils/isMatrixValid';
import { quadraticFormula } from '../utils/quadraticFormula';
import { MathJax } from 'better-react-mathjax';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  width: 4rem;
  height: 3rem;
  border: 1px solid #000000;
  outline: none;
  padding: 1rem;
  margin-bottom: 10px;
`;

const Button = styled.button`
  width: 5rem;
  height: 1.5rem;
  margin-top: 40px;
  background-color: #2B2D42;
  border-radius: 10px;
  border: 1.5px solid #2B2D42;
  padding: 5px;
  font-size: 0.7rem;
  font-weight: bold;
  color: #EDF2F4;
  transition: 0.5s;

  &:hover {
    background-color: #EDF2F4;
    color: #2B2D42;
  }
`;

const Label = styled.label`
  font-weight: bold;
  font-size: 2rem;
`;

const Wrapper = styled.div`
  display: flex;  
  gap: 15px;
`;

export const Erro = styled.div`
  font-weight: bold;
  font-size: 1rem;
  margin-top: 15px;
  color: #a80b0b;
  transition: 0.5s;
`;

const MathJaxContainer = styled.div`
  margin-top: 10px;
`;

const QuadraticEquation: NextPage = () => {
  const [a, setA] = useState<number>();
  const [b, setB] = useState<number>();
  const [c, setC] = useState<number>();
  const [showError, setShowError] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  
  const [showDeltaError, setShowDeltaError] = useState<boolean>(false);
  const [deltaError, setDeltaError] = useState<string[]>([""]);
  const [delta, setDelta] = useState<number>(0);

  const { setMainState } = useContext(AppContext);
  
  const router = useRouter();
  
  return (
    <Container>
      <BackButton />

      <Wrapper>
        <Label>Coeficiente a: </Label>
        <Input 
          onChange={(event) => setA(Number(event.target.value))}
          onClick={() => {
            setShowError(false)
            setShowDeltaError(false)
          }}
        />
      </Wrapper>

      <Wrapper>
        <Label>Coeficiente b: </Label>
        <Input 
          onChange={(event) => setB(Number(event.target.value))}
          onClick={() => { 
            setShowError(false) 
            setShowDeltaError(false)
          }}
        />
      </Wrapper>

      <Wrapper>
        <Label>Coeficiente c: </Label>
        <Input 
          onChange={(event) => setC(Number(event.target.value))}
          onClick={() => {
            setShowError(false)
            setShowDeltaError(false)
          }}
        />
      </Wrapper>
      
      <Button onClick={(event) => {
        event.preventDefault();

        if (a === 0) {
          setError("O coeficiente A n??o pode ser zero")
          setShowError(true);
          return;
        }

        if (!a) {
          setError("O valor de A n??o pode ser indefinido")
          setShowError(true);
          return;
        }

        if (!b) {
          setError("O valor de B n??o pode ser indefinido")
          setShowError(true);
          return;
        }

        if (!c) {
          setError("O valor de C n??o pode ser indefinido")
          setShowError(true);
          return;
        }

        const delta = (b**2)-4*a*c;

        if (delta < 0) {
          //setDeltaError([`\\[\\delta = ${b}^2 -4\\cdot${a}\\${c} > 0\\]`])
          setDelta(delta);
          setShowDeltaError(true);
          setError("O delta deve ser maior ou igual a zero");
          setShowError(true);
          return;
        }

        setMainState(quadraticFormula(a, b, c));
        router.push("/result");
      }}>
        CALCULAR
      </Button>

      {showDeltaError ? (
        <MathJaxContainer>
          <MathJax>{"\\[\\Delta=b^2-4ac\\]"}</MathJax>
          <MathJax>{`\\[\\Delta=${delta}\\]`}</MathJax>
        </MathJaxContainer>
      ): null}

      {showError ? (
        <Erro>{error}</Erro>
      ) : null}
    </Container>
  )
}

export default QuadraticEquation;