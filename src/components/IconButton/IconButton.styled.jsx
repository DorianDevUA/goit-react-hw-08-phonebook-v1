import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;

  padding: 8px;
  color: white;
  background-color: ${({ theme }) => theme.colors.green};
  border: none;
  border-radius: 4px;
  cursor: pointer;

  svg {
    display: block;
  }
`;
