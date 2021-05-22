import { usersAPI } from '../api/api';

export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';
export const INIT_USERS = 'INIT_USERS';
export const INIT_TOTAL_COUNT_USERS = 'INIT_TOTAL_COUNT_USERS';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const SET_IS_FETCHING = 'SET_IS_FETCHING';
export const TOGGLE_FOLLOWING = 'TOGGLE_FOLLOWING';

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

export const toggleFollowing = (isFetching, userId) => ({
  type: TOGGLE_FOLLOWING,
  isFetching,
  userId,
});

const initialState = {
  users: [],
  currentPage: 1,
  pageSize: 100,
  totalCountUsers: 0,
  isFetching: false,
  followingInProgress: [],
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
    case TOGGLE_FOLLOWING:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    default:
      return state;
  }
};

export default reducer;

export const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(setIsFetching(true));
    dispatch(setCurrentPage(currentPage)); //added
    usersAPI.getUsers(currentPage, pageSize).then((data) => {
      dispatch(initUsers(data.items));
      dispatch(initTotalCountUsers(data.totalCount));
      dispatch(setIsFetching(false));
    });
  };
};

export const unfollowThunk = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowing(true, userId));
    usersAPI.unfollow(userId).then((data) => {
      if (data.resultCode === 0) {
        dispatch(unfollow(userId));
      }
      dispatch(toggleFollowing(false, userId));
    });
  };
};

export const followThunk = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowing(true, userId));
    usersAPI.follow(userId).then((data) => {
      if (data.resultCode === 0) {
        dispatch(follow(userId));
      }
      dispatch(toggleFollowing(false, userId));
    });
  };
};
