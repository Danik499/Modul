import {Schema, model} from "mongoose";

const pictureSchema = new Schema({
    inventory_number: Number,
    picture_name: String,
    author: String,
    school: String
})

const picture = model("Picture", pictureSchema);

export default picture;