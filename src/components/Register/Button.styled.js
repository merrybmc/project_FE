import styled from 'styled-components';

export const Button = styled.button`
  width: 500px;
  padding: 12.5px 0;
  font-weight: 700;
  background-color: ${({ buttonState }) => (buttonState ? '#1A74C0' : '#cccccc')};
  color: white;
  font-size: 15px;
  border-radius: 10px;
  outline: none;
  border: none;

  margin-top: 30px;
`;
