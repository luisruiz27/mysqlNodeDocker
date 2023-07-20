const mysql = require('mysql2');

// Configura los detalles de la conexión
const connection = mysql.createConnection({
  host: 'localhost',     // Cambia esto por la dirección de tu servidor MySQL si es necesario
  port:3306,
  user: 'root',
  password: 'adderlin',
  database: 'proyecBD'
});

// Establece la conexión
connection.connect((error) => {
  if (error) {
    console.error('Error al conectar a la base de datos: ', error);
    return;
  }
  console.log('Conexión exitosa a la base de datos.');
});



// Cierra la conexión cuando hayas terminado de usarla
connection.end();
