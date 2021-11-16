import { usersAPI } from '../api/api';
import { updateObjectInArray } from '../utils/object-helpers';

export const FOLLOW = 'samuray/users/FOLLOW';
export const UNFOLLOW = 'samuray/users/UNFOLLOW';
export const INIT_USERS = 'samuray/users/INIT_USERS';
export const INIT_TOTAL_COUNT_USERS = 'samuray/users/INIT_TOTAL_COUNT_USERS';
export const SET_CURRENT_PAGE = 'samuray/users/SET_CURRENT_PAGE';
export const SET_IS_FETCHING = 'samuray/users/SET_IS_FETCHING';
export const TOGGLE_FOLLOWING = 'samuray/users/TOGGLE_FOLLOWING';

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
        users: updateObjectInArray(state.users, action.id, 'id', {
          followed: true,
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.id, 'id', {
          followed: false,
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
  return async (dispatch) => {
    dispatch(setIsFetching(true));
    dispatch(setCurrentPage(currentPage)); //added
    let data = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(initUsers(data.items));
    dispatch(initTotalCountUsers(data.totalCount));
    dispatch(setIsFetching(false));
  };
};

const followUnfollowFlow = async (
  dispatch,
  userId,
  apiMethod,
  actionMethod
) => {
  dispatch(toggleFollowing(true, userId));
  let data = await apiMethod(userId);
  if (data.resultCode === 0) {
    dispatch(actionMethod(userId));
  }
  dispatch(toggleFollowing(false, userId));
};

export const unfollowThunk = (userId) => {
  return async (dispatch) => {
    followUnfollowFlow(
      dispatch,
      userId,
      usersAPI.unfollow.bind(usersAPI),
      unfollow
    );
  };
};

export const followThunk = (userId) => {
  return async (dispatch) => {
    followUnfollowFlow(
      dispatch,
      userId,
      usersAPI.follow.bind(usersAPI),
      follow
    );
  };
};
