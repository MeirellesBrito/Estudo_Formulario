class Controller {
  constructor(entidadeService) {
    this.entidadeService = entidadeService;
  }
  async getTodos(req, res) {
    try {
      const listaDeRegistro = await this.entidadeService.getAllResgistros();
      
      return res.status(200).json(listaDeRegistro);
    } catch (error) {}
  }
}

module.exports = Controller;
  