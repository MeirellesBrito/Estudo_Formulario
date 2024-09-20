const dataSourse = require("../models");

class Services {
  constructor(nomeDoModel) {
    this.model = nomeDoModel;
  }
  async getAllResgistros(options = {}) {
    return dataSourse[this.model].findAll(options);
  }
}

module.exports = Services;
