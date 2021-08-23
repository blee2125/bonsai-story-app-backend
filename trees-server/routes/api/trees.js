const express = require('express');
const router = express.Router();

// Load Tree model
const Tree = require('../../models/Tree');
const Entry = require('../../models/Entry');

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



//--- test get entries
router.get('/', (req, res) => {
  Entry.find()
    .then(entry => res.json(entry))
    .catch(err => res.status(404).json({ noentriesfound: 'No entries found' }));
});

//--- test post entry
router.post('/:id/entry', (req, res) => {
  Entry.create(req.body)
    .then(entry => req.json({ msg: 'entry added' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this entry' }));
})

//--- test update entry
router.put('/:id', (req, res) => {
  Entry.findByIdAndUpdate(req.params.id, req.body)
    .then(entry => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
  );
});

//--- test delete entry
router.delete('/:id', (req, res) => {
  Entry.findByIdAndRemove(req.params.id, req.body)
      .then(entry => res.json({ mgs: 'Entry deleted successfully' }))
      .catch(err => res.status(404).json({ error: 'No entry exists!' }));
})

module.exports = router;