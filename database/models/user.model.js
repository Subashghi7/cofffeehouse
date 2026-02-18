
const usermodel=(sequelize,DataTypes)=>{
    const User = sequelize.define("user",{

        userName:{
            type:DataTypes.STRING,
            allowNull:false
        },
        userAge:{
            type:DataTypes.INTEGER,
            allowNull:false
        }
    })
    return User
}
module.exports = usermodel

