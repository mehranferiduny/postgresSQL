const ModelUser=require('../model/M_user')


exports.getUser=async(req,res)=>{
    try {
      const users=await ModelUser.getUsers();
      console.log(users);
      if(!users)  {
        res.status(401).send("user not find"); return;
      }
      res.status(201).json(users)
    } catch (err) {
      console.log(err);
    }
}

exports.addUser=async(req,res)=>{

  const {name,email}=req.body;
  console.log(req.body);
  try {
    const user=await ModelUser.getUser(email);
    console.log(user);
    if(user) {
      res.status(401).send('you email acconted');
      return;
    };
    await ModelUser.insertUser(name,email);
    res.status(201).send('OK')
    
  } catch (err) {
    console.log(err);
  }
}