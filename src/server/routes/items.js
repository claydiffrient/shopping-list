import {Router} from 'express';

let itemRouter = Router();

export default function (app) {

  /**
   * GET /items
   * Returns an array of all items in the database.
   */
  itemRouter.get('/', (req, res) => {
    app.models.item.find({}).exec((err, models) => {
      if (err) return res.status(500).json({err});
      res.json(models);
    });
  });

  /**
   * GET /items/:id
   * Returns an item based on the id
   */
  itemRouter.get('/:id', (req, res) => {
    app.models.item.findOne({id: req.params.id}).exec((err, model) => {
      if (err) return res.status(500).json({err});
      res.json(model);
    });
  });

  /**
   * POST /items
   * Adds a new item to the database. The item object looks
   * like this:
   * ```
   *   {
   *     name: 'Item Name', (required)
   *     price: '2.00'
   *   }
   * ```
   */
  itemRouter.post('/', (req, res) => {
    app.models.item.create(req.body, (err, model) => {
      if (err) return res.status(500).json({err});
      res.json(model);
    });
  });

  /**
   * PUT /items/:id
   * Updates an item in the database on the id.
   */
  itemRouter.put('/:id', (req, res) => {
    app.models.item.update({id: req.params.id}, req.body, (err, model) => {
      if (err) return res.status(500).json({err});
      res.json(model);
    });
  });

  /**
   * DELETE /items/:id
   * Deletes an item based on the given id.
   * Returns `{ ok: 'success'}` on success.
   */
  itemRouter.delete('/:id', (req, res) => {
    app.models.item.destroy({id: req.params.id}, (err, res) => {
      if (err) return res.status(500).json({err});
      res.status(200).json({'ok': 'success'});
    });
  });

  return itemRouter;
}

