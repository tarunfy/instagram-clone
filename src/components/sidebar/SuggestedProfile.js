import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  updateLoggedInUserFollowing,
  updateFollowedUserFollowers,
} from "../../services/firebase";
export default function SuggestedProfile({
  userId,
  username,
  profileId,
  profileDocId,
  loggedInUserdDocId,
}) {
  const [followed, setFollowed] = useState(false);

  async function handleFollowUser() {
    setFollowed(true);
    //firebase: create 2 service which will: or functions.
    //update the following array of the logged in user
    await updateLoggedInUserFollowing(loggedInUserdDocId, profileId, false);
    //update the followers array of the user who has been followed
    await updateFollowedUserFollowers(profileDocId, userId, false);
  }

  return !followed ? (
    <div className="flex items-center align-middle justify-between">
      <div className="flex items-center justify-between">
        <img
          className="rounded-full w-8 flex mr-3"
          src={`/images/avatars/${username}.jpg`}
          alt="profile-photo"
        />
        <Link to={`p/${username}`}>
          <p className="font-bold text-sm">{username}</p>
        </Link>
      </div>
      <button
        type="button"
        className="text-sm font-bold text-blue-medium"
        onClick={handleFollowUser}
      >
        follow
      </button>
    </div>
  ) : null;
}

SuggestedProfile.propTypes = {
  username: PropTypes.string.isRequired,
  profileId: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  profileDocId: PropTypes.string.isRequired,
  loggedInUserdDocId: PropTypes.string.isRequired,
};
