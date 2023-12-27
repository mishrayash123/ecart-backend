import express from 'express';

import { deleteUserById, getUsers, getUserById } from '../db/users';
import{UserModel} from "../db/users"

export const getAllUsers = async (req: express.Request, res: express.Response) => {
  try {
    const users = await getUsers();

    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const deleteUser = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;

    const deletedUser = await deleteUserById(id);

    return res.json(deletedUser);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

export const updateUser = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    const  data  = req.body;
    const updatedItem = await UserModel.findByIdAndUpdate(id, data, {
      new: true,
    });

    if (!updatedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }

    return res.json(updatedItem);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}