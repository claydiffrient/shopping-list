import {Router} from 'express';
import debug from 'debug';

let itemRouter = Router();

export default function (app) {

  /**
   * GET /items
   */
  itemRouter.get('/', (req, res) => {
    app.models.item.find({}).exec((err, models) => {
      if (err) return res.status(500).json({err});
      res.json(models);
    });
  });

  /**
   * POST /items
   */
  itemRouter.post('/', (req, res) => {
    app.models.item.create(req.body, (err, model) => {
      if (err) return res.status(500).json({err});
      res.json(model);
    });
  });

  return itemRouter;
}

