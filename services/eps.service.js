const boom = require('@hapi/boom');

const sequelize = require('../libs/sequelize');
class EpsService{


  constructor(){

  }

  async crear(data){
    const newEps = await sequelize.models.Eps.create(data);
    return newEps;
  }

  async buscar(){
    return await sequelize.models.Eps.findAll();
  }

  async buscarUno(id){
    const eps = await sequelize.models.Eps.findByPk(id);
    if(!eps){
      return boom.notFound('Lo que buscas no lo vas a encontrar');
    }
    return eps;

  }

  async update(id,cambios){
    const user = await this.buscarUno(id);
    const rta = await user.update(cambios);
    return rta;
  }

  async eliminar(id){
    const eps = await sequelize.models.Eps.findByPk(id);
    await eps.destroy();
  }
}

module.exports = EpsService;
