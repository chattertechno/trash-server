'use strict';

const axios = require('axios');
const stipre = require('stripe')('sk_test_51Gr7ocIeEeOYEB0wUdkA8XXDCNYxVpreQLlHR4zAVEAbqJyK2wDrhHAerh4XLv30FXNeLHzOk2RNKE6eWWRBefwq00W5o1Re6N');
/**
 * Lifecycle callbacks for the `User` model.
 */

module.exports = {
  // Before saving a value.
  // Fired before an `insert` or `update` query.
  // beforeSave: async (model) => {},

  // After saving a value.
  // Fired after an `insert` or `update` query.
  // afterSave: async (model, result) => {},

  // Before fetching all values.
  // Fired before a `fetchAll` operation.
  // beforeFetchAll: async (model) => {},

  // After fetching all values.
  // Fired after a `fetchAll` operation.
  // afterFetchAll: async (model, results) => {},

  // Fired before a `fetch` operation.
  // beforeFetch: async (model) => {},

  // After fetching a value.
  // Fired after a `fetch` operation.
  // afterFetch: async (model, result) => {},

  // Before creating a value.
  // Fired before `insert` query.
  beforeCreate: async (model) => {
    const cart = await axios.post('http://api.reneekrom.site/carts');
    const customer = stripe.customers.create({
      email: model.get('email')
    })
    model.set('cart_id', cart.data.id);
    model.set('customer_id', customer.id);
  },

  // After creating a value.
  // Fired after `insert` query.
  // afterCreate: async (model, result) => {},

  // Before updating a value.
  // Fired before an `update` query.
  // beforeUpdate: async (model) => {},

  // After updating a value.
  // Fired after an `update` query.
  // afterUpdate: async (model, result) => {},

  // Before destroying a value.
  // Fired before a `delete` query.
  // beforeDestroy: async (model) => {},

  // After destroying a value.
  // Fired after a `delete` query.
  // afterDestroy: async (model, result) => {}
};
