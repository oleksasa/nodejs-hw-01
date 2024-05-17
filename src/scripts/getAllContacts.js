import { PATH_DB } from '../constants/contacts.js';
import { promises as fs } from 'fs';

export const getAllContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    return data;
  } catch (err) {
    console.error(err);
  }
};

console.log(await getAllContacts());
