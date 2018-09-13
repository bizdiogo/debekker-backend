import * as fs from 'fs'
import * as R from 'ramda'
import * as glob from 'glob'
import { importSchema } from 'graphql-import'

export default R.compose(
  importSchema,
  R.join('\n'),
  R.map(file => fs.readFileSync(file, 'utf-8')),
  glob.sync
 )