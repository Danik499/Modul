import { Router } from 'express';
import pictureControler from './controler.js';

const pictureRouter = new Router();

pictureRouter.get('/', pictureControler.get);
pictureRouter.get("/sorted", pictureControler.get_sorted);
pictureRouter.post('/', pictureControler.post);
pictureRouter.get('/get_by_name', pictureControler.get_by_name);
pictureRouter.delete('/', pictureControler.delete_id);

export default pictureRouter;