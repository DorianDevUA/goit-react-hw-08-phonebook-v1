import { StyledButton } from './IconButton.styled';

const IconButton = ({ type, children, text, onClick, ...otherProps }) => {
  return (
    <StyledButton type={type} onClick={onClick} {...otherProps}>
      {children}
      {text}
    </StyledButton>
  );
};

export default IconButton;
