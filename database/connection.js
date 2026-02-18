const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  "postgresql://postgres.tgrizluzvehptreutgux:StrongSupabase@aws-1-ap-southeast-1.pooler.supabase.com:6543/postgres"
);

sequelize.authenticate()
  .then(() => {
    console.log("Authentication is successful");
  })
  .catch((e) => {
    console.log("Authentication is not successful", e);
  });


const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.coffee = require("./models/coffee.model")(sequelize,DataTypes)
db.user = require("./models/user.model")(sequelize,DataTypes)

sequelize.sync({alter:false}).then(()=>{
  console.log("migration is success")
})
module.exports = db
