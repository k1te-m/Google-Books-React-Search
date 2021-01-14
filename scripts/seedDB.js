const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    'mongodb://localhost/googlebooks'
);

const repoSeed = [
    {
        title: '1984',
        authors: ['George Orwell'],
        description: 'A PBS Great American Read Top 100 Pick With extraordinary relevance and renewed popularity, George Orwell’s 1984 takes on new life in this edition. “Orwell saw, to his credit, that the act of falsifying reality is only secondarily a way of changing perceptions. It is, above all, a way of asserting power.”—The New Yorker In 1984, London is a grim city in the totalitarian state of Oceania where Big Brother is always watching you and the Thought Police can practically read your mind.',
        image: 'http://books.google.com/books/content?id=kotPYEqx7kMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        link: 'https://books.google.com/books?id=kotPYEqx7kMC&printsec=frontcover&dq=1984&hl=&cd=1&source=gbs_api#v=onepage&q=1984&f=false',
    }
]

db.Book.remove({})
  .then(() => db.Book.collection.insertMany(repoSeed))
  .then((data) => {
      console.log(data.result.n + ' records inserted!')
      process.exit(0);
  })
  .catch((error) => {
      console.error(error);
  })