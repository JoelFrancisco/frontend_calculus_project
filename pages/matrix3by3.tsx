import type { NextPage } from 'next'
import Link from "next/link";
import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
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


const Matrix3by3: NextPage = () => {
  const [values, setValues] = useState<number[]>([]);

  const onValueChange = (event: HTMLInputElement) => setValues([...values, Number(value.target.value)]);

  return (
    <Container>
      <Grid>
        <Input onChange={onValueChange}/>
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
      </Grid>
    </Container>
  )
}

export default Matrix3by3