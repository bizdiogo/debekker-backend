import { join } from "path";
import { fileLoader, mergeTypes } from "merge-graphql-schemas";
import { importSchema } from 'graphql-import'

const typesArray = fileLoader(join(__dirname, "../modules/**/*.graphql"));
// const prismaTypes = fileLoader(join(__dirname, "../generated/**/*.graphql"));
// const typesMerged = mergeTypes([...typesArray, ...prismaTypes]);

const typesMerged = mergeTypes(typesArray);

// export default typesMerged;

const budgetLine = importSchema(join(__dirname, '../modules/BudgetLine/schema.graphql'))
const client = importSchema(join(__dirname, '../modules/Client/schema.graphql'))
const clientContact = importSchema(join(__dirname, '../modules/ClientContact/schema.graphql'))
const communication = importSchema(join(__dirname, '../modules/Communication/schema.graphql'))
const dashboard = importSchema(join(__dirname, '../modules/Dashboard/schema.graphql'))
const employee = importSchema(join(__dirname, '../modules/Employee/schema.graphql'))
const employeeEstimation = importSchema(join(__dirname, '../modules/EmployeeEstimation/schema.graphql'))
const event = importSchema(join(__dirname, '../modules/Event/schema.graphql'))
const eventType = importSchema(join(__dirname, '../modules/EventType/schema.graphql'))
const item = importSchema(join(__dirname, '../modules/Item/schema.graphql'))
const job = importSchema(join(__dirname, '../modules/Job/schema.graphql'))
const language = importSchema(join(__dirname, '../modules/Language/schema.graphql'))
const offer = importSchema(join(__dirname, '../modules/Offer/schema.graphql'))
const place = importSchema(join(__dirname, '../modules/Place/schema.graphql'))
const placeContact = importSchema(join(__dirname, '../modules/PlaceContact/schema.graphql'))
const sectionItem = importSchema(join(__dirname, '../modules/SectionItem/schema.graphql'))
const stuff = importSchema(join(__dirname, '../modules/Stuff/schema.graphql'))
const tax = importSchema(join(__dirname, '../modules/Tax/schema.graphql'))
const user = importSchema(join(__dirname, '../modules/User/schema.graphql'))
const vehicle = importSchema(join(__dirname, '../modules/Vehicle/schema.graphql'))

const schemas = {
  budgetLine,
  client,
  clientContact,
  communication,
  dashboard,
  employee,
  employeeEstimation,
  event,
  eventType,
  item,
  job,
  language,
  offer,
  place,
  placeContact,
  sectionItem,
  stuff,
  tax,
  user,
  vehicle
}

export default importSchema(budgetLine)
