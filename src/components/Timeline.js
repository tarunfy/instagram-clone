import React from "react";
import Skeleton from "react-loading-skeleton";
import usePhotos from "../hooks/use-photos";
import Post from "./post/index";

function Timeline() {
  const { photos } = usePhotos();

  return (
    <div className="container col-span-2">
      {!photos ? (
        <div>
          <Skeleton className="mb-5" count={4} height={500} width={640} />
        </div>
      ) : photos?.length > 0 ? (
        photos.map((photo) => {
          return <Post key={photo.docId} photo={photo} />;
        })
      ) : (
        <p className="text-center text-2xl">Follow someone to see photos</p>
      )}
    </div>
  );
}

export default Timeline;
