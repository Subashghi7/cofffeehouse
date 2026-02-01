
const coffeemodel = (sequelize, DataTypes) => {
  const Coffee = sequelize.define("coffee", {
    coffeeName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    coffeeLocation:{
        type: DataTypes.STRING,
        allowNull:true
    },
    coffeePrice:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
  });
  return Coffee
};

module.exports= coffeemodel
