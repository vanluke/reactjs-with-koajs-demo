
MongoClient.connect('mongodb://<dbuser>:<dbpassword>@ds053140.mongolab.com:53140/blog', (err, database) => {
  if (err) throw err;

  db = database;
  app.use('/graphql', GraphQLHTTP({
    schema: schema(db),
    graphiql: true
  }));

  app.listen(3000, () => console.log('Listening on port 3000'));
});
