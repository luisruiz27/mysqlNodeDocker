import express from 'express'
import mysql from 'mysql2/promise'

const app=express()

const cliente = mysql.createPool({
  host: 'localhost',
  port:3306,
  user: 'root',
  password: 'adderlin'
})
const response=await cliente.query('SELECT 1+1')
console.log(response)

// connection.end();
app.listen(3000)
  console.log(`Server running on Port 3000`)




