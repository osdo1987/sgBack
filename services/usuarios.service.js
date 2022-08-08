const boom = require('@hapi/boom');

const sequelize = require('../libs/sequelize');
class UsuariosService{


  constructor(){
    this.usuarios =[];
  }



  async crear(data){
    const newUser = await sequelize.models.User.create(data);
    return newUser;
  }

  async buscar(){
    return await sequelize.models.User.findAll();
  }

  async buscarUno(id){
    const user = await sequelize.models.User.findByPk(id);
    if(!user){
       return boom.notFound('Lo que buscas no lo vas a encontrar');
    }
    return user;

  }

  async update(id,cambios){
    const user = await this.buscarUno(id);
    const rta = await user.update(cambios);
    return rta;
  }

  async eliminar(id){
    const user = await sequelize.models.User.findByPk(id);
    await user.destroy();
  }
}

module.exports = UsuariosService;
