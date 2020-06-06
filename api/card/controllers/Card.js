'use strict';
const stipre = require('stripe')
('sk_test_51Gr7ocIeEeOYEB0wUdkA8XXDCNYxVpreQLlHR4zAVEAbqJyK2wDrhHAerh4XLv30FXNeLHzOk2RNKE6eWWRBefwq00W5o1Re6N');
/**
 * A set of functions called "actions" for `Card`
 */

module.exports = {
  index: async ctx => {
    const customerId = ctx.request.queryString;
    const customerData = await stripe.customers.retrieve(customerId);
    const cardData = customerData.sources.data;
    ctx.send(cardData);
  }
};
