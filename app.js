const express = require('express')

const app= express()


require("./database/connection")

app.get("/coffee",(req,res)=>{
  res.json({
    message:"Coffee fetched successfully"
  })
})

app.post("/coffee",(req,res)=>{
  res.json({
    message:"Coffee is added successfully"
  })
})


app.patch("/coffee/:id", (req, res) => {
  res.json({ 
    message: "Coffee edited successfully" 
});
});

app.delete("/coffee/:id", (req, res) => {
  res.json({
     message: "Coffee deleted successfully" 
    });
});


app.listen(4000,()=>{
  console.log("Backend is working")
})


 { /*
    app.get("/", (req, res) => {
  res.json({
    get: "This is main page",
  });
});
app.get("/students", (req, res) => {
  const student = {
    name: "Subash Ghimire",
  };

  res.json(student);
});
    
    */
}
