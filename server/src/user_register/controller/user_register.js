const jwt = require("jsonwebtoken");
const User = require("../model/User");

module.exports =  {
    register: async(req,res) => {
        const {
            username,
            password,
            email
        } = req.body;

        let create_user = {
            username: username,
            password: password,
            email: email
        }
        
        let find_user;

        try{
            find_user = await User.findOne({email:email})
        }catch (error){

            return error
        }
        

        if(find_user !== null){
            
            return res.status(200).json(
                {
                    success:true,
                    message: "A user existed.",
                    data: null
                }
            )
        }else{
            const create = await User.create(create_user);

            return res.status(201).json({
                success:true,
                message: "A user has been created.",
                data: create
            })
        }

        
        
    },

    
}