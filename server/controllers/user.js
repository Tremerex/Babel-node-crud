import express from 'express';
import model from '../models';

var userRouter = express.Router();

userRouter.route('/api/user/:_id')
    .get((req, res) => {
        var id = req.params._id;
        model.user.findById(id, { _id: 1, name: 1, active: 1 })
        .populate('city', { _id: 1, name: 1, active: 1 })
        .then(data => {
            res.json({ data: data });
        }).catch(error => {
            res.status(500).json({ error: error });
        });
    }).delete((req, res) => {
        var id = req.params._id;
        model.user.remove({ _id: id})
        .then(data => {
            res.json({ data: data });
        }).catch(error => {
            res.status(500).json({ error: error });
        });
    }).put((req, res) => {
        var id = req.params._id;
        var user = req.body;
        model.user.findOneAndUpdate({ _id: id }, user)
        .then(data => {
            res.json({ _id: data._id });
        }).catch(error => {
            res.status(500).json({ error: error });
        });
    });

userRouter.route('/api/users')
    .get((req, res) => {
        model.user.findById(id, { _id: 1, name: 1, active: 1 })
        .populate('city', { _id: 1, name: 1, active: 1 })
        .then(data => {
            res.json({ data: data });
        }).catch(error => {
            res.status(500).json({ error: error });
        });
    }).post((req, res) => {
        let user = req.body;
        let userModel = new model.user({
            name: user.name,
            city: user.city,
            active: user.active
        });
        userModel.save()
        .then(data => {
            res.json({ _id: data._id });
        }).catch(error => {
            res.status(500).json({ error: error });
        });
    });

export default userRouter;