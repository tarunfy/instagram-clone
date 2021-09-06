import React from "react";
import Skeleton from "react-loading-skeleton";
import usePhotos from "../hooks/use-photos";

function Timeline() {
  const { photos } = usePhotos();

  return (
    <div className="container col-span-2">
      {!photos ? (
        <>
          {[...new Array(4)].map((_, index) => {
            <Skeleton key={index} count={1} height={400} width={320} />;
          })}
        </>
      ) : photos?.length > 0 ? (
        photos.map((photo) => {
          return <p key={photo.docId}>{photo.imageSrc}</p>;
        })
      ) : (
        <p className="text-center text-2xl">Follow someone to see photos</p>
      )}
    </div>
  );
}

export default Timeline;
