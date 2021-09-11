import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";

export default function ProfileHeader({
  photosCount,
  followerCount,
  profile,
  setFollowerCount,
}) {
  const [isFollowingProfile, setIsFollowingProfile] = useState(false);
  return null;
}

ProfileHeader.propTypes = {};
