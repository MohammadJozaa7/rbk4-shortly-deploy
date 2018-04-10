
var mongoose = require('mongoose');
var mongoDB = 'mongodb://127.0.0.1/shortlydb';
mongoose.connect(mongoDB);


var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));




module.exports = db;



/*
//var path = require('path');
var mongoose = require('mongoose');
//var MongoClient = require('mongodb').MongoClient;
// var mongoDB = 'insert_your_database_url_here';
// mongoose.connect(mongoDB);
// var db = mongoose.connection;
var Schema = mongoose.Schema;

var urls=new Schema({
      url:{type:string},
      baseUrl:{type:string},
     baseUrl:{type:string},
     title:{type:string},
      visits:{type:Number,}
}
)
// var knex = require('knex')({
//   client: 'sqlite3',
//   connection: {
//     filename: path.join(__dirname, '../db/shortly.sqlite')
//   },
//   useNullAsDefault: true
// });
// var db = require('bookshelf')(knex);

db.knex.schema.hasTable('urls').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('urls', function (link) {

     
      link.timestamps();
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

db.knex.schema.hasTable('users').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('users', function (user) {

      username:string,
      user.string('password', 100);
      user.timestamps();
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

module.exports = db;


db.knex.schema.hasTable('urls').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('urls', function (link) {
      link.increments('i  d').primary();
      link.string('url', 255);
      link.string('baseUrl', 255);
      link.string('code', 100);
      link.string('title', 255);
      link.integer('visits');
      link.timestamps();
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

db.knex.schema.hasTable('users').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('users', function (user) {
      user.increments('id').primary();
      user.string('username', 100).unique();
      user.string('password', 100);
      user.timestamps();
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }



*/
