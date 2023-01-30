const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express();
const mysql = require('mysql');

const admin = require("firebase-admin");

const credential = require("./FirebaseJson.json");

admin.initializeApp({
    credential: admin.credential.cert(credential)
})

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'employee',
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`server is running PORT ${PORT}`);
})

app.use(cors())
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))


app.get('/api/get', (req, res) => {
    const GetQuery = "SELECT * FROM employee1;"
    db.query(GetQuery, (err, result) => {
        console.log(result, 'resultOfGetApi');
        res.send(result);
    })
})

app.post('/signUp/auth', async (req, res) => {
    const userDetails = await admin.auth().createUser({
        email: req.body.email,
        emailVerified: false,
        disabled: false
    });
    res.json(userDetails);
})

app.post('/api/insert', (req, res) => {
    const sqlsmt = "INSERT INTO employee1(firstName,LastName,phoneNumber,NewPassWord,Birthday,gender,images) VALUES (?,?,?,?,?,?,?);"
    const firstName = req.body.firstName;
    const LastName = req.body.LastName;
    const phoneNumber = req.body.phoneNumber;
    const password = req.body.Password;
    const birthday = req.body.date;
    const gender = req.body.gender;
    const images = req.body.images;
    db.query(sqlsmt, [firstName, LastName, phoneNumber, password, birthday, gender, images], (err, result) => {
        res.send("creted");
        console.log(birthday, 'birthday');
        console.log(result, 'result');
        // result.send(result);
    })

})

app.patch('/api/update', (req, res) => {
    const sqlUpdate = `UPDATE employee1
 SET NewPassWord = (?)
 WHERE id = (?);`

    const newPassword = req.body.password;
    const id = req.body.id;
    db.query(sqlUpdate, [newPassword, id], (err, result) => {
        console.log(result, 'upadate');
    })
})

app.delete('/api/delete', (req, res) => {
    const deleteSqlQuery = "DELETE FROM employee1 WHERE LastName=?;"
    const lastName = req.body;
    console.log(lastName, 'lastName');
    db.query(deleteSqlQuery, lastName, (err, res) => {
        console.log(err.message, 'result');
    })
})
app.listen(3001, () => {
    console.log("ruuning on port 3001");
})