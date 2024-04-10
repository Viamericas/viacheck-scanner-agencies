import gql from "graphql-tag";

export default gql(`
mutation createAuditReturnedChecks($auditRetornedInput: AuditReturnedInput){
  createAuditReturnedChecks(input: $auditRetornedInput)
  {
      code
      message
  }
}`);
