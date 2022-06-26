import Link from 'next/link';
import type { NextPage } from 'next'
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

const Home: NextPage = () => {
  return (
    <Container>
      <Navbar>
        <Link href='/matrix3by3'>
          <Option>Matriz 3x3</Option>      
        </Link>

        <Link href='/quadraticEquation'>
          <Option>Equação do segundo grau</Option>      
        </Link>
      </Navbar>
    </Container>
  )
}

export default Home
