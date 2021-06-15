module.exports = (model, Schema) => {
    const Revenue = new Schema({
      NewAccount: String,
      CustID: String,
      Name: String,
      Total: String,
      Clerical: String,
      Month: String,
      Location: String,
      RedpID: String,
      Rep: String,
      Secondary: String,
      Inbound: String,
      Outbound: String,
      TotalOrders: String,
      AveRPO: String,
    }, { timestamps: { createdAt: 'birthday', updatedAt: 'pcChange' } })

    return model('Revenue', Revenue)
  }
  
  