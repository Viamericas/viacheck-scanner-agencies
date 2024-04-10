import gql from "graphql-tag";

export default gql(`
subscription onUpdateNotifications($status:String!) {
  onUpdateNotifications(status:$status){
    notificationId
    date
    information {
      routing
      account
      checkNumber
      payee
      amount
      refImageKey   
      statusDescription  
    }    
    status
    review
    agency
    checkId
    type      
  }
}`);
