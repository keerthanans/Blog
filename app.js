const express = require('express');
const logsRoute = require('./controllers/logsRoute');
const blogRouter = require('./controllers/blogController');
const userRouter = require('./controllers/userController');


const app = express();

app.use(express.static("views"));

app.all('/',(req,res,next)=>{
  res.setHeader('Content-Type','text/json');
  next();
});


app.use('/logs', logsRoute);
app.use('/blog',blogRouter);
app.use('/user',userRouter);

app.listen(80, () => {
  console.log('App is running at 80');
});