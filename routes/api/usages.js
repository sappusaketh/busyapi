const patient = require('../../model/patient');

async function addToDB(data) {
  const pushdata = [...data];
  await patient.insertMany(pushdata);
}
let count = 0;
module.exports = function(app) {
  app.post('/api/usages', function(req, res) {
    // Store the supplied usage data
    app.usages.push(req.body);

    var usageId = app.usages.length;
    console.log('Stored usage count: ' + usageId);
    if (app.usages.length >= 1000) {
      addToDB(app.usages);
      app.usages = [];
    }
    res.status(201).json({ id: usageId });
  });
};
