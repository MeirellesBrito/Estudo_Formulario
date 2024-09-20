const dataSourse = require("../models");

class Controller {
  constructor(entidadeService) {
    this.entidadeService = entidadeService;
  }

  async getTodos(req, res) {
    try {
      const listaDeRegistro = await this.entidadeService.getAllResgistros({
        include: [
          { model: dataSourse.Email, as: "Email" },
          { model: dataSourse.Enderecos, as: "endereco" },
          { model: dataSourse.Telefone, as: "telefone" },
          { model: dataSourse.Pessoas, as: "pessoa" },
        ],
      });

      // Formatando a resposta
      const respostaFormatada = listaDeRegistro.map((usuario) => {
        return {
          id: usuario.id,
          data: usuario.data,

          id_pessoas: usuario.pessoa ? {
            id: usuario.pessoa.id, 
            nome: usuario.pessoa.nome, 
          } : null,

          id_Email: usuario.Email ? {
            id: usuario.Email.id,
            email: usuario.Email.email,
          } : null,

          id_endereco: usuario.endereco ? {
            id: usuario.endereco.id,
            rua: usuario.endereco.rua,
            cidade: usuario.endereco.cidade,
            estado: usuario.endereco.estado,
            cep: usuario.endereco.cep,
          } : null,

          id_telefone: usuario.telefone ? {
            id: usuario.telefone.id,
            telefone: usuario.telefone.telefone,
          } : null,
        };
      });

      return res.status(200).json(respostaFormatada);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = Controller;
