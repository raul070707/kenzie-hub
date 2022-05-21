import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container, Content, LinkButton } from './styles';
import { useForm } from 'react-hook-form';
import { useHistory, Redirect} from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import api from '../../services/api';
import { toast } from 'react-toastify'

const Login = ({ authenticated, setAuthenticated }) => {
    
    const history = useHistory()
    
    const schema = yup.object().shape({   
        email: yup.string().required('Campo Obrigatório').email('Email invalido'),
        password: yup.string().required('Campo obrigatório'),
    });

    const { handleSubmit, register, formState: { errors }} = useForm({
        resolver: yupResolver(schema)
    });


    const submit = (data) => {

        api.post('/sessions', data)
            .then((res) => {
                const { token, user } = res.data;

                localStorage.setItem("@KenzieHub:token", JSON.stringify(token))

                localStorage.setItem("@KenzieHub:user", JSON.stringify(user))

                toast.success("Sucesso ao fazer o login");

                setAuthenticated(true)

                history.push("/home");
            })
            .catch((err) => {
                toast.error("Email ou senha invalidos");
            })
    };

    if(authenticated) {
        return <Redirect  to='/home'/>
    }

    return(
        <Container>
            <h1>Kenzie Hub</h1>

            <Content onSubmit={handleSubmit(submit)}>
                <h2>Login</h2>

                <Input 
                    label='Email' 
                    placeholder='Digite se email' 
                    type='email' 
                    border='var(--grey-0)' 
                    register={register} 
                    registerName='email'
                    error={errors.email?.message}
                    />
                <Input 
                    label='Senha' 
                    placeholder='Digite sua senha' 
                    type='password' 
                    border='var(--grey-0)' 
                    register={register} 
                    registerName='password'
                    error={errors.password?.message}
                    />

                <Button bgFocus='var(--color-primary-focus)' type='submit'>Entrar</Button>

                <p>Ainda não possui uma conta?</p>

                <LinkButton onClick={() => history.push('/register')}>Cadastre-se</LinkButton>
            </Content>
        </Container>
    )
}

export default Login;