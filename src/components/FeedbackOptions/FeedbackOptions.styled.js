import styled from 'styled-components';

export const ButtonStyled = styled.button`
  text-transform: capitalize;
  padding: 5px 10px;
  margin: 20px 0 20px 15px;
  color: gray;
  border-radius: 5px;
  border: 1px solid;
  cursor: pointer;
  background: transparent;

  &:focus,
  &:hover {
    border: 1px solid blue;
    background: dodgerblue;
    color: white;
  }
`;
