const{user}=require("./userschemaj");
module.exports={
    addUserValidation:async(req,res,next)=>{
        const {error,value}=await user.validate(req.body);
        if(error){
            res.status(422).send(error.details);
                
                
        }
        else{
            res.status(200).send("Validated");
        }
    }

};