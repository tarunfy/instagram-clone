import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const User = ({ username, fullName }) =>
  !username || !fullName ? (
    <Skeleton count={1} height={61} />
  ) : (
    <Link to={`p/${username}`}>
      <div className="grid  grid-cols-4 gap-4 items-center mb-6">
        <div className="flex item-center justify-between col-span-1">
          <img
            className="rounded-full w-16 flex mr-3"
            src={`/images/avatars/${username}.jpg`}
            alt=""
          />
        </div>
        <div className="col-span-3">
          <p className="font-bold text-sm">{username}</p>
          <p className="text-sm">{fullName}</p>
        </div>
      </div>
    </Link>
  );

User.propTypes = {
  username: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
};

export default User;
