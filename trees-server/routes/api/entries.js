const express = require('express');
const router = express.Router();

// Load Entry model
const Entry = require('../../models/Entry');

//test route
router.get('/test', (req, res) => res.send('entries route testing!'));



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