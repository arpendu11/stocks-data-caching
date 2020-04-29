/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */
const util = require('util');

module.exports.routes = {
  'GET /cached/stock/all': [
    async function (req,res,next) {
      await sails.getDatastore().leaseConnection(async (db)=>{
        var data = await (util.promisify(db.get).bind(db))('all');
        if (data !== null) {
          res.send(JSON.parse(data));
        } else {
          console.log('No data in cache, forwarding to actual API');
          return next();
        }
      });
    },
    'StockController.findAll']
};
