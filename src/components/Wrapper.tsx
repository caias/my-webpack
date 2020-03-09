import React from 'react';
import Checkbox from 'components/Checkbox';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vh;
  height: 100vh;
`;

const Dashboard = () => {
  return (
    <Wrapper>
      <Checkbox title={'선택 1'} connection={'value01'} />
    </Wrapper>
  );
};

export default Dashboard;