// Client

import falcor from 'falcor';
import HttpDataSource from 'falcor-http-datasource';

let myFalcor = falcor();

let model = new falcor.Model({
  source: new HttpDataSource('/model.json')
});

model
  .get([1, 2])
  .then((response) => {
    document.write(response);
  });
