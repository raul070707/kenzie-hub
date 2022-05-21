import { Container } from "./styles"

const Input = ({label, type, placeholder, border = '', register, registerName, error}) => {

    return(
        <Container border={border} isErrored={!!error}>
            <label>{label} {!!error && <span>- {error}</span>}</label>
            <input type={type} placeholder={placeholder} {...register(registerName)}/>
        </Container>
    )
}

export default Input;