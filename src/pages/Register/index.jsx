import Select from "../../components/Select";
import Button from "./../../components/Button";
import Input from "./../../components/Input";
import Title from "./../../components/Title";
import { Content, Container } from "./styles";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";

const Register = ({ authenticated }) => {
  const schema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório"),
    email: yup.string().required("Campo Obrigatório").email("Email invalido"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(8, "Sua senha deve conter no minimo 8 caracteres"),
    confirmPassword: yup
      .string()
      .required("Campo obrigatório")
      .oneOf([yup.ref("password"), null], "Senha diferente"),
    contact: yup
      .string()
      .required("Campo Obrigatório")
      .min(9, "Este campo deve conter 9 digitos")
      .max(9, "Este campo deve conter 9 digitos"),
    bio: yup.string().required("Campo Obrigatório"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  const Submit = ({ name, email, password, contact, bio, course_module }) => {
    const user = { name, email, password, contact, bio, course_module };

    api
      .post("/users", user)
      .then((res) => {
        toast.success("Sucesso ao criar a conta");
        history.push("/");
      })
      .catch((err) => {
        toast.error("Email já cadastrado");
      });
  };

  if (authenticated) {
    return <Redirect to="/home" />;
  }

  return (
    <Container>
      <Title button="Voltar" route="/" />
      <Content onSubmit={handleSubmit(Submit)}>
        <h2>Crie sua conta</h2>

        <p>Rapido e grátis, vamos nessa</p>

        <Input
          label="Nome"
          placeholder="Digite aqui seu nome"
          type="text"
          register={register}
          registerName="name"
          error={errors.name?.message}
        />
        <Input
          label="Email"
          placeholder="Digite aqui seu email"
          type="email"
          register={register}
          registerName="email"
          error={errors.email?.message}
        />
        <Input
          label="Senha"
          placeholder="Digite aqui sua senha"
          type="password"
          register={register}
          registerName="password"
          error={errors.password?.message}
        />
        <Input
          label="Confirme a Senha"
          placeholder="Digite novamente sua senha"
          type="password"
          register={register}
          registerName="confirmPassword"
          error={errors.confirmPassword?.message}
        />
        <Input
          label="Contato"
          placeholder="Digite aqui seu número de celular"
          type="tel"
          register={register}
          registerName="contact"
          error={errors.contact?.message}
        />
        <Input
          label="Bio"
          placeholder="Fale um pouco sobre você"
          type="text"
          register={register}
          registerName="bio"
          error={errors.bio?.message}
        />
        <Select
          label="Selecionar Módulo"
          options={[
            "Primeiro Módulo (Introdução ao Frontend)",
            "Segundo Módulo (Frontend Avançado)",
            "Terceiro Módulo (Introdução ao Backend)",
            "Quarto Módulo (Backend Avançado)",
          ]}
          register={register}
          registerName="course_module"
        />

        <Button
          bgColor="var(--color-primary-negative)"
          bgFocus="var(--color-primary)"
          type="submit"
        >
          Cadastrar
        </Button>
      </Content>
    </Container>
  );
};

export default Register;
