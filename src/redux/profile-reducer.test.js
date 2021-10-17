import profileReducer, {
  addPostActionCreater,
  removePostActionCreater,
} from './profile-reducer';

let initialState = {
  posts: [
    { id: 1, message: 'Espana es pais muy bonita', likesCount: 12 },
    {
      id: 2,
      message: 'Barcelona es la capital de Cataluna',
      likesCount: 13,
    },
  ],
};

test('Length of post should be incremented', () => {
  let newState = profileReducer(
    initialState,
    addPostActionCreater('Test Message')
  );
  expect(newState.posts.length).toBe(3);
});

test('Message of new Post should be correct', () => {
  let newState = profileReducer(
    initialState,
    addPostActionCreater('Test Message')
  );
  expect(newState.posts[2].message).toBe('Test Message');
});

test('Remove post with correct id', () => {
  let newState = profileReducer(initialState, removePostActionCreater(1));
  expect(newState.posts.length).toBe(1);
});

test('Remove post with incorrect id', () => {
  let newState = profileReducer(initialState, removePostActionCreater(999));
  expect(newState.posts.length).toBe(2);
});
