import styled from 'styled-components';
export const Card = styled.li`
  display: flex;
  height: 480px;
  width: 280px;
  flex-direction: column;
  padding: 1rem 1rem 2rem;
  border: solid 1px #fffad9;
  // box-shadow: 0 0 1px #fffad9, 0 0 3px #fffad9, 0 0 5px #fffad9,
  //   0 0 10px #fffad9;
  border-radius: 3px;
  &:hover {
    box-shadow: 0 0 2px #fffad9, 0 0 4px #fffad9, 0 0 6px #fffad9,
      0 0 15px #fffad9;
    border-radius: 3px;
  }
`;

