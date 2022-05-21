
import { ContentButton } from "./styles";

const Button = ({ children, bgColor, bgFocus}) => {
    
    return <ContentButton bgColor={bgColor} bgFocus={bgFocus}>{children}</ContentButton>
}

export default Button;