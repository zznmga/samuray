export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';
export const INIT_USERS = 'INIT_USERS';
export const INIT_TOTAL_COUNT_USERS = 'INIT_TOTAL_COUNT_USERS';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const SET_IS_FETCHING = 'SET_IS_FETCHING';

export const follow = (id) => ({ type: FOLLOW, id });
export const unfollow = (id) => ({ type: UNFOLLOW, id });
export const initUsers = (users) => ({ type: INIT_USERS, users });
export const initTotalCountUsers = (totalCountUsers) => ({
  type: INIT_TOTAL_COUNT_USERS,
  totalCountUsers,
});
export const setCurrentPage = (p) => ({
  type: SET_CURRENT_PAGE,
  currentPage: p,
});
export const setIsFetching = (isFetching) => ({
  type: SET_IS_FETCHING,
  isFetching,
});

const initialState = {
  users: [],
  currentPage: 1,
  pageSize: 100,
  totalCountUsers: 0,
  isFetching: false,
};

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
    case INIT_TOTAL_COUNT_USERS:
      return { ...state, totalCountUsers: action.totalCountUsers };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case SET_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    default:
      return state;
  }
};

export default reducer;
