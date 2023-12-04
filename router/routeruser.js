const express=require('express');
const {getUser,addUser}=require('../controller/clt_user')

const Router=express.Router();

Router.get('/users',getUser);
Router.post('/adduser',addUser);

module.exports=Router;