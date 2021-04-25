import { rerenderEntireTree } from '../render';

const dialogs = [
  { id: 1, name: 'Nastya' },
  { id: 2, name: 'Vasya' },
  { id: 3, name: 'Sveta' },
];
const messages = [
  { id: 1, message: 'Hello, how are you ?' },
  { id: 2, message: 'Hasta la vista' },
];

const posts = [
  { id: 1, message: 'Espana es pais muy bonita', likesCount: 12 },
  { id: 2, message: 'Barcelona es la capital de Cataluna', likesCount: 13 },
];

let addPost = (message) => {
  let newObj = {
    id: 5,
    message,
    likesCount: 5,
  };

  state.profilePage.posts.push(newObj);
  rerenderEntireTree(state);
};

const state = {
  dialogPage: {
    dialogs,
    messages,
  },
  profilePage: {
    posts,
  },
  addPost,
};

export default state;
