class ResponseObj{
    constructor(status,message,payload,success){
        this.status=status;
        this.message=message;
        this.payload=payload;
        this.success=success;
    }
}

module.exports=ResponseObj;