import { PATH_DB } from '../constants/contacts.js';
import { promises as fs } from 'fs';

export const thanos = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    let contacts = JSON.parse(data);

    contacts = contacts.filter((contact) => {
      const chance = Math.random();
      return chance < 0.5;
    });

    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf8');

    console.log('Функція Thanos успішно виконана.');
  } catch (err) {
    console.error('Помилка виконання функції Thanos:', err);
  }
};

await thanos();
