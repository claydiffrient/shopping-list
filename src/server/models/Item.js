import Waterline from 'waterline';

export default Waterline.Collection.extend({
  identity: 'item',
  connection: 'default',
  attributes: {
    name: {
      type: 'string',
      required: true
    },
    price: 'float'
  }
});
