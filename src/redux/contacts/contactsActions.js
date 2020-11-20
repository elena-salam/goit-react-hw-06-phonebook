import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const addContact = createAction('contacts/add', (name, number) => ({
  payload: {
    contact: {
      id: uuidv4(),
      name,
      number,
    },
  },
}));
const getFromLS = createAction('contacts/getFromLS');
const removeContact = createAction('contacts/remove');
const filterContact = createAction('contacts/filter');

export default { addContact, getFromLS, removeContact, filterContact};

// my version:
// import { v4 as uuidv4 } from 'uuid';
// const addContact = (name, number) =>({
//     type: 'contact/add',
//     payload:{
//         contact:{
//             id: uuidv4(),
//             name,
//             number,
//         },
//     },
// });

// export default addContact;