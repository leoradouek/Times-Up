"use strict";

const {
  db,
  models: { Card },
} = require("../server/db");

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  // Creating Users
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
      title: "Ignition",
      genre: "SG",
    }),
    Card.create({
      title: "Fearless",
      genre: "AL",
    }),
    Card.create({
      title: "Title1",
      genre: "TV",
    }),
    Card.create({
      title: "Title2",
      genre: "PM",
    }),
    Card.create({
      title: "Title3",
      genre: "TV",
    }),
    Card.create({
      title: "Title4",
      genre: "BK",
    }),
    Card.create({
      title: "Title5",
      genre: "MV",
    }),
    Card.create({
      title: "Title6",
      genre: "TV",
    }),
    Card.create({
      title: "Title7",
      genre: "SG",
    }),
    Card.create({
      title: "Title8",
      genre: "TV",
    }),
    Card.create({
      title: "Title9",
      genre: "SG",
    }),
    Card.create({
      title: "Title10",
      genre: "BK",
    }),
    Card.create({
      title: "Title11",
      genre: "SG",
    }),
    Card.create({
      title: "Title12",
      genre: "SG",
    }),
    Card.create({
      title: "Title13",
      genre: "SG",
    }),
    Card.create({
      title: "Title14",
      genre: "SG",
    }),
    Card.create({
      title: "Title15",
      genre: "SG",
    }),
    Card.create({
      title: "Title16",
      genre: "SG",
    }),
    Card.create({
      title: "Title17",
      genre: "AL",
    }),
    Card.create({
      title: "Title18",
      genre: "BK",
    }),
    Card.create({
      title: "Title19",
      genre: "SG",
    }),
    Card.create({
      title: "Title20",
      genre: "SG",
    }),
    Card.create({
      title: "Title21",
      genre: "SG",
    }),
    Card.create({
      title: "Title22",
      genre: "SG",
    }),
    Card.create({
      title: "Title23",
      genre: "SG",
    }),
    Card.create({
      title: "Title24",
      genre: "SG",
    }),
    Card.create({
      title: "Title25",
      genre: "AL",
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
