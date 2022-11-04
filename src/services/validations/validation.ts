import * as yup from "yup";

// Exemplo de uso
export const loginValidate = yup.object().shape({
  email: yup
    .string()
    .email("Email inválido!")
    .max(64, "Tamanho máximo: 64 caracteres!")
    .required("Email obrigatório!"),
  password: yup.string().required("Senha obrigatória!"),
});

export const registerValidate = yup.object().shape({
    // email: yup
    //   .string()
    //   .email("Email inválido!")
    //   .max(64, "Tamanho máximo: 64 caracteres!")
    //   .required("Email obrigatório!"),
    // password: yup.string().required("Senha obrigatória!"),
  });

export const createDemandValidate = yup.object().shape({
    name:           yup.string().required("Nome do pedido obrigatório!"),
    description:    yup.string().required("Descrição do pedido obrigatória!"),
    estimated_time: yup.string().required("Data de entrega obrigatória!"),
    status:         yup.string().required("Status obrigatório!"),
    project_type:   yup.string().required("Tipo do projeto obrigatório!")
});

export const profileEditValidate = yup.object().shape({
    name:           yup.string().required("Nome obrigatório!"),
    description:    yup.string().required("Descrição do pedido obrigatória!"),
    estimated_time: yup.string().required("Data de entrega obrigatória!")
});

export const demandEditValidate = yup.object().shape({
    name:           yup.string().required("Nome obrigatório!"),
    description:    yup.string().required("Descrição do pedido obrigatória!"),
    estimated_time: yup.string().required("Data de entrega obrigatória!"),
    status:         yup.string().required("Status obrigatório!"),
    project_type:   yup.string().required("Tipo do projeto obrigatório!")
});