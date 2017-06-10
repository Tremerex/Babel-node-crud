import express from 'express';
import { country } from '../models';

const router = express.Router();

router.route('/api/country/:_id')
    .get((req, res) => {
        let id = req.params._id;
        country.findById(id, { _id: 1, name: 1, active: 1 })
        .then(data => {
            res.json({ data: data });
        }).catch(error => {
            res.status(500).json({ error: error });
        });
    }).delete((req, res) => {
        let id = req.params._id;
        country.remove({ _id: id })
        .then(data => {
            res.json({ data: data });
        }).catch(error => {
            res.status(500).json({ error: error });
        });
    }).put((req, res) => {
        let id = req.params._id;
        let country = req.body;
        country.findOneAndUpdate({ _id: id }, country)
        .then(data => {
            res.json({ _id: data._id });
        }).catch(error => {
            res.status(500).json({ error: error });
        });
    });

router.route('/api/countries')
    .get((req, res) => {
        country.find({}, { _id: 1, name: 1, active: 1 })
        .then(data => {
            res.json({ data: data });
        }).catch(error => {
            res.status(500).json({ error: error });
        });
    }).post((req, res) => {
        let country = req.body;
        let countryModel = new country({
            name: country.name,
            active: country.active
        });
        countryModel.save()
        .then(data => {
            res.json({ _id: data._id });
        }).catch(error => {
            res.status(500).json({ error: error });
        });
    });

export const countryController = router;
