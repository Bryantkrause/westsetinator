module.exports = (model, Schema) => {
    const Expense = new Schema({
        Month: String,
        TextFormula: String,
        FinalFunction: String,
        Code: String,
        Number: String,
        Paytype: String,
        EmployeeName: String,
        Fullerton: String,
        Downey: String,
        Cerritos: String,
        Rancho: String,
        TTW: String,
        Comment: String,
        GrossPayNoBonus: String,
        eeTrueUp: String
    }, { timestamps: { createdAt: 'birthday', updatedAt: 'pcChange' } })

    return model('Expense', Expense)
  }