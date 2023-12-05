const express=require('express');
const {getUser,addUser,updateUser,deleteUser}=require('../controller/clt_user')

const Router=express.Router();

Router.get('/users',getUser);
Router.post('/adduser',addUser);
Router.put('/updateuser/:id',updateUser);
Router.delete('/deleteuser/:id',deleteUser);

module.exports=Router;