const mysql = require ("mysql2");

let connection = mysql.createConnection(
    {
        "host"     : "localhost",
        "user"     : "root",
        "password" : "root",
        "database" : "codenotch"
    }
);

connection.connect((error) => {
    if (error) throw error;
    else console.log("Conexion correcta");
    
});

let setear = "UPDATE codenotch.marks SET nota = 0"
connection.query(setear, function (err, result){
    if (err) 
    console.log(err);
    else{
        console.log("Nota seteada a 0 correctamente");
    }
});

let estudiantes = "SELECT nombre, apellidos FROM codenotch.students"
connection.query(estudiantes, function (err, result){
    if (err) 
    console.log(err);
    else{
        console.log(result);
    }
});

let profesores = "SELECT * FROM codenotch.teachers"
connection.query(profesores, function (err,result){
    if (err)
    console.log(err);
    else{
        console.log(result);
    }
});

connection.end();
