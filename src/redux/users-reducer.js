export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';
export const INIT_USERS = 'INIT_USERS';
export const followAC = (id) => ({ type: FOLLOW, id });
export const unfollowAC = (id) => ({ type: UNFOLLOW, id });
export const initUsersAC = (users) => ({ type: INIT_USERS, users });

const initialState = { users: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_USERS:
      return { ...state, users: [...action.users] };
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.id) {
            return { ...u, followed: true };
          } else {
            return u;
          }
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.id) {
            return { ...u, followed: false };
          } else {
            return u;
          }
        }),
      };
    default:
      return state;
  }
};

export default reducer;
