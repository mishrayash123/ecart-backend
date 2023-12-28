const mongoose = require('mongoose');

// User Config
const UserSchema = new mongoose.Schema({
  productid: { type: String, required: true },
  userid: { type: String, required: true },
});

 const UserModel = mongoose.model('Cart', UserSchema);

// User Actions
 const getcart = () => UserModel.find();
 const getCartById = (id: string) => UserModel.findById(id);
 const getbyproductid = (productid: string) => UserModel.findOne({ 'productid': productid });
 const createCart = (values: Record<string, any>) => new UserModel(values).save().then((user:any) => user.toObject());
 const deleteCartById = (id: string) => UserModel.findOneAndDelete({ _id: id });

module.exports={UserModel,getCartById,getbyproductid,getcart,createCart,deleteCartById}