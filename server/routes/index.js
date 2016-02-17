import router from 'koa-router';
import config from './../config';
import {Connection, Request} from 'tedious';

const dbconfiguration = config.get('tedious');
console.log(dbconfiguration);
const con = new Connection(dbconfiguration);
con.on('connect', (err) => {
    if (err) {
      throw err;
    }
     var request = new Request("SELECT top 10 [ProjectName], [UserNickName], [UserEmail]  FROM [Intranet_Purchasing].[dbo].[View_ActiveISIProjects]", function(err, rowCount, rows){
       console.log(rowCount);

          console.log(rows);
       })
       request.on('done', function (rowCount, more, rows) {
         console.log(rowCount);
         console.log(more);
            console.log(rows);
        });
        request.on('row', function (columns) {
        //  console.log(columns);
        });
       con.execSql(request);
  }
);
var routes = new router();
routes.get('/test', function *() {
    this.body = { k: 1, k1: 2, k2: 3 };
});

export default routes;
