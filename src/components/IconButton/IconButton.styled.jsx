import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;

  padding: 4px;
  color: white;
  background-color: ${({ theme }) => theme.colors.green};
  border: none;
  border-radius: 50%;
  cursor: pointer;

  svg {
    display: block;
  }
`;
