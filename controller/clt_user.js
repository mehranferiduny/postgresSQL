const ModelUser=require('../model/M_user')


exports.getUser=async(req,res)=>{
    try {
      const users=await ModelUser.getUsers();
      if(!users)  {
        res.status(401).send("user not find"); return;
      }
      res.status(201).json(users)
    } catch (err) {
      console.log(err);
      res.status(500).send('server is erorr')
    }
}

exports.addUser=async(req,res)=>{

  const {name,email}=req.body;

  try {
    const user=await ModelUser.getUsers({email:email});
  
    if(user) {
      res.status(401).send('you email acconted');
      return;
    };
    await ModelUser.insertUser(name,email);
    res.status(201).send('OK')
    
  } catch (err) {
    console.log(err);
    res.status(500).send('server is erorr')
  }
}

exports.updateUser=async (req,res)=>{
  const {name,email}=req.body;
  const id=req.params.id;

  try {
    if(!id){
      res.status(401).send('id is requaird');
      return 1;
    }
    const userId=await ModelUser.findUser(req.params.id);

  

    if(userId.length < 1){
      res.status(401).send('id is not database');
      return 1;
    }
    const user=await ModelUser.getUser(email);
    if(!user){
      res.status(401).send('not user in database');
      return 1;
    }
    await ModelUser.updateUser(name,email,userId[0].id);
    res.status(201).send('OK')

    
  } catch (err) {
    console.log(err);
    res.status(500).send('server is erorr')
  }
}

exports.deleteUser=async(req,res)=>{
  const id=req.params.id;
  try {
    if(!id){
      res.status(401).send('id is requaird');
      return 1;
    }
    const userid=await ModelUser.findUser(id)
    if(userid.length < 1){
      res.status(401).send('id is not database');
      return 1;
    }
    
    await ModelUser.deleteUser(userid[0].id)
    res.status(201).send('OK');

    
  } catch (err) {
    console.log(err);
    res.status(500).send('server is erorr')
  }
}
