import { PATH_DB } from '../constants/contacts.js';
import { promises as fs } from 'fs';

export const removeAllContacts = async () => {
  try {
    const contacts = [];

    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf8');

    console.log('Всі контакти були успішно видалені.');
  } catch (err) {
    console.error('Помилка видалення контактів:', err);
  }
};

await removeAllContacts();
