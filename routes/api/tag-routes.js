const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// This finds all Tags with Product Data included
router.get('/', async (req, res) => {
  try {
    const taginfo = await Tag.findAll({
      include: [{model: Product}]
    });

    res.status(200).json(taginfo);
  } catch (err) {
    res.status(500).json({ message: 'Unable to find any Tags - Server Issue'});
  }
});


// This finds a single Tag with Prodcut Data included
router.get('/:id', async (req, res) => {
  try {
    const taginfo = await Tag.findByPk(req.params.id, {
      include: [{model: Product}]
    });

    if(!taginfo) {
      res.status(404).json({ message: 'No Tag was found with that ID.'})
      return;
    }

    res.status(200).json(taginfo);
  } catch (err) {
    res.status(500).json({ message: 'Unable to find Tag by ID - Server Issue'})
  }
});


// This will create a new Tag
router.post('/', async (req, res) => {
  try {
    const taginfo = await Tag.create(req.body);

    res.status(200).json(taginfo);
  } catch (err) {
    res.status(400).json({ message: 'Unagle to create Tag - Server Issue'})
  }
});


// This will update a Tag's Name by its ID 
router.put('/:id', async (req, res) => {
  try {
    const taginfo = await Tag.update(req.body, {
      where: {
        id: req.params.id
      }
    });

    if(!taginfo) {
      res.status(404).json({ message: 'No Tag was found with that ID'})
    }

    res.status(200).json(taginfo);
  } catch (err) {
    res.status(500).json({ message: 'Unable to update Tag - Server Issue'})
  }
});


// This will delete a Tag by its ID
router.delete('/:id', async (req, res) => {
  try {
    const taginfo = await Tag.delete(req.body, {
      where: {
        id: req.params.id
      }
    });
  
    if(!taginfo) {
      res.status(404).josn({ message: 'No Tag was found with taht ID.'})
      return;
    }

    res.status(200).json(taginfo);
  } catch (err) {
    res.status(500).json({ message: 'Unable to delete Tag - Server Issue'})
  }
});

module.exports = router;
