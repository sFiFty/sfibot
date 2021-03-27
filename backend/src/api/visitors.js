const { getAll } = require('../firestoreApi/visitors');

module.exports = function(app) {
 
  app.get('/visitors', async (req, res) => {
    const visitors = await getAll();
    res.send(visitors);
  });

}




