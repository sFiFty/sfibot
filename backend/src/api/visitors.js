const { getAll } = require('../firestoreApi/visitors');

const ROUTE = '/visitors'

module.exports = function(app) {
 
  app.get(ROUTE, async (req, res) => {
    const visitors = await getAll();
    res.send(visitors);
  });
}




