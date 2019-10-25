import { MongoClient, ObjectID } from 'mongodb';
import picture from "./model";
import mongoose from "mongoose";


const url = 'mongodb://localhost:27017';
const dbName = 'pictureDB';
mongoose.connect (url+'/'+dbName);

const pictureControler = {
    get: function (request, response) {
        picture.find()
        .then(pictures=>{
                response.send(pictures);
        })
        .catch(
            error=>{
                response.status(500).send(error);
            }
        );
    },
    
    get_sorted: function(req, res) {
        picture.find()
        .then(picture => {
            if (req.query.inventoryNumber)
                picture.sort((a, b) => a.inventory_number - b.inventory_number)
            else if (req.query.pictureName)
                picture.sort((a, b) => a.pictureName > b.pictureName ? 1 : -1);
            else if (req.query.author)
                picture.sort((a, b) => a.author > b.author ? 1 : -1);
            else if (req.query.school)
                picture.sort((a, b) => a.school > b.school ? 1 : -1);
            res.send(picture);
        })
        .catch(
            error=>{
                response.status(500).send(error);
            }
        );
    },

    get_by_name: function(req, res) {
        picture.find({"author": req.query.author})
        .then((pic) => {
            if (pic) 
                res.send(pic);
            else    
                res.status(404).send("sf");
        })
        .catch(
            error=>{
                response.status(500).send(error);
            }
        );
    },

    delete_id: function (request, response) {
        picture.findByIdAndDelete(request.query.id).
        then(pic=>{
            if (pic)
                response.send(pic);
            else
                response.status(404).send("Не знайдено");    
        }).catch(
            error=>{
                response.status(500).send(error);
            }
        )
    },

    post: function(request, response) {
        const newPicture = new picture(request.body);
        newPicture.save()
        .then(picture=>{
            response.send(picture);    
        }).catch(
            error=>{c 
                response.status(500).send(error);
            });
    }
}

export default pictureControler;