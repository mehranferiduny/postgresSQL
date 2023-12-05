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

  try {
    const user=await ModelUser.getUsers({email:email});
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