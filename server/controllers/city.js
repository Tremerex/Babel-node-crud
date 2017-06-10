import express from 'express';
import { city } from '../models';

const router = express.Router();

router.route('/api/city/:_id')
    .get((req, res) => {
        var id = req.params._id;
        city.findById(id, { _id: 1, name: 1, country: 1, active: 1 })
        .populate('country', { _id: 1, name: 1, active: 1 }, { active: 1 })
        .then(data => {
            res.json({ data: data });
        }).catch(error => {
            res.status(500).json({ error: error });
        });
    }).delete((req, res) => {
        var id = req.params._id;
        city.remove({ _id: id })
        .then(data => {
            res.json({ data: data });
        }).catch(error => {
            res.status(500).json({ error: error });
        });
    }).put((req, res) => {
        var id = req.params._id;
        let city = req.body;
        city.findOneAndUpdate({ _id: id }, city)
        .then(data => {
            res.json({ _id: data._id });
        }).catch(error => {
            res.status(500).json({ error: error });
        });
    });

router.route('/api/cities')
    .get((req, res) => {
        city.find({}, { _id: 1, name: 1, country: 1, active: 1 })
        .populate('country', { _id: 1, name: 1, active: 1 }, { active: 1 })
        .then(data => {
            res.json({ data: data });
        }).catch(error => {
            res.status(500).json({ error: error });
        });
    }).post((req, res) => {
        let city = req.body;
        let cityModel = new city({
            name: city.name,
            country: city.country,
            active: city.active
        });
        cityModel.save()
        .then(data => {
            res.json({ _id: data._id });
        }).catch(error => {
            res.status(500).json({ error: error });
        });
    });

export const cityController = router;
