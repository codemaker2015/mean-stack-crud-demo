var mongoose = require('mongoose'),
  Employee = mongoose.model('Employee');
exports.listAllEmployee = function(req, res) {
  Employee.find({}, function(err, Employee) {
    if (err)
      res.send(err);
    res.json(Employee);
  });
};
exports.createEmployee = function(req, res) {
  var emp = new Employee(req.body);
  emp.save(function(err, result) {
    if (err)
      res.send(err);
    res.json(result);
  });
};
exports.readEmployee = function(req, res) {
  Employee.findById(req.params.employeeId, function(err, result) {
    if (err)
      res.send(err);
    res.json(result);
  });
};
exports.updateEmployee = function(req, res) {
  Employee.findOneAndUpdate({_id: req.params.employeeId}, req.body, {new: true}, function(err, result) {
    if (err)
      res.send(err);
    res.json(result);
  });
};
exports.deleteEmployee = function(req, res) {
  Employee.remove({
    _id: req.params.employeeId
  }, function(err, result) {
    if (err)
      res.send(err);
    res.json({ message: 'Employee successfully deleted' });
  });
};