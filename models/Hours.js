module.exports = (model, Schema) => {
    const Hours = new Schema({
      month: String,
      HireDate: String,
      BudgetedOTTT: String,
      Type: String,
      Department: String,
      EmployeeID: String,
      Name: String,
      OTTT: String,
      Regular: String,
      Overtime: String,
      Doubletime: String,
      Sick: String,
      Vacation: String,
      Holiday: String,
      Lunch: String,
      Bereavement: String,
      NoWork: String
    }, { timestamps: { createdAt: 'birthday', updatedAt: 'pcChange' } })

    return model('Hours', Hours)
  }