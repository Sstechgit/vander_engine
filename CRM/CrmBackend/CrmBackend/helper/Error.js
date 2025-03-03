class ErrorResponse{
    constructor(status,message,payload=null){
        this.status=status;
        this.message=message;
        this.payload=payload;
        this.success=status>=200 && status <300;
    }
}

module.exports=ErrorResponse;