import FalcorRouter from 'falcor-router';
import jsonGraph from 'falcor-json-graph';

let $ref = jsonGraph.ref;
let $error = jsonGraph.error;

let ListRouterBase = FalcorRouter.createClass([
{
  route: 'itemsById[{integers:itemIds}]',
  get (pathSet) {
    let app = this.app;

    return app.models.item.find({
      id: pathSet.itemIds
    }).then((items) => {
      return items;
    });
  }

}
]);

let ShoppingListRouter = (app) => {
  ListRouterBase.call(this);
  this.app = app;
};

export default function (app) {
  return new ShoppingListRouter(app);
};
