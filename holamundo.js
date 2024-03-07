//llamamos el modulo http
const http= require('http');

//establecemos la url o ip de nuestro server. cuando se suba al server se pondra la del server. en la red
const hostname = '192.168.1.113';

//establecemos el puerto de escucha
const port = 3000;

//creamos una instancia http con un request y un response
const server = http.createServer((req,res)=>{
    //el server respondera un codigo 200
    res.statusCode=200;

    //el server respondera con un texto plano
    res.setHeader('Content-Type', 'text/plain');

    //el server respondera el msj hola mundo
    res.end('Hola wei \n');
});

server.listen(port, hostname,()=>{
    console.log('el server se ejecuta en http://${hostname}:${port}/')
});