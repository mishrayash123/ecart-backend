const mongoose = require('mongoose');

// User Config
const UserSchema = new mongoose.Schema({
  productid: { type: String, required: true },
  userid: { type: String, required: true },
});

 export const UserModel = mongoose.model('Cart', UserSchema);

// User Actions
 export const getcart = () => UserModel.find();
 export const getCartById = (id: string) => UserModel.findById(id);
 export const getbyproductid = (productid: string) => UserModel.findOne({ 'productid': productid });
 export const createCart = (values: Record<string, any>) => new UserModel(values).save().then((user:any) => user.toObject());
 export const deleteCartById = (id: string) => UserModel.findOneAndDelete({ _id: id });
