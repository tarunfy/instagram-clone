import { useRef } from "react";
import PropTypes from "prop-types";
import Header from "./Header";
export default function Post({ photo }) {
  return (
    //components
    // -> header, image, actions(ability to like and comment), footer, icon, comments
    <div className="rounded col-span-4 bg-white border border-gray-primary mb-16">
      <Header username={photo.username} />
    </div>
  );
}

Post.propTypes = {
  photo: PropTypes.shape({
    username: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    docId: PropTypes.string.isRequired,
    userLikedPhoto: PropTypes.bool.isRequired,
    likes: PropTypes.array.isRequired,
    comments: PropTypes.array.isRequired,
    dateCreated: PropTypes.number.isRequired,
  }),
};
