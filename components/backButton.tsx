import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import { FaArrowLeft } from 'react-icons/fa';
import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 10px;
`;

const BackButton: NextPage = () => {
  const router = useRouter();
  
  return (
    <Container>
      <FaArrowLeft onClick={(event) => {
        event.preventDefault();
        router.back();
      }} color=""/>
    </Container>
  )
}

export default BackButton;