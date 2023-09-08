const express = require('express');
const fs = require('fs');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const connection = require('./lib/db');

const app = express();


// 테이블 생성
// connection.connect();

// connection.query('create table list (number int not null auto_increment primary key,date date not null, time time not null, name varchar(20) not null, tel varchar(13)not null,personnel int not null, request varchar(1000));',(error,results, fields)=>{
//     if(error) throw error;
//     console.log('table 생성 완료');
// });

// connection.end();

app.use(bodyParser.urlencoded({
    extended: false,
}));


app.use(express.static(`${__dirname}/public`));

app.get('/',(request, response)=>{
    fs.readFile('public/list.html','utf-8',(error, data)=>{
        connection.query('SELECT *from list order by date, time',(error,results, fields)=>{
            if(error) throw error;
            response.send(ejs.render(data,{
                data: results,
            }));
        });
    });
});

// 예약

app.get('/reservation',(request, response)=>{
    fs.readFile('public/reservation.html','utf-8',(error,data)=>{
        if(error) throw error;
        response.send(data);
    });
});

app.post('/reservation',(request, response)=>{
    const body = request.body;
    connection.query('INSERT INTO list (date, time, name, tel, personnel, request) VALUE (?, ?, ?, ?, ?, ?)',[body.date, body.time, body.name, body.tel, body.personnel, body.request],()=>{
        response.redirect('/');
    });
});


//예약 변경

app.get('/change/:id',(request, response)=>{
    fs.readFile('public/change.html','utf-8',(error,data)=>{
        connection.query('SELECT *from list where number =?',[request.params.id],(error,results)=>{
            if(error) throw error;
            response.send(ejs.render(data,{
                data: results[0],
            }));
        });
    });
});

app.post('/change/:id', (request, response) => {
    const body = request.body;
    connection.query('UPDATE list SET date = ?, time = ?, name = ?, tel = ?, personnel = ?, request = ? WHERE number = ?',
    [body.date, body.time, body.name, body.tel, body.personnel, body.request, request.params.id], (error,results) => {
        if(error) throw error;
        response.redirect('/');
    });
}); 


// 예약 취소

app.get('/cancel/:id',(request, response)=>{
    connection.query('delete from list where number =?',
    [request.params.id],(error,results)=>{
        if(error) throw error;
        response.redirect('/');
    });
});


app.listen(3000,()=>{
    console.log('Server is running port 3000!');
    // connection.connect();
});