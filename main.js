var mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'database-1.cpmeoluhtdcm.ap-northeast-2.rds.amazonaws.com',
    user: 'admin',
    password: '11111111',
    database: 'reservation_list',
    port: '3306',
    dateStrings: 'date',
});

// RDS에 접속
connection.connect(function(err){
    if(err) {
        throw err; // 접속에 실패하면 에러를 throw 합니다.
    } else {
        // connection.query("create database reservation_list", function(err, rows, fields) {
        //     console.log(rows); // 결과를 출력합니다!
        //   });

        connection.query("select *from list;", function(err, rows, fields) {
            console.log(rows); // 결과를 출력합니다!
          });

        // connection.query('create table list (number int not null auto_increment primary key,date date not null, time time not null, name varchar(20) not null, tel varchar(13)not null,personnel int not null, request varchar(1000));', (error, results, fields) => {
        //     if (error) throw error;
        //     console.log(results);
        //     });

        // connection.query('insert into list (date, time, name, tel, personnel, request) values (\'2023-01-06\',\'18:30:00\',\'예슈화\',\'010-6666-6666\',\'5\',\'시원한 자리로 예약부탁드립니다.\'),(\'2023-01-31\',\'13:00:00\',\'조미연\',\'010-5555555\',\'5\',\'뷰 좋은 자리로 예약할게요.\'),(\'2023-04-11\',\'13:30:00\',\'유지민\',\'010-1111-1111\',\'4\',\'4인 한정 메뉴 예약하겠습니다.\'),(\'2023-08-01\',\'15:00:00\',\'김채원\',\'010-3333-3333\',\'5\',\'시끄러울 수 있으니 장소에 구애받지 않는 자리로 예약 도와주세요.\'),(\'2023-09-01\',\'12:30:00\',\'안유진\',\'010-0000-0000\',\'6\',\'프라이빗 룸으로 예약할게요.\'),(\'2023-09-23\',\'12:00:00\',\'송우기\',\'010-7777-7777\',\'5\',\'한정메뉴 5인상 준비해주세요.\')'),(error,results,fields) => {
        //     if(error) throw error;
        //     console.log(results);
        // };





        console.log('연결완료');
    }
});