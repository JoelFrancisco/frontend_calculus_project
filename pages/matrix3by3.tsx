import type { NextPage } from 'next'
import Link from "next/link";
import { useRouter } from 'next/router';
import { useState, ChangeEvent, useEffect, useContext } from 'react';
import { AppContext } from './_app';
import { rule_of_sarrus } from '../utils/rule_of_sarrus';
import styled from 'styled-components';

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
  grid-template-columns: 1fr 1fr 1fr; 
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
  width: 3rem;
  height: 1rem;
  margin-top: 20px;
`;


const Matrix3by3: NextPage = () => {
  const [values, setValues] = useState<number[][]>([[], [], []]);
  
  const { setMainState } = useContext(AppContext);
  
  const router = useRouter();
  
  return (
    <Container>
      <Grid>
        <Input onChange={(event: ChangeEvent<HTMLInputElement>) => {
          values[0][0] = Number(event.target.value);
          setValues(values);
        }}/>

        <Input onChange={(event: ChangeEvent<HTMLInputElement>) => {
          values[0][1] = Number(event.target.value);
          setValues(values);
        }}/>

        <Input onChange={(event: ChangeEvent<HTMLInputElement>) => {
          values[0][2] = Number(event.target.value);
          setValues(values);
        }}/>

        <Input onChange={(event: ChangeEvent<HTMLInputElement>) => {
          values[1][0] = Number(event.target.value);
          setValues(values);
        }}/>

        <Input onChange={(event: ChangeEvent<HTMLInputElement>) => {
          values[1][1] = Number(event.target.value);
          setValues(values);
        }}/>

        <Input onChange={(event: ChangeEvent<HTMLInputElement>) => {
          values[1][2] = Number(event.target.value);
          setValues(values);
        }}/>

        <Input onChange={(event: ChangeEvent<HTMLInputElement>) => {
          values[2][0] = Number(event.target.value);
          setValues(values);
        }}/>

        <Input onChange={(event: ChangeEvent<HTMLInputElement>) => {
          values[2][1] = Number(event.target.value);
          setValues(values);
        }}/>

        <Input onChange={(event: ChangeEvent<HTMLInputElement>) => {
          values[2][2] = Number(event.target.value);
          setValues(values);
        }}/>
      </Grid>
      
      <Button onClick={(event) => {
        event.preventDefault();
        
        setMainState(rule_of_sarrus(values));
        
        router.push("/result");
      }}></Button>
    </Container>
  )
}

export default Matrix3by3