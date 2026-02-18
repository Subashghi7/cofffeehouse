const { coffee } = require("../database/connection");

exports.addcoffee = async (req, res) => {
  //fetching coffees from database
  const datas = await coffee.findAll(); //always return array
  res.json({
    message: "Coffee fetched successfully",
    datas,
  });
}

exports.putcoffee = async (req, res) => {
  //express maa json data, body maa aaucha in req
   //body maa Postman baata data haleko

  const { coffeeName, coffeeLocation, coffeePrice } = req.body;
  await coffee.create({
    coffeeName,
    coffeeLocation,
    coffeePrice
});
  res.json({
    message: "Coffee is added successfully",
  });
}

exports.deletecoffee = async (req, res) => {

  const id = req.params.id 
  
  await coffee.destroy({
    where:{
      id:id
    }
  })
  res.json({
    message: "Coffee deleted successfully",
  });
}

exports.updatecoffee =  (req, res) => {

  const id= req.params.id
  const {coffeeName,coffeeLocation } = req.body

  coffee.update({coffeeName: coffeeName, coffeeLocation:coffeeLocation},{ //mongoose maa ulto
    where:{
      id
    }
  })
  res.json({
    message: "Coffee edited successfully",
  });
}

exports.singlecoffee = async (req,res)=>{
 
  const id= req.params.id;

  const single =  await coffee.findByPk(id)//always returns object, findall returns array

  res.json({
    message:"Single api is working",
    single
  })

}
  
