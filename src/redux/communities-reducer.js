const FOLLOW_COMMUNITY = "FOLLOW_COMMUNITY";
const UNFOLLOW_COMMUNITY = "UNFOLLOW_COMMUNITY";
const SET_COMMUNITIES = "SET_COMMUNITIES";

let initialState = {
  communities: []
};

const CommunitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW_COMMUNITY:
      return {
        ...state,
        communities: state.communities.map(c => {
          if (c.id === action.communityId) {
            return { ...c, followed: true };
          }
          return c;
        })
      };

    case UNFOLLOW_COMMUNITY:
      return {
        ...state,
        communities: state.communities.map(c => {
          if (c.id === action.communityId) {
            return { ...c, followed: false };
          }
          return c;
        })
      };

    case SET_COMMUNITIES: {
      return {
        ...state,
        communities: [...state.communities, ...action.communities]
      };
    }

    default:
      return state;
  }
};

export const followCommunityAC = communityId => ({
  type: FOLLOW_COMMUNITY,
  communityId
});
export const unfollowCommunityAC = communityId => ({
  type: UNFOLLOW_COMMUNITY,
  communityId
});
export const setCommunitiesAC = communities => ({
  type: SET_COMMUNITIES,
  communities
});

export default CommunitiesReducer;
