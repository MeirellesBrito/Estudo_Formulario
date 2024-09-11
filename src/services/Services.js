const dataSourse = require("../models");

class Services {
  constructor(nomeDoModel) {
    this.model = nomeDoModel;
  }

  async getAllResgistros(){
    return dataSourse[this.model].findAll();
    
  }

  
}

module.exports = Services;
