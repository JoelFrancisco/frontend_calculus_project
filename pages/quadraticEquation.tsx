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


const QuadraticEquation: NextPage = () => {
  const [a, setA] = useState<number>();
  const [b, setB] = useState<number>();
  const [c, setC] = useState<number>();
  
  const { setMainState } = useContext(AppContext);
  
  const router = useRouter();
  
  return (
    <Container>
      <BackButton />

      <Wrapper>
        <Label>Coeficiente a: </Label>
        <Input onChange={(event) => setA(Number(event.target.value))}/>
      </Wrapper>

      <Wrapper>
        <Label>Coeficiente b: </Label>
        <Input onChange={(event) => setB(Number(event.target.value))}/>
      </Wrapper>

      <Wrapper>
        <Label>Coeficiente c: </Label>
        <Input onChange={(event) => setC(Number(event.target.value))}/>
      </Wrapper>
      
      <Button onClick={(event) => {
        event.preventDefault();

        if (a && b && c && a > 0 && (b**2)-4*a*c >= 0) {
          setMainState(quadraticFormula(a, b, c));
          router.push("/result");
        }
      }}>
        CALCULAR
      </Button>
    </Container>
  )
}

export default QuadraticEquation;