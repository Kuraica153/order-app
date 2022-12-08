import { Router } from 'express';
import Item from '../models/Item.js';

const router = Router();

router.get('/', async (req, res) => {
    Item.find().then( (item) => {
        res.json(item)
    }).catch( (err) => {
        res.status(400).json('Error: ' + err)
    });
});

router.get('/:id', (req, res) => {
    Item.findById(req.params.id).then( (items) => {
        res.json(items)
    }).catch( (err) => {
        res.status(400).json('Error: ' + err)
    });
});

router.post('/', async (req, res) => {
    const obj = new Item(req.body);
    Item.create(obj).then((items) => {
        res.json(items);
    }
    ).catch((err) => {
        res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
    Item.findByIdAndUpdate(req.params.id, req.body, { new: true }).then( (obj) => {
        res.json(obj)
    }).catch( (err) => {
        res.status(400).json('Error: ' + err)
    });
});

router.delete('/:id', (req, res) => {
    Item.findByIdAndDelete(req.params.id).then( (obj) => {
        res.json(obj)
    }).catch( (err) => {
        res.status(400).json('Error: ' + err)
    });
});

export default router;