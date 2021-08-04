module.exports = function(app) {
    var employee = require('./../controllers/employee');
    app.route('/')
      .get(employee.listAllEmployee)
    app.route('/employee')
      .get(employee.listAllEmployee)
      .post(employee.createEmployee);
    app.route('/employee/:employeeId')
      .get(employee.readEmployee)
      .put(employee.updateEmployee)
      .delete(employee.deleteEmployee);
};