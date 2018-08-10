const data = require('../data/berlin.json');
const read = require('./read');

// export handler function
module.exports = async ctx => {
  ctx.assert(ctx.method, 'GET', 'This API currently only supports GET-Requests');

  // query.by defines what to search for
  switch (ctx.query.by) {
    case 'id':
      // minimal example: here we just get one entry by id
      return ctx.body = data.find( row => row.id = ctx.query.id );
    case 'boundingbox':
      // here we look for entries within the bounding box defined by
      // minimum latitude: latMin
      // maximum latitude: latMax
      // minimum longitude: lngMin
      // maximum longitude: lngMax
      return ctx.body = data.filter( row => {
        return row.lat > ctx.query.latMin &&
          row.lat < ctx.query.latMax &&
          row.lng > ctx.query.lngMin &&
          row.lng < ctx.query.lngMax;
      } );
    default:
      try {
        return ctx.body = await read('html/index.html');
      } catch (e) {
        ctx.throw(404, 'Page not found');
      }
  }
}
