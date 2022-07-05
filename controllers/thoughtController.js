const { Thought, User } = require('../models');

module.exports = {
  getThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new Thought
  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) => {
        return Thought.findOneAndUpdate(
          { _id: req.body.userId },
          { $addToSet: { thoughts: thought._id } },
          { new: true }
        );
      })
      .then((user) =>
        !user
          ? res
              .status(404)
              .json({ message: 'Thought created, but found no user with that ID' })
          : res.json('Created the Thought 🎉')
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },


  // Delete a Thought 
  removeThought(req, res) {
    Thought.findOneAndRemove({ _id: req.params.ThoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No such user exists' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  
  // Update a Thought 
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.ThoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
      )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No such thought exists' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },


  // create a reaction stored in a Thought
  createReaction(req, res) {
    Thought.create(req.body)
      .then((thought) => {
        return Thought.findOneAndUpdate(
          { _id: req.body.thoughtId },
          { $addToSet: { thoughts: thought._id } },
          { new: true }
        );
      })
      .then((user) =>
        !user
          ? res
              .status(404)
              .json({ message: 'Thought created, but found no user with that ID' })
          : res.json('Created the Thought 🎉')
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // Delete a Reaction 
  removeReaction(req, res) {
    Thought.findOneAndRemove({ _id: req.params.ThoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No such user exists' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },

};
