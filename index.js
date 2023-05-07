const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors'); app.use(cors());
const UsersRoutes = require('./Routers/Users');


app.use(express.json());

mongoose
  .connect(
    "mongodb://127.0.0.1:27017/tarea1"
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

//SE INICIA LA APLICACION EN PUERTO 3000
app.listen(3000, () => {
    console.log('server is running')
})

app.use('/api/Users/', UsersRoutes);

//mongodb+srv://api:Mgv3DsML0k0WEUZf@cluster0.vp94nti.mongodb.net/bookeat?retryWrites=true&w=majority
