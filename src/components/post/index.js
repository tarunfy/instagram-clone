import { useRef } from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Image from "./Image";
import Actions from "./Actions";
import Footer from "./Footer";
import Comments from "./Comments";

export default function Post({ photo }) {
  const commentInput = useRef(null);
  const handleFocus = () => {
    return commentInput.current.focus();
  };
  return (
    //components
    // -> header, image, actions(ability to like and comment), footer, icon, comments
    <div className="rounded col-span-4 bg-white border border-gray-primary mb-12 ">
      <Header username={photo.username} />
      <Image src={photo.imageSrc} caption={photo.caption} />
      <Actions
        docId={photo.docId}
        totalLikes={photo.likes.length}
        likedPhoto={photo.userLikedPhoto}
        handleFocus={handleFocus}
      />
      <Footer caption={photo.caption} username={photo.username} />
      <Comments
        docId={photo.docId}
        comments={photo.comments}
        posted={photo.dateCreated}
        commentInput={commentInput}
      />
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
