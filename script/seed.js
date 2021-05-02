"use strict";

const {
  db,
  models: { Card, Room },
} = require("../server/db");

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  // Creating Rooms
  const rooms = await Promise.all([
    Room.create({
      name: "Room_1",
    }),
  ]);
  // Creating Cards
  const cards = await Promise.all([
    Card.create({
      title: "The Amazing Race",
      genre: "TV",
    }),
    Card.create({
      title: "Hamilton",
      genre: "PM",
    }),
    Card.create({
      title: "Survivor",
      genre: "TV",
    }),
    Card.create({
      title: "The Joy Luck Club",
      genre: "BK",
    }),
    Card.create({
      title: "Sleepless in Seattle",
      genre: "MV",
    }),
    Card.create({
      title: "Hollywood Squares",
      genre: "TV",
    }),
    Card.create({
      title: "Since You've Been Gone",
      genre: "SG",
    }),
    Card.create({
      title: "Seinfeld",
      genre: "TV",
    }),
    Card.create({
      title: "Rolling in the Deep",
      genre: "SG",
    }),
    Card.create({
      title: "The Yellow Pages",
      genre: "BK",
    }),
    Card.create({
      title: "All By Myself",
      genre: "SG",
    }),
    Card.create({
      title: "Ignition",
      genre: "SG",
    }),
    Card.create({
      title: "Twist and Shout",
      genre: "SG",
    }),
    Card.create({
      title: "I Will Survive",
      genre: "SG",
    }),
    Card.create({
      title: "Surfin' USA",
      genre: "SG",
    }),
    Card.create({
      title: "Bye Bye Bye",
      genre: "SG",
    }),
    Card.create({
      title: "Fearless",
      genre: "AL",
    }),
    Card.create({
      title: "This is Us",
      genre: "TV",
    }),
    Card.create({
      title: "Billy Elliot",
      genre: "PM",
    }),
    Card.create({
      title: "Full House",
      genre: "TV",
    }),
    Card.create({
      title: "To Kill a Mockingbird",
      genre: "BK",
    }),
    Card.create({
      title: "Jaws",
      genre: "MV",
    }),
    Card.create({
      title: "The Circle",
      genre: "TV",
    }),
    Card.create({
      title: "Purple Rain",
      genre: "AL",
    }),
    Card.create({
      title: "Friends",
      genre: "TV",
    }),
    Card.create({
      title: "Desperate Housewives",
      genre: "TV",
    }),
    Card.create({
      title: "Around the World in 80 Days",
      genre: "MV",
    }),
    Card.create({
      title: "Family Ties",
      genre: "TV",
    }),
    Card.create({
      title: "Everybody Loves Raymond",
      genre: "TV",
    }),
    Card.create({
      title: "The Great Gatsby",
      genre: "BK",
    }),
    Card.create({
      title: "Candy",
      genre: "SG",
    }),
    Card.create({
      title: "The Sound of Music",
      genre: "PM",
    }),
    Card.create({
      title: "Catch 22",
      genre: "BK",
    }),
    Card.create({
      title: "Reader's Digest",
      genre: "BK",
    }),
    Card.create({
      title: "An American in Paris",
      genre: "PM",
    }),
    Card.create({
      title: "Of Mice and Men",
      genre: "BK",
    }),
    Card.create({
      title: "Eat Pray Love",
      genre: "MV",
    }),
    Card.create({
      title: "The Notebook",
      genre: "BK",
    }),
    Card.create({
      title: "I Just Can't Wait To Be King",
      genre: "SG",
    }),
    Card.create({
      title: "A Clockwork Orange",
      genre: "BK",
    }),
    Card.create({
      title: "Abbey Road",
      genre: "AL",
    }),
    Card.create({
      title: "Songs in the Key of Life",
      genre: "AL",
    }),
    Card.create({
      title: "Blood on the Tracks",
      genre: "AL",
    }),
    Card.create({
      title: "Jurassic Park",
      genre: "MV",
    }),
    Card.create({
      title: "Still Alice",
      genre: "BK",
    }),
    Card.create({
      title: "The Incredibles",
      genre: "MV",
    }),
    Card.create({
      title: "A Walk to Remember",
      genre: "BK",
    }),
    Card.create({
      title: "Take on Me",
      genre: "SG",
    }),
    Card.create({
      title: "Lord of the Rings",
      genre: "BK",
    }),
    Card.create({
      title: "Lord of the Flies",
      genre: "BK",
    }),
    Card.create({
      title: "Hamlet",
      genre: "PM",
    }),
    Card.create({
      title: "Cats",
      genre: "PM",
    }),
    Card.create({
      title: "Legally Blond",
      genre: "MV",
    }),
    Card.create({
      title: "Glee",
      genre: "TV",
    }),
    Card.create({
      title: "How Deep is Your Love?",
      genre: "MV",
    }),
    Card.create({
      title: "Pac Man",
      genre: "OT",
    }),
    Card.create({
      title: "Seven Brides for Seven Brothers",
      genre: "PM",
    }),
    Card.create({
      title: "Grease",
      genre: "MV",
    }),
    Card.create({
      title: "Othello",
      genre: "PM",
    }),
    Card.create({
      title: "Stand By Me",
      genre: "SG",
    }),
    Card.create({
      title: "Schoolhouse Rock",
      genre: "TV",
    }),
    Card.create({
      title: "All My Children",
      genre: "TV",
    }),
    Card.create({
      title: "The Birth of Venus",
      genre: "FA",
    }),
    Card.create({
      title: "Romeo and Juliet",
      genre: "PM",
    }),
    Card.create({
      title: "Tiny Dancer",
      genre: "SG",
    }),
    Card.create({
      title: "Rear Window",
      genre: "MV",
    }),
    Card.create({
      title: "No Jacket Required",
      genre: "TV",
    }),
    Card.create({
      title: "I Wanna Be Sedated",
      genre: "SG",
    }),
    Card.create({
      title: "Bambi",
      genre: "MV",
    }),
    Card.create({
      title: "The Muppet Show",
      genre: "TV",
    }),
  ]);

  console.log(`seeded ${cards.length} cards`);
  console.log(`seeded successfully`);
  // return {
  //   users: {
  //     cody: users[0],
  //     murphy: users[1],
  //   },
  // };
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
