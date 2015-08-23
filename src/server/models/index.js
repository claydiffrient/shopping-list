import memoryAdapter from 'sails-memory';
import Waterline from 'waterline';
import fs from 'fs';
import path from 'path';

let orm = new Waterline();

let config = {
  adapters: {
    'memory': memoryAdapter
  },
  connections: {
    default: {
      adapter: 'memory'
    }
  }
};

fs
  .readdirSync(__dirname)
  .filter((file) => {
    return (file.indexOf('.') !== 0) && (file !== 'index.js');
  })
  .forEach((file) => {
    var model = require(path.join(__dirname, file));
    orm.loadCollection(model);
  });

export default {waterline: orm, config: config};
