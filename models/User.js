const { Schema, model } = require('mongoose');

// Schema to create User model
//TODO make username and email unique, required trimmed, email must match valid address
const userSchema = new Schema(
  {
    username: String,
    email: String,
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  {
    // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
    // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `friendCount` that retrieves length of users friends array
userSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return `${this.username}`;
  // })
  // // Setter to set the first and last name
  // .set(function (v) {
  //   const first = v.split(' ')[0];
  //   const last = v.split(' ')[1];
  //   this.set({ first, last });
  });

// Initialize our User model
const User = model('user', userSchema);

module.exports = User;
