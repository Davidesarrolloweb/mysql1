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

let borrarNota = "DELETE FROM codenotch.marks WHERE fecha < '2015-01-10'"
connection.query(borrarNota, function (err, result){
    if (err) 
    console.log(err);
    else{
        console.log(result);
    }
});


let ajustarNota = "UPDATE codenotch.marks SET nota = 5 WHERE nota < '5' "
connection.query(ajustarNota, function (err, result){
    if (err) 
    console.log(err);
    else{
        console.log(result);
    }
});
connection.end();