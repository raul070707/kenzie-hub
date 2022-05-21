import api from '../../services/api'
import { useEffect, useState } from "react";
import { Redirect} from "react-router-dom";
import { Container, ContentUser, Content, Header, ModalButton} from './styles';
import Modal from '../../components/Modal';
import Input from '../../components/Input';
import Select from '../../components/Select';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from '../../components/Button';
import { toast } from "react-toastify";
import Li from '../../components/Li';

const Home = ({ authenticated, setAuthenticated }) => {

    const userId = JSON.parse(localStorage.getItem('@KenzieHub:user')) || '';

    const [user, setUser] = useState({})

    const [techs, setTechs] = useState([])

    const [ registerModal, setRegisterModal ] = useState(false);

    const token = JSON.parse(localStorage.getItem("@KenzieHub:token")) || '';

    const get = () => {
        api.get(`/users/${userId.id}`)
            .then((res) => {   
                setUser(res.data)
                setTechs(res.data.techs)
            })
            .catch(e => console.log(e))
    }

    useEffect(() => get(), [])

    const logout = () => {
        localStorage.clear()
        setAuthenticated(false)
    }

    const schema = yup.object().shape({   
        title: yup.string().required('Campo Obrigatório')
    });

    const { handleSubmit, register, formState: { errors }} = useForm({
        resolver: yupResolver(schema)
    });

    const submitTech = (data) => {

        api.post('/users/techs', data, {headers: {'Authorization' : `Bearer ${token}`}})
        .then((res) => {
            toast.success("Sucesso ao adicionar a tecnologia");
            setRegisterModal(false)
            get()
        })
        .catch((err) => {
            toast.error("Erro ao adicionar a tecnologia");
        })
    }

    if(!authenticated) {
        return <Redirect  to='/'/>
    }

    return(
        <>
            <Container>
                <Header>
                    <h2>Kenzie Hub</h2>
                    <button onClick={() => logout()}>Sair</button>
                </Header>
                <ContentUser>
                    <div>
                        <h2>Olá, {user.name}</h2>
                        <p>{user.course_module}</p>
                    </div>
                </ContentUser>
                <Content>
                    <section>
                        <h3>Tecnologias</h3>
                        <ModalButton onClick={() => setRegisterModal(true)}>+</ModalButton>
                    </section>
                    <ul>
                        {techs.map((tech, index) => {
                            return <Li key={index} tech={tech} index={index} get={get}></Li>
                        })}
                    </ul>
                </Content>
            </Container>
            { registerModal && 
                <Modal titleModal='Cadastrar Tecnologia' closeModal={setRegisterModal}>
                    <form onSubmit={handleSubmit(submitTech)}>
                        <Input
                            label='Nome' 
                            placeholder='Digite o nome da tecnologia' 
                            type='text' 
                            border='var(--grey-0)' 
                            register={register} 
                            registerName='title'
                            error={errors.title?.message}
                        />
                        <Select 
                            label='Selecionar Status'
                            options={[
                                'Iniciante',
                                'Intermediário',
                                'Avançado'
                            ]}
                            register={register}
                            registerName='status'
                        />
                        <Button bgFocus='var(--color-primary-focus)' type='submit'>Cadastrar Tecnologia</Button>
                    </form>
                </Modal>
                }
                
        </>
    )
}

export default Home;