//minimum fields
// designation- admin or agent
//name
//email
//password
//refresh token
const bcyrptJs=require("bcryptjs")
const jwt=require("jsonwebtoken")
const db=require("mongoose");
const UserSchema= new db.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    phone:{
        type:String,
        required:true
    },
    designation:{
        type:String,
        required:true,
        enum:['Admin','Agent','super'],
        default:'Agent'
    },
    password:{
        type:String,
        required:true
    },
    refreshToken:{ //value to be given only on login
        type:String
    },
    login:{
        type:Date,
        default:null,
    },
    logout:{
        type:Date,
        default:null
    }
},{timestamps:true})
UserSchema.pre("save",async function(next){
    
    if(this.isModified("password") || this.isNew){
        //Hash
    
        const salt=await bcyrptJs.genSalt(10);
        const hashedPassword=await bcyrptJs.hash(this.password,salt);

        this.password=hashedPassword
     
    }
    next()
})
UserSchema.methods.comparePassword=async function(userPassword){
    return await bcyrptJs.compare(userPassword,this.password)
}

//generate Refresh Token and AccessToken
UserSchema.methods.GenerateRefreshToken=async function(){
    const token=jwt.sign({id:this._id,designation:this.designation},process.env.REFRESH_SECRET_KEY,{expiresIn:process.env.REFRESH_TIME})
    this.refreshToken=token
    await this.save()
    return token
}
UserSchema.methods.GenerateAccessToken=function(){
    const token=jwt.sign({id:this._id,designation:this.designation},process.env.ACCESS_SECRET_KEY,{expiresIn:process.env.ACCESS_TIME})
    return token
}
const user=db.model("user",UserSchema)

module.exports=user;