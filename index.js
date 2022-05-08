import express from 'express'
import mongoose from 'mongoose'

const getBtn = document.getElementById('getBtn')
const input = document.getElementsByTagName('input')


const app = express()

app.use(express.json())

app.listen(8080,function () {
    console.log('all running on port 8080 sir');
})

getBtn.addEventListener('click', function () {
    const msg = input.value
    
})