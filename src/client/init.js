// Client

import falcor from 'falcor';
import HttpDataSource from 'falcor-http-datasource';

let myFalcor = falcor();

let model = new falcor.Model({
  source: new HttpDataSource('/model.json')
});

// model
//   .get("hello")
//   .then((response) => {
//     document.write(response);
//   });


// Not working at the moment :(
model
  .get("itemsById[1, 2]") // Hard coded for now... :(
  .then((response) => {
    document.write(response);
  });
