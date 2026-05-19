const documentacao = {
    openapi: '3.0.3',
    info: {
        title: 'Barbearia API',
        version: '1.0.0',
        description: 'API para gerenciamento de uma barbearia.'
    },
    servers: [
        {
            url: 'http://localhost:3000',
            description: 'Servidor local'
        }
    ],
    tags: [
        { name: 'Usuários', description: 'Operações relacionadas aos usuários' },
        { name: 'Agendamentos', description: 'Operações relacionadas aos agendamentos' },
        { name: 'Serviços', description: 'Operações relacionadas aos serviços oferecidos' }
    ],
    security: [{ bearerAuth: [] }],
    paths: {
        "/usuarios": {
            get: {
                tags: ["Usuários"],
                summary: "Listar todos os usuários",
                responses: {
                    200: {
                        description: "Dados obtidos com sucesso!",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "array",
                                    items: { $ref: '#/components/schemas/Listar_Usuarios' }
                                }
                            }
                        }
                    }
                }
            },
            post: {
                tags: ['Usuários'],
                summary: 'Cadastrar novo usuário',
                description: "Recebe nome, email, senha e tipo para cadastrar novo usuário",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Cadastrar_Usuario"
                            }
                        }
                    }
                },
                security: [],
                responses: {
                    201: {
                        description: "Usuário cadastrado com sucesso!"
                    },
                    500: {
                        description: "Erro interno no servidor"
                    }
                }
            }
        },
        "/usuarios/{id_usuario}": {
            put: {
                tags: ['Usuários'],
                summary: 'Atualizar todos os dados do usuário',
                description: 'Atualiza todos os dados de um usuário existente, é necessário enviar todos os campos',
                parameters: [
                    {
                        name: "id_usuario",
                        in: "path",
                        required: true,
                        description: "ID do usuário a ser atualizado",
                        schema: {
                            type: 'integer',
                            example: 1
                        }
                    }
                ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Atualizar_Usuario" },
                            example: {
                                nome: "Ricardo Santos",
                                email: "ricardo5@sesisp.com",
                                senha: "senhaAtualizada"
                            }
                        }
                    }
                },
                responses: {
                    201: {
                        description: "Usuário atualizado com sucesso!"
                    },
                    404: {
                        description: "Usuário não encontrado",
                        content: {
                            "application/json": {
                                example: { message: "Usuário não encontrado" }
                            }
                        }
                    },
                    500: {
                        description: "Erro interno no servidor"
                    }
                }
            },
            delete: {
                tags: ['Usuários'],
                summary: 'Remover Usuário',
                description: 'Remove usuário existente pelo ID',
                parameters: [
                    {
                        name: "id_usuario",
                        in: "path",
                        required: true,
                        description: "ID do usuário a ser removido",
                        schema: {
                            type: 'integer',
                            example: 1
                        }
                    }
                ],
                responses: {
                    200: {
                        description: "Usuário removido com sucesso!"
                    },
                    404: {
                        description: "Usuário não encontrado",
                        content: {
                            "application/json": {
                                example: { message: "Usuário não encontrado" }
                            }
                        }
                    },
                    500: {
                        description: "Erro interno no servidor"
                    }
                }
            },
        },
        "/login": {
            post: {
                tags: ['Usuários'],
                summary: 'Realizar Login',
                description: "Autentica um usuário e retorna seus dados",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Login_Usuario"
                            }
                        }
                    }
                },
                security: [],
                responses: {
                    200: {
                        description: "Login realizado com sucesso!",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/Resposta_Login"
                                }
                            }
                        }
                    },
                    500: {
                        description: "Erro interno no servidor"
                    }
                }
            }
        },
        "/servicos": {
            get: {
                tags: ["Serviços"],
                summary: "Listar todos os serviços",
                description: "Retorna uma lista de todos os serviços disponíveis",
                parameters: [
                    {
                        name: "nome",
                        in: "query",
                        required: false,
                        description: "Nome do serviço a ser buscado",
                        schema: {
                            type: 'string',
                            example: "Corte de Cabelo"
                        }
                    }
                ],
                responses: {
                    200: {
                        description: "Dados obtidos com sucesso!",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "array",
                                    items: { $ref: '#/components/schemas/Listar_Servicos' }
                                }
                            }
                        }
                    }
                }
            },
            post: {
                tags: ['Serviços'],
                summary: 'Cadastrar Serviço',
                description: "Recebe nome, descrição, cor, icone e tipo para cadastrar novo serviço",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Cadastrar_Servico"
                            }
                        }
                    }
                },
                responses: {
                    201: {
                        description: "Serviço cadastrado com sucesso!",
                    },
                    500: {
                        description: "Erro interno no servidor"
                    }
                }
            }
        },
        "/servicos/{id_servico}": {
            put: {
                tags: ['Serviços'],
                summary: 'Atualizar dados do serviço',
                description: 'Atualiza os dados de um serviço existente, é necessário enviar todos os campos',
                parameters: [
                    {
                        name: "id_servico",
                        in: "path",
                        required: true,
                        description: "ID do serviço a ser atualizado",
                        schema: {
                            type: 'integer',
                            example: 1
                        }
                    }
                ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Atualizar_Servico" },
                            example: {
                                nome: "Corte de Cabelo",
                                preco: 50.00,
                                descricao: "Corte de cabelo com tesoura"
                            }
                        }
                    }
                },
                responses: {
                    200: {
                        description: "Serviço atualizado com sucesso!"
                    },
                    404: {
                        description: "Serviço não encontrado",
                        content: {
                            "application/json": {
                                example: { message: "Serviço não encontrado" }
                            }
                        }
                    },
                    500: {
                        description: "Erro interno no servidor"
                    }
                }
            },
            delete: {
                tags: ['Serviços'],
                summary: 'Remover Serviço',
                description: 'Remove serviço existente pelo ID',
                parameters: [
                    {
                        name: "id_servico",
                        in: "path",
                        required: true,
                        description: "ID do serviço a ser removido",
                        schema: {
                            type: 'integer',
                            example: 1
                        }
                    }
                ],
                responses: {
                    200: {
                        description: "Serviço removido com sucesso!"
                    },
                    404: {
                        description: "Serviço não encontrado",
                        content: {
                            "application/json": {
                                example: { message: "Serviço não encontrado" }
                            }
                        }
                    },
                    500: {
                        description: "Erro interno no servidor"
                    }
                }
            }
        },
        "/agendamentos": {
            get: {
                tags: ["Agendamentos"],
                summary: "Listar todos os agendamentos",
                responses: {
                    200: {
                        description: "Agendamentos obtidos com sucesso",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "array",
                                    items: { $ref: '#/components/schemas/Listar_Agendamentos' }
                                }
                            }
                        }
                    }
                }
            },
            post: {
                tags: ["Agendamentos"],
                summary: "Cadastrar novo agendamento",
                description: "Recebe informações do agendamento para cadastrá-lo no sistema",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Cadastrar_Agendamento"
                            }
                        }
                    }
                },
                responses: {
                    200: {
                        description: "Agendamento cadastrado com sucesso!"
                    },
                    500: {
                        description: "Erro interno no servidor"
                    }
                }
            }
        },
        "/agendamentos/{id_agendamento}": {
            put: {
                tags: ['Agendamentos'],
                summary: 'Atualizar dados do agendamento',
                description: 'Atualiza os dados de um agendamento existente, é necessário enviar todos os campos',
                parameters: [
                    {
                        name: "id_agendamento",
                        in: "path",
                        required: true,
                        description: "ID do agendamento a ser atualizado",
                        schema: {
                            type: 'integer',
                            example: 1
                        }
                    }
                ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Atualizar_Agendamento" },
                            example: {
                                "id_cliente": 1,
                                "id_servico": 1,
                                "data_hora": "2024-07-01 14:00",
                                "status": "Agendado"
                            }
                        }
                    }
                },
                responses: {
                    201: {
                        description: "Agendamento atualizado com sucesso!"
                    },
                    404: {
                        description: "Agendamento não encontrado",
                        content: {
                            "application/json": {
                                example: { message: "Agendamento não encontrado" }
                            }
                        }
                    },
                    500: {
                        description: "Erro interno no servidor"
                    }
                }
            },
            delete: {
                tags: ["Agendamentos"],
                summary: "Remover agendamento",
                description: "Remove um agendamento existente",
                parameters: [
                    {
                        name: "id_agendamento",
                        in: "path",
                        required: true,
                        description: "ID do agendamento a ser removido",
                        schema: {
                            type: 'integer',
                            example: 1
                        }
                    }
                ],
                responses: {
                    200: {
                        description: "Agendamento removido com sucesso!"
                    },
                    404: {
                        description: "Agendamento não encontrado",
                        content: {
                            "application/json": {
                                example: { message: "Agendamento não encontrado" }
                            }
                        }
                    },
                    500: {
                        description: "Erro interno no servidor"
                    }
                }
            }
        },
        "/dashboard": {
    get: {
        tags: ["Dashboard"],
        summary: "Obtém todos os dados consolidados do dashboard",
        description: "Retorna o resumo do mês, serviços mais agendados, últimos agendamentos e evolução dos agendamentos",
        responses: {
            200: {
                description: "Dados obtidos com sucesso!",
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                resumoMesAtual: {
                                    type: "object",
                                    properties: {
                                        faturamento: { type: "number", example: 1500 },
                                        confirmados: { type: "number", example: 20 },
                                        cancelados: { type: "number", example: 5 }
                                    }
                                },
                                servicosMaisAgendados: {
                                    type: "object",
                                    properties: {
                                        nome: { type: "string", example: "Corte Degradê" },
                                        total: { type: "number", example: 15 }
                                    }
                                },
                                ultimosAgendamentos: {
                                    type: "object",
                                    properties: {
                                        cliente: { type: "string", example: "João" },
                                        servico: { type: "string", example: "Barba" },
                                        status: { type: "string", example: "confirmado" },
                                        data: { type: "string", example: "19/05/2026 14:30" }
                                    }
                                },
                                resultadoEvolucao: {
                                    type: "object",
                                    properties: {
                                        mes: { type: "string", example: "05/2026" },
                                        confirmados: { type: "number", example: 18 },
                                        cancelados: { type: "number", example: 4 }
                                    }
                                }
                            }
                        }
                    }
                }
            },

            500: {
                description: "Erro interno no servidor."
            }
        }
    },
}
    },
    components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT'
            }
        },
        schemas: {
            Listar_Usuarios: {
                type: "object",
                properties: {
                    id_usuario: { type: "integer", example: 1 },
                    nome: { type: "string", example: "Gabriel Bertuci" },
                    email: { type: "string", example: "gabrielbertuci@gmail.com" }
                }
            },
            Cadastrar_Usuario: {
                type: "object",
                properties: {
                    nome: { type: "string", example: "Gabriel Bertuci" },
                    email: { type: "string", example: "gabrielbertuci@gmail.com" },
                    senha: { type: "string", example: "senha123" },
                    tipo: { type: "string", example: "Cliente" }
                }
            },
            Atualizar_Usuario: {
                type: "object",
                required: ["nome", "email", "senha", "tipo"],
                properties: {
                    nome: { type: "string", example: "Gabriel Bertuci" },
                    email: { type: "string", example: "gabrielbertuci@gmail.com" },
                    senha: { type: "string", example: "senha123" },
                    tipo: { type: "string", example: "Cliente" }
                }
            },
            Login_Usuario: {
                type: "object",
                required: ["email", "senha"],
                properties: {
                    email: { type: "string", example: "gabrielbertuci@gmail.com" },
                    senha: { type: "string", example: "senha123" }
                }
            },
            Resposta_Login: {
                type: "object",
                properties: {
                    message: { type: "string", example: "Login realizado com sucesso!" },
                    usuario: {
                        type: "object",
                        properties: {
                            id_usuario: { type: "integer", example: 1 },
                            nome: { type: "string", example: "Gabriel Bertuci" },
                            email: { type: "string", example: "gabrielbertuci@gmail.com" }
                        }
                    },
                    token: { type: "string", example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." }
                }
            },
            Listar_Servicos: {
                type: "object",
                properties: {
                    id_servico: { type: "integer", example: 1 },
                    nome: { type: "string", example: "Corte de Cabelo" },
                    preco: { type: "number", example: 50.00 },
                    descricao: { type: "string", example: "Corte de cabelo com tesoura" }
                }
            },
            Cadastrar_Servico: {
                type: "object",
                required: ["nome", "preco", "descricao"],
                properties: {
                    nome: { type: "string", example: "Corte de Cabelo" },
                    preco: { type: "number", example: 50.00 },
                    descricao: { type: "string", example: "Corte de cabelo com tesoura" }
                }
            },
            Atualizar_Servico: {
                type: "object",
                required: ["nome", "preco", "descricao"],
                properties: {
                    nome: { type: "string", example: "Corte de Cabelo" },
                    preco: { type: "number", example: 50.00 },
                    descricao: { type: "string", example: "Corte de cabelo com tesoura" }
                }
            },
            Listar_Agendamentos: {
                type: "object",
                properties: {
                    id_agendamento: { type: "integer", example: 1 },
                    id_cliente: { type: "integer", example: 1 },
                    id_servico: { type: "integer", example: 1 },
                    data_hora: { type: "string", example: "2024-07-01 14:00" },
                    status: { type: "string", example: "Agendado" }
                }
            },
            Cadastrar_Agendamento: {
                type: "object",
                required: ["id_cliente", "id_servico", "data_hora", "status"],
                properties: {
                    id_cliente: { type: "integer", example: 1 },
                    id_servico: { type: "integer", example: 1 },
                    data_hora: { type: "string", example: "2024-07-01 14:00" },
                    status: { type: "string", example: "Agendado" }
                }
            },
            Atualizar_Agendamento: {
                type: "object",
                required: ["id_cliente", "id_servico", "data_hora", "status"],
                properties: {
                    id_cliente: { type: "integer", example: 1 },
                    id_servico: { type: "integer", example: 1 },
                    data_hora: { type: "string", example: "2024-07-01 14:00" },
                    status: { type: "string", example: "Agendado" }
                }
            }
        }
    }
}

export default documentacao;