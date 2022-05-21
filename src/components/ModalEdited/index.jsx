import { Content, EditedButton, HeaderModal, InputFake, SectionButtons} from "./styles";
import Select from "../Select";
import { useForm } from 'react-hook-form';
import api from '../../services/api'
import { toast } from "react-toastify";

const ModalEdited = ({closeModal, title, id, get}) => {

    const { handleSubmit, register} = useForm();

    const token = JSON.parse(localStorage.getItem("@KenzieHub:token")) || '';

    const edited = (data) => {
        api.put(`/users/techs/${id}`, data, {headers: {'Authorization' : `Bearer ${token}`}})
            .then((res) => {
                toast.success("Sucesso ao atualizar a tecnologia");
                get()
                closeModal(false)
            })
            .catch((err) => toast.error("Erro ao atualizar a tecnologia"))
    }

    const deleteTech = () => {
        api.delete(`/users/techs/${id}`, {headers: {'Authorization' : `Bearer ${token}`}})
            .then((res) => {
                toast.success("Sucesso ao deletar a tecnologia");
                get()
                closeModal(false)
            })
            .catch((err) => toast.error("Erro ao deletar a tecnologia"))
    }

    return(
            <Content>
                <HeaderModal>
                    <h3>Tecnologia Detalhes</h3>
                    <button onClick={() => closeModal(false)}/>
                </HeaderModal>
                <form onSubmit={handleSubmit(edited)}>
                        <InputFake>
                            <p>Nome da Tecnologia</p>
                            <div>{title}</div>
                        </InputFake>
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
                        <SectionButtons>
                            <EditedButton>Salvar alterações</EditedButton>
                            <div onClick={() => deleteTech()}>Excluir</div>
                        </SectionButtons>
                    </form>
            </Content>
    )
}

export default ModalEdited;