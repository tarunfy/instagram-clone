import PropTypes from "prop-types";

export default function Footer({ caption, username }) {
  return (
    <div className="pt-2 pb-0 p-4">
      <span className="mr-1 font-bold">{username}</span>
      <span>{caption}</span>
    </div>
  );
}

Footer.propTypes = {
  caption: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};
