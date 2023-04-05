import styled from 'styled-components';

export const StyledSection = styled.section`
  margin-top: 30px;
  display: flex;
  gap: 30px;
  color: #fffad9;
`;

export const StyledBtn = styled.button`
  padding: 5px 10px;
  background-color: #050801;
  color: #fffad9;
  font-weight: bold;
  border: solid;
  border-radius: 5px;
  letter-spacing: 4px;
  overflow: hidden;
  transition: 0.5s;
  cursor: pointer;
  margin: 20px;
  &:hover {
    background: #fffad9;
    color: #050801;
    box-shadow: 0 0 5px #fffad9, 0 0 15px #fffad9, 0 0 30px #fffad9,
      0 0 50px #fffad9;
    -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
  }
`;

