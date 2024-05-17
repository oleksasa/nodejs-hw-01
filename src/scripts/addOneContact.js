import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { promises as fs } from 'fs';

export const addOneContact = async () => {
  try {
    const currentData = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(currentData);

    const newContact = createFakeContact();
    contacts.push(newContact);

    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf8');

    console.log(`Додано один новий контакт.`);
  } catch (err) {
    console.error('Помилка додавання контакту:', err);
  }
};

await addOneContact();
