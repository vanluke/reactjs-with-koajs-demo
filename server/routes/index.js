import router from 'koa-router';
import config from './../config';
import mongoDatabase from './../mongodbService';
import airports from './airports';
// import {Connection, Request} from 'tedious';
//
// const dbconfiguration = config.get('tedious');
// console.log(dbconfiguration);
// const con = new Connection(dbconfiguration);
// con.on('connect', (err) => {
//     if (err) {
//       throw err;
//     }
//      var request = new Request("SELECT top 10 [ProjectName], [UserNickName], [UserEmail]  FROM [Intranet_Purchasing].[dbo].[View_ActiveISIProjects]", function(err, rowCount, rows){
//        console.log(rowCount);
//
//           console.log(rows);
//        })
//        request.on('done', function (rowCount, more, rows) {
//          console.log(rowCount);
//          console.log(more);
//             console.log(rows);
//         });
//         request.on('row', function (columns) {
//         //  console.log(columns);
//         });
//        con.execSql(request);
//   }
// );

const routes = new router();
routes.get('/test',airports);

export default routes;
