import gql from "graphql-tag";

export default gql(`
query listAllNotifications($agency:String!) {
  listAllNotifications(agency:$agency) {
    items {
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
  }  
}`);
