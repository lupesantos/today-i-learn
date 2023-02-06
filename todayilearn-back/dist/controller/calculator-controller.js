function convertCLTToPJ(req, res) {
    var salary = req.query.salary;
    var newSalary = Number(salary) + Number(salary) * 0.3;
    res.send({
        resultado: "seu sal\u00E1rio deve ser pelo menos: ".concat(newSalary)
    });
}
export { convertCLTToPJ };
