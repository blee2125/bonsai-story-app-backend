const express = require('express');
const router = express.Router();

// Load Tree model
const Tree = require('../../models/Tree');

// @route GET api/trees/test
// @description tests tree route
// @access Public
router.get('/test', (req, res) => res.send('tree route testing!'));

// @route GET api/trees
// @description Get all trees
// @access Public
router.get('/', (req, res) => {
    Tree.find()
      .then(trees => res.json(trees))
      .catch(err => res.status(404).json({ notreesfound: 'No trees found' }));
});

// @route GET api/trees/:id
// @description Get single tree by id
// @access Public
router.get('/:id', (req, res) => {
    Tree.findById(req.params.id)
      .then(tree => res.json(tree))
      .catch(err => res.status(404).json({ notreefound: 'No tree found' }));
});

// @route GET api/trees
// @description add/save tree
// @access Public
router.post('/', (req, res) => {
    Tree.create(req.body)
      .then(tree => res.json({ msg: 'Tree added successfully' }))
      .catch(err => res.status(400).json({ error: 'Unable to add this tree' }));
});

// @route GET api/trees/:id
// @description Update tree
// @access Public
router.put('/:id', (req, res) => {
    Tree.findByIdAndUpdate(req.params.id, req.body)
      .then(tree => res.json({ msg: 'Updated successfully' }))
      .catch(err =>
        res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/trees/:id
// @description Delete tree by id
// @access Public
router.delete('/:id', (req, res) => {
    Tree.findByIdAndRemove(req.params.id, req.body)
      .then(tree => res.json({ mgs: 'Tree entry deleted successfully' }))
      .catch(err => res.status(404).json({ error: 'No such a tree' }));
});



module.exports = router;