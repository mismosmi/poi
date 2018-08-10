const data = require('../data/berlin.json');

// export handler function
module.exports = async ctx => {
  ctx.assert(ctx.method, 'GET', 'This API currently only supports GET-Requests');
  switch (ctx.query.by) {
    case 'id':
      return ctx.body = data.find( row => row.id = ctx.query.id );
    case 'boundingbox':
      return ctx.body = data.filter( row => {
        return row.lat > ctx.query.latMin &&
          row.lat < ctx.query.latMax &&
          row.lng > ctx.query.lngMin &&
          row.lng < ctx.query.lngMax;
      } );
  }
}
