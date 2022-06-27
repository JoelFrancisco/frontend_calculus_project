import type { NextPage } from 'next'
import Link from "next/link";
import { useRouter } from 'next/router';
import { useState, ChangeEvent, useEffect, useContext } from 'react';
import { AppContext } from './_app';
import { rule_of_sarrus } from '../utils/rule_of_sarrus';
import BackButton from '../components/backButton';
import styled from 'styled-components';
import { validateMatrix, validateMatrixIsFourByFour } from '../utils/isMatrixValid';
import { laplaceTheorem } from '../utils/laplaceTheorem';
import { Erro } from './quadraticEquation';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Navbar = styled.nav`
  display: flex;
  flex-direction: column;  
`

const Option = styled.a`
  font-weight: bold;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr; 
  padding: 15px;
  border-left: 2px solid #000000;
  border-right: 2px solid #000000;
  border-radius: 15px;
`;

const Input = styled.input`
  width: 4rem;
  height: 4rem;
  border: 1px solid #000000;
  outline: none;
  padding: 1rem;
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


const Matrix4by4: NextPage = () => {
  const [values, setValues] = useState<number[][]>([[], [], [], []]);
  
  const { setMainState } = useContext(AppContext);
  
  const router = useRouter();

  const [showError, setShowError] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  
  return (
    <Container>
      <BackButton />

      <Grid>
        <Input 
          onChange={(event) => {
            values[0][0] = Number(event.target.value);
            setValues(values);
          }}
          onClick={() => setShowError(false)}
        />

        <Input 
          onChange={(event) => {
            values[0][1] = Number(event.target.value);
            setValues(values);
          }}
          onClick={() => setShowError(false)}
        />

        <Input 
          onChange={(event) => {
            values[0][2] = Number(event.target.value);
            setValues(values);
          }}
          onClick={() => setShowError(false)}
        />

        <Input 
          onChange={(event) => {
            values[0][3] = Number(event.target.value);
            setValues(values);
          }}
          onClick={() => setShowError(false)}
        />

        <Input 
          onChange={(event) => {
            values[1][0] = Number(event.target.value);
            setValues(values);
          }}
          onClick={() => setShowError(false)}
        />

        <Input 
          onChange={(event) => {
            values[1][1] = Number(event.target.value);
            setValues(values);
          }}
          onClick={() => setShowError(false)}
        />

        <Input 
          onChange={(event) => {
            values[1][2] = Number(event.target.value);
            setValues(values);
          }}
          onClick={() => setShowError(false)}
        />

        <Input 
          onChange={(event) => {
            values[1][3] = Number(event.target.value);
            setValues(values);
          }}
          onClick={() => setShowError(false)}
        />

        <Input 
          onChange={(event) => {
            values[2][0] = Number(event.target.value);
            setValues(values);
          }}
          onClick={() => setShowError(false)}
        />

        <Input 
          onChange={(event) => {
            values[2][1] = Number(event.target.value);
            setValues(values);
          }}
          onClick={() => setShowError(false)}
        />

        <Input 
          onChange={(event) => {
            values[2][2] = Number(event.target.value);
            setValues(values);
          }}
          onClick={() => setShowError(false)}
        />

        <Input 
          onChange={(event) => {
            values[2][3] = Number(event.target.value);
            setValues(values);
          }}
          onClick={() => setShowError(false)}
        />

        <Input 
          onChange={(event) => {
            values[3][0] = Number(event.target.value);
            setValues(values);
          }}
          onClick={() => setShowError(false)}
        />

        <Input 
          onChange={(event) => {
            values[3][1] = Number(event.target.value);
            setValues(values);
          }}
          onClick={() => setShowError(false)}
        />

        <Input 
          onChange={(event) => {
            values[3][2] = Number(event.target.value);
            setValues(values);
          }}
          onClick={() => setShowError(false)}
        />

        <Input 
          onChange={(event) => {
            values[3][3] = Number(event.target.value);
            setValues(values);
          }}
          onClick={() => setShowError(false)}
        />
      </Grid>
      
      <Button onClick={(event) => {
        event.preventDefault();
        
        const isMatrixValid = validateMatrixIsFourByFour(values);

        if (!isMatrixValid) {
          setError("A matriz deve não pode possuir elementos indefinidos");
          setShowError(true);
          return;
        }

        setMainState(laplaceTheorem(values));

        router.push("/result");
      }}>
        CALCULAR
      </Button>

      {showError ? (
        <Erro>{error}</Erro>
      ) : null}
    </Container>
  )
}

export default Matrix4by4;