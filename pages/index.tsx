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
  font-size: 1.5rem;
`

const Option = styled.a`
  font-weight: bold;
`;

const Home: NextPage = () => {
  return (
    <div className="index-container">
      <nav className="index-navbar">
        <Link href='/matrix3by3'>
          <a className="index-option">Determinante matriz 3x3</a>      
        </Link>

        <Link href='/matrix4by4'>
          <a className="index-option">Determinante matriz 4x4</a>      
        </Link>

        <Link href='/quadraticEquation'>
          <a className="index-option">Equação do segundo grau</a>      
        </Link>
      </nav>
    </div>
  )
}

export default Home
