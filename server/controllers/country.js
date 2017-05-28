import express from 'express';
import model from '../models';

var countryRouter = express.Router();

countryRouter.route('/api/country/:_id')
    .get((req, res) => {
        let id = req.params._id;
        model.country.findById(id, { _id: 1, name: 1, active: 1 })
        .then(data => {
            res.json({ data: data });
        }).catch(error => {
            res.status(500).json({ error: error });
        });
    }).delete((req, res) => {
        let id = req.params._id;
        model.country.remove({ _id: id })
        .then(data => {
            res.json({ data: data });
        }).catch(error => {
            res.status(500).json({ error: error });
        });
    }).put((req, res) => {
        let id = req.params._id;
        let country = req.body;
        model.country.findOneAndUpdate({ _id: id }, country)
        .then(data => {
            res.json({ _id: data._id });
        }).catch(error => {
            res.status(500).json({ error: error });
        });
    });

countryRouter.route('/api/countries')
    .get((req, res) => {
        model.country.find({}, { _id: 1, name: 1, active: 1 })
        .then(data => {
            res.json({ data: data });
        }).catch(error => {
            res.status(500).json({ error: error });
        });
    }).post((req, res) => {
        let country = req.body;
        let countryModel = new model.country({
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

export default countryRouter;