/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAddMedicationApp = /* GraphQL */ `
  query GetAddMedicationApp($medicationName: String!) {
    getAddMedicationApp(medicationName: $medicationName) {
      medicationName
      quantity
      refillFrequency
    }
  }
`;
export const listAddMedicationApps = /* GraphQL */ `
  query ListAddMedicationApps(
    $filter: TableAddMedicationAppFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAddMedicationApps(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        medicationName
        quantity
        refillFrequency
      }
      nextToken
    }
  }
`;
