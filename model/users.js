const pool = require('./databaseConfig')
//users
let userDB = {
    //test
    getTestString: ()=>{
        return new Promise((resolve,reject)=>{
            let sql = 'SELECT * FROM test';
            pool.query(sql,(error,result)=>{
                if(error){
                    reject(error)
                } else {
                    return resolve(result)
                }
            })
        })
    }
}

module.exports = userDB;