//  export const base = "https://sstechcrm.com";
//export const base = "http://backend.sstechcrm.com";
  export const base = "http://localhost:8000";

// export const base = "http://crmbackend.ap-south-1.elasticbeanstalk.com"
export const urls = {
  LOGIN: base+"/api/login",
  REGISTER: base+"/api/user",
  VERIFY_OTP:base+"/api/verify-otp",
  LOGOUT:base+"/api/logout",
  ADDTASK:base+"/api/addTask",
  AllAgents:base+"/api/AllUser",
  UpdateAgent:base+"/api/Agent", //Put
  DeleteAgents:base+"/api/DeleteAgent", 
  FetchLeads: base+"/api/leads",
  DeleteLeads: base+"/api/DeleteLead", 
  EditLead: base+"/api/lead", //PUT
  AddLead: base+"/api/lead", //POST
  FindTask:base+"/api/task",//get
  Distribute:base+"/api/Tasks", //POST
  Redistribute: base+"/api/Tasks", //[put]
  FilterLeads:base+"/api/filterLead/:way",
  AllAgentsWithoutPage:base+"/api/AgentWithTask",
  GetClients:base+"/api/client",
  GetOrders:base+"/api/orders",
  DistributeOrder: base+"/api/orders/Tasks",
  deleteOrder:base+"/api/order",
  FetchTask:base+"/api/task", //get /page/pagesize
  ReDistributeOrder:base+"/api/orders/Redistribute",
  GetTaskForAgent:base+"/api/agent/task",
  searchProduct:"https://backend.vanderengines.com/api/crmsearchroute",
  changeStatusLead:base+"/api/agent/task/status",
  changeStatusOrder:base+"/api/orders/status",
  addnote:base+"/api/note" ,//post
  editnote:base+"/api/note" ,//put
  deletenote:base+"/api/note" ,//delete
  getByKey:base+"/api/noteByKey",//get
  getbydate:base+"/api/noteByDate",
  FetchMail:base+"/api/emails",
  sendMail:base+"/api/email",
  checkMail:base+"/api/emailCount",
  deleteTask:base+"/api/task",
  //added-
  getCompletedOrders:base+"/api/CompletedOrder", 
  getCompletedTasks:base+"/api/CompletedTask",
  addFollowup:base+"/api/followup",
  getFollowup:base+"/api/followup",
  deleteFollowup:base+"/api/followup",

  EditFollowUp:base+"/api/followup" ,//put
  getStatus:base+"/api/status",
  followupKey:base+"/api/followupDetails",
  SearchByName:base+"/api/searchByName",
  addQuotation:base+"/api/quotation", //post
  editQuotation:base+"/api/quotation", //put
  deleteQuotion:base+"/api/quotation", //delete
  fetchQuotation:base+"/api/quotation", //get /1/10
  addToVander:base+"/api/addToVander",//post
  trackAgent:base+"/api/TrackAgent",
  TaskOnStatus:base+"/api/TaskOnStatus", //get /1/10
  getSingleLead:base+"/api/getLead",  search:base+"/api/search", // /:name
  getReminder:base+"/api/reminder",
  // yards
  addYard:base+"/api/yard", //post
  editYard:base+"/api/yard", //put 
  deleteYard:base+"/api/DeleteYard",//post
  // super admin
  GetStaff:base+"/api/S-agents", //GET
  GetIdentity:base+"/api/S-Identity", //GET
  //ringcentral and invoice
  addInvoice:base+"/api/invoice", //post
  deleteInvoice:base+"/api/invoice",//delete
  fetchInvoice:base+"/api/invoice",//get
  sendmsg:base+"/api/sendmsg",//post - formdata
  checksms:base+"/api/notifysms",//get
  getChats:base+"/api/chats",//get
  auth:base+"/api/auth",//get
  checkLogin:base+"/api/checkLogin",
  media:base+"/api/media"
};

export const mails={
  "Vander Engines":"vanderengines1@gmail.com",
  "USA AUTO PARTS LLC":"knightranger94@gmail.com",
  "USA AUTO PARTS":"usaautopartsllc01@gmail.com"
}
