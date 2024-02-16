import express from 'express'
import jsonGraphqlExpress from 'json-graphql-server'
import cors from 'cors'
import data from '../database.json'

const app = express()

app.use(cors())
app.use('/', jsonGraphqlExpress(data))

export default app
