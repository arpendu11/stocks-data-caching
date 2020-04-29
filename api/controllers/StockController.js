/**
 * StockController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const util = require('util');

module.exports = {
  /**
   * `StockController.findAll()`
   */
  findAll: async function (req, res) {
    Stock.find()
      .then(async stock => {
        if(!stock || stock.length === 0) {
          throw new Error('No Stock found');
        }
        await sails.getDatastore().leaseConnection(async (db)=>{
          await (util.promisify(db.setex).bind(db))('all', 60, JSON.stringify(stock));
        });
        return res.ok(stock);
      })
      .catch(err => res.notFound(err));
  }

};

