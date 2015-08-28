import FalcorRouter from 'falcor-router';
import jsonGraph from 'falcor-json-graph';

let $ref = jsonGraph.ref;
let $error = jsonGraph.error;

let ListRouterBase = FalcorRouter.createClass([
{
  route: 'itemsById[{integers:itemIds}]["name", "price"]',
  get (pathSet) {
    console.log('HERE');
    let app = this.app;
    return app.models.item.find({
      id: pathSet.itemIds
    }).then((items) => {
      return {path: pathSet, value: items};
    });
  }
}, {
  route: 'hello',
  get () {
    return {path: ['hello'], value: 'World'};
  }
}
]);

let ShoppingListRouter = function (app) {
  ListRouterBase.call(this);
  this.app = app;
};

export default function (app) {
  return new ShoppingListRouter(app);
};
