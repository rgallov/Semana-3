const { DataTypes } = require('sequelize');

module.exports = (sequelize, type)=>{
    return sequelize.define('user', {
        // Model attributes are defined here
        id:{
            type: DataTypes.INTEGER,
            primaryKey : true,
            allowNull: false,
            autoIncrement: true
        },
        username : type.STRING,
        email : type.STRING,
        password : type.STRING,
        rol : type.STRING,
        
        // firstName: {
        //   type: DataTypes.STRING,
        //   allowNull: false
        // },
        // lastName: {
        //   type: DataTypes.STRING
        //   // allowNull defaults to true
        // }
      }, {
        // Other model options go here
      });
}