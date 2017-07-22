import config from './config'

//console.info(config.port)
 import express from 'express';

const server =express();
 
server.get('/',(req,res) => {
	res.send('Hello');
});

server.listen(config.port, () => {
	console.info(config.port)
});
