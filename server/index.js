const express = require('express');
const config = require('config');
const path = require('path');
const favicon = require('serve-favicon')
const mongoose = require('mongoose');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const db = mongoose.connect('mongodb://mongodb/smbot', { 
  useNewUrlParser: true,
});

const User = require('./models').User;
const session = require('./session');

const app = express();
app.use(express.json());
app.use(cors())

app.set('views', path.join(__dirname, '/views'));

app.set('view engine', 'pug');
app.use('/static',
    express['static'](path.join(__dirname, './../node_modules')));

app.use('/public',
    express['static'](path.join(__dirname, './../client')));

app.use('/img',
    express['static'](path.join(__dirname, './../client/dist/img')));
app.use(favicon(path.join(__dirname, './../client/dist/', 'favicon.ico')))

const getActiveSession = async (token) => {
  console.log({token})
  const userId = await session.get(token);
  return userId;
}

const getUser = async (id) => {
  console.log({id})
  return await User.findOne({_id: id});
}

const prepare = async (req, res, next) => {
  const token = req.headers['api-token'];
  if (!token) {next()}
  const userId = await getActiveSession(token);
  if (!userId) {next()}
  const user = await getUser(userId);
  req.user = user;
  next();
}

app.get('/', (req, res) => {
  res.render('layout');
})

app.get('/me', prepare, (req,res) => {
  console.log('user', req.user);

  const {username, title, phone} = req.user;
  res.json({username, title, phone});
});

app.post('/login', (req, res) => {
  console.log('req', req.body);

  User.findOne({username: req.body.username}).then((user) => {
    console.log('user', user);
    if(!user) {
      res.sendStatus(403);
      return;
    }

    if (user.password === req.body.password) {
      console.log('password: ok');
      const token = uuidv4();
      session.set(token, user._id.toString());
      
      res.json({status: 'OK', token});
    } 
    
    res.sendStatus(403);
  })
})

app.listen(3000, () => {
  console.log('started', config.webapp);
});
