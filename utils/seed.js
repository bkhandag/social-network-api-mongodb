const connection = require('../config/connection');
const { User, Thought } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  await Thought.deleteMany({});
  await User.deleteMany({});

const users = [
    {
    username: "lernantino",
    email: "lernantino@gmail.com"
    },

    {
        username: "alejandro",
        email: "alejandro@gmail.com"
    },

    {
        username: "fernando",
        email: "fernando@gmail.com"
    }
]

const thoughts = [
    {
        thoughtText: "Here's a cool thought...",
        username: "lernantino",
        userId: "5edff358a0fcb779aa7b118b"
    },

    {
        thoughtText: "But Umphreys is better...",
        username: "alejandro",
    },

    {
    thoughtText: "How original...",
    username: "fernando",
    }
]

await User.collection.insertMany(users);
await Thought.collection.insertMany(thoughts);

// loop through the saved videos, for each video we need to generate a video response and insert the video responses
console.table(users);
console.table(thoughts);
console.info('Seeding complete! 🌱');
process.exit(0);
});

