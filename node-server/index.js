const express = require("express");
var cors = require("cors");
const xlsx = require('xlsx');
const app = express();
const port = 8080;
app.use(express.json());

var corsOptions = {
    origin:"http://localhost:4200"
  
  }; 

app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.send('<div style="width: 100%; height:100vh; display:flex; flex-direction:column;gap:1rem ; justify-content:center; place-items:center;"> <div style="width:100px; height:100px; background-color: green; border-radius:50%"></div><h1 style="font-family:sans-serif;padding:0;margin:0;"> Server is running</h1> <p style="padding:0;margin:0;font-family:sans-serif;">Ready to take your requests</p></div>');
})

// app.use(function (req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//     res.setHeader('Access-Control-Allow-Credentials', true);
//     next();
// });

app.listen(port, () => {
    console.log("Server running on port 8080");
});

// ROUTES
app.get('/data', (req, res) => {
    const workbook = xlsx.readFile('../data/data.xls');
    const sheetName = workbook.SheetNames[0];
    const sheetData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);
    res.json(sheetData);
});
