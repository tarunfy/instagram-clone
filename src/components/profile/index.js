import { useReducer, useEffect } from "react";
import PropTypes from "prop-types";
import ProfileHeader from "./ProfileHeader";
import Photos from "./Photos";
import React from "react";
import {
  getUserByUsername,
  getUserPhotosByUsername,
} from "../../services/firebase";

export default function Profile({ user }) {
  const reducer = (state, newState) => ({ ...state, ...newState });
  const inititalState = {
    profile: {},
    photosCollection: [],
    followerCount: 0,
  };
  const [{ profile, photosCollection, followerCount }, dispatch] = useReducer(
    reducer,
    inititalState
  );

  useEffect(() => {
    async function getProfileInfoAndPhotos() {
      const photos = await getUserPhotosByUsername(user.username);
      dispatch({
        profile: user,
        photosCollection: photos,
        followerCount: user.followers.length,
      });
    }
    getProfileInfoAndPhotos();
  }, [user.username]);

  return (
    <>
      <ProfileHeader
        photosCount={photosCollection ? photosCollection.length : 0}
        profile={profile}
        followerCount={followerCount}
        setFollowerCount={dispatch}
      />
      <Photos photos={photosCollection} />
    </>
  );
}

Profile.propType = {
  user: PropTypes.shape({
    dateCreated: PropTypes.number.isRequired,
    emailAddress: PropTypes.string.isRequired,
    following: PropTypes.array.isRequired,
    followers: PropTypes.array.isRequired,
    fullName: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired,
};
