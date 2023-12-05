const express=require('express');
const {getUser,addUser,updateUser}=require('../controller/clt_user')

const Router=express.Router();

Router.get('/users',getUser);
Router.post('/adduser',addUser);
Router.put('/updateuser/:id',updateUser);

module.exports=Router;