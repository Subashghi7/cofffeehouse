const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  "postgresql://postgres.tgrizluzvehptreutgux:StrongSupabase@aws-1-ap-southeast-1.pooler.supabase.com:6543/postgres"
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Authentication is successful");
  })
  .catch((e) => {
    console.log("Authenication vayena", e);
  });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db
