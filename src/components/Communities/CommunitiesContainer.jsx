import React from "react";
import { connect } from "react-redux";
import Communities from "./Communities";
import {
  followCommunityAC,
  unfollowCommunityAC,
  setCommunitiesAC
} from "../../redux/communities-reducer";

let mapStateToProps = state => {
  return {
    communities: state.communitiesPage.communities
  };
};

let mapDispatchToProps = dispatch => {
  return {
    follow: communityId => {
      dispatch(followCommunityAC(communityId));
    },
    unfollow: communityId => {
      dispatch(unfollowCommunityAC(communityId));
    },
    setCommunities: communities => {
      dispatch(setCommunitiesAC(communities));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Communities);
