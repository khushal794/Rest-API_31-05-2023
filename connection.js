const mysql=require('mysql2');
const connection=mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'root',
    database:'Company'
});

connection.connect((err)=>{
    if(err){
        console.error('Error Connecting to MYsql database:',err);
        return;
    }
    console.log('Database connected successfully');
});
module.exports=connection;