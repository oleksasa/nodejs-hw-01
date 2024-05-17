import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { promises as fs } from 'fs';

const generateContacts = async (number) => {
  try {
    const currentData = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(currentData);

    for (let i = 0; i < number; i++) {
      const newContact = createFakeContact();
      contacts.push(newContact);
    }

    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf8');

    console.log(`Додано ${number} нових контактів.`);
  } catch (err) {
    console.error('Помилка додавання контактів:', err);
  }
};

await generateContacts(5);
