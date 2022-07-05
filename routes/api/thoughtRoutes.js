const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  removeThought,
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/users/:thoughtId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(removeThought);

// // /api/users/:thoughtId/reactions
// router
//   .route('/:thoughtId/reactions')
//   .get(getSingleThought)
//   .put(updateThought)
//   .delete(removeThought);

module.exports = router;
