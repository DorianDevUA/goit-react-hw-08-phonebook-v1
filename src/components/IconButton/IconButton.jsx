import { StyledButton } from './IconButton.styled';

const IconButton = ({ type = 'button', children, onClick, ...otherProps }) => {
  return (
    <StyledButton type={type} onClick={onClick} {...otherProps}>
      {children}
    </StyledButton>
  );
};

export default IconButton;
