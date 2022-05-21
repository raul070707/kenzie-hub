import { useHistory } from 'react-router-dom';
import { Container } from './styles'

const Title = ({ button, route }) => {

    const history = useHistory()

    return(
        <Container>
            <h1>Kenzie Hub</h1>
            <button onClick={() => history.push(route)}>{button}</button>
        </Container>
    )
}

export default Title;