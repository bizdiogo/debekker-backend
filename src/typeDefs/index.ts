import { join } from "path";
import { fileLoader, mergeTypes } from "merge-graphql-schemas";

const typesArray = fileLoader(join(__dirname, "../modules/**/*.graphql"));
const prismaTypes = fileLoader(join(__dirname, "../generated/**/*.graphql"));

const typesMerged = mergeTypes([...typesArray, ...prismaTypes]);

export default typesMerged;