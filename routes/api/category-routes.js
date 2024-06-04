const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// This finds all Categories and includes the Product Model
router.get('/', async (req, res) => {
  try {
    const infoCat = await Category.findAll(
    {  include: [{model: Product}] }
    );

    res.status(200).json(infoCat);
  } catch (err) {
    res.status(500).json(err);
  }
});
  

// This finds one category by ID, and includes Product Model
router.get('/:id', async (req, res) => {
  try {
    const infoCat = await Category.findByPk(req.params.id, {
      include: [{ model: Product }]
    });

    if (!infoCat) {
      res.status(404).json ({ message: 'There was no Category found with this ID' })
      return;
    }

    res.status(200).josn(infoCat);
  } catch (err) {
    res.status(500).json ({ message: 'Unable to find Category from this Id - Server Issue' })
  }
});


// This creates a new Category
router.post('/', async (req, res) => {
  try {
    const infoCat = await Category.create(req.body);

    res.status(200).josn(infoCat);
  } catch (err) {
    res.status(400).json({ message: 'Undable to create Category - Server Issue'});
  }
});


// This updates a Category by its ID
router.put('/:id', async (req, res) => {
  try {
    const infoCat = await Category.update(req.body, {
      where: {
      id: req.params.id
    }});
    
    if(!infoCat) {
      res.status(404).json({ message: 'No Category found with that ID.'})
    }

    res.status(200).json(infoCat);
  } catch (err) {
    res.status(500).json({ message: 'Unable to update Category - Server Issue'})
  }
});


// This will delete a Category by its ID
router.delete('/:id', async (req, res) => {
  try {
    const infoCat = await Category.delete(req.body, {
      where: {
        id: req.params.id
      }
    });

    if(!infoCat) {
      res.status(404).json({ message: 'No Category found with this ID.'})
      return;
    }

    res.status(200).json(infoCat);
  } catch (err) {
    res.status(500).json({ message: 'Unable to delete Category - Server Issue'})
  }
});

module.exports = router;
