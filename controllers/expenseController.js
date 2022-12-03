const { where } = require('sequelize');
const expense = require('../models/expenseModel')

module.exports.getExpense = (req,res)=>{
    expense.findAll()
    .then((result)=>{
        res.status(200).json(result);
    })
}

module.exports.addExpense = (req,res)=>{
    const {amount,description,category} = req.body;
    expense.create({
        amount,
        description,
        category
    })
    .then(res.sendStatus(200))
    .catch((err)=>{
        console.log(err);
    })
}

module.exports.deleteresExpense = (req,res)=>{
    let id = req.params.id;
    expense.destroy({where:{id:id}})
    .then(res.sendStatus(200))
    .catch(err=>{
        console.log(err);
    })
}