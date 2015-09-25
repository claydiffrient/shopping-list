/*eslint-env mocha */
import { expect } from 'chai';
import { ADD_ITEM, addItem} from '../../client/actions';

describe('Item Actions', () => {
  describe('addItem', () => {
    it('creates the ADD_ITEM action properly', () => {
      let fakeItem = {
        name: 'Test Item',
        price: '2.00'
      };

      let result = addItem(fakeItem);

      let expected = {
        type: ADD_ITEM,
        payload: fakeItem
      };

      expect(result).to.deep.equal(expected);
    });
  });
});
