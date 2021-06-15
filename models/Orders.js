module.exports = (model, Schema) => {
    const Orders = new Schema({
     userid: String,
     accountid: String,
     doc_number: String,
     id: String,
     actual_trans_ts: String,
     month: String,
     type: String
    }, { timestamps: { createdAt: 'birthday', updatedAt: 'pcChange' } })

    return model('Orders', Orders)
  }