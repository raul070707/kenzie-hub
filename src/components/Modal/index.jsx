import { Container, Content, HeaderModal } from "./styles";

const Modal = ({ children, titleModal, closeModal}) => {

    return(
        <Container>
            <Content>
                <HeaderModal>
                    <h3>{titleModal}</h3>
                    <button onClick={() => closeModal(false)}/>
                </HeaderModal>
                {children}
            </Content>
        </Container>
    )
}

export default Modal;