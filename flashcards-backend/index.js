import express from 'express';
import mongoose from 'mongoose';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './graphql/schema';
import resolvers from './graphql/resolvers';

require('dotenv').config();//to read .env file

const app = express();
const PORT = 3000;

//Connect to our DB in MongoDB Atlas
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useFindAndModify: false, useNewUrlParser: true, useCreateIndex: true,  useUnifiedTopology: true}
    );
    const connection = mongoose.connection;
    connection.once('open', () => {
        console.log("MongoDB database connection established");
});

app.get('/', (req, res) => {
    res.send('works!');
});

//Create New Apollo Server
const server = new ApolloServer({ 
    typeDefs, 
    resolvers,
    playground: {
        endpoint: '/graphql',
        settings: {
          'editor.theme': 'light'
        }
      } 
});

server.applyMiddleware({ app });

app.listen(PORT, () => {
    console.log(`server is listening on port: ${PORT}`);
});

