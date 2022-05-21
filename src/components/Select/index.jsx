import { Container } from './styles'

const Select = ({label, options, name, register, registerName}) => {

    return(
        <Container>
            <label>{label}</label>
            <select name={name} {...register(registerName)}>
                {options.map((option, index) => {
                    return <option key={index}>{option}</option>
                })}
            </select>
        </Container>
    )
}

export default Select;