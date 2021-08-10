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


let añadirColumna = "ALTER TABLE alumnos ADD email varchar(20)";
connection.query(añadirColumna, function (err, result){
    if (err) 
    console.log(err);
    else{
        console.log("columna creada correctamente");
    }
});

let borrarColumna = "ALTER TABLE alumnos DROP COLUMN email";
connection.query(borrarColumna, function (err, result){
    if (err) 
    console.log(err);
    else{
        console.log("columna borrada correctamente");
    }
});

let sql = "DROP TABLE alumnos";
connection.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Tabla eliminada");
})

connection.end();




