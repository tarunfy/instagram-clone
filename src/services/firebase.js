import { firebase, FieldValue } from "../lib/firebase";

//here we are getting the user back from the auth firebase so that it exists, then we can check if the user exists and if he/she exists then we show its profile and all good stuff;
export async function doesUsernameExists(username) {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("username", "==", username)
    .get();

  return result.docs.map((user) => user.data().length > 0);
}
export async function getUserByUsername(username) {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("username", "==", username)
    .get();

  return result.docs.map((item) => ({
    ...item.data(),
    docId: item.id,
  }));
}

//getting back the user from firebase where userId is same as the given userId, or basically with the help of the userId of the authenticated user we are getting back its data from database;
export async function getUserByUserId(userId) {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("userId", "==", userId)
    .get();

  const user = result.docs.map((item) => {
    return {
      ...item.data(),
      docId: item.id,
    };
  });

  return user;
}

//getting the suggested profiles back from the firestore database
export async function getSuggestedProfiles(userId, following) {
  const suggestions = await firebase
    .firestore()
    .collection("users")
    .limit(10)
    .get();
  console.log(
    suggestions.docs
      .map((user) => ({
        ...user.data(),
        docId: user.id,
      }))
      .filter(
        (profile) =>
          profile.userId !== userId && !following.includes(profile.userId)
      )
  );

  return suggestions.docs
    .map((user) => ({
      ...user.data(),
      docId: user.id,
    }))
    .filter(
      (profile) =>
        profile.userId !== userId && !following.includes(profile.userId)
    );
}

export async function updateLoggedInUserFollowing(
  loggedInUserdDocId,
  profileId,
  isFollowingProfile
) {
  return firebase
    .firestore()
    .collection("users")
    .doc(loggedInUserdDocId)
    .update({
      following: isFollowingProfile
        ? FieldValue.arrayRemove(profileId)
        : FieldValue.arrayUnion(profileId),
    });
}

export async function updateFollowedUserFollowers(
  profileDocId,
  loggedInUserdDocId,
  isFollowingProfile
) {
  return firebase
    .firestore()
    .collection("users")
    .doc(profileDocId)
    .update({
      followers: isFollowingProfile
        ? FieldValue.arrayRemove(loggedInUserdDocId)
        : FieldValue.arrayUnion(loggedInUserdDocId),
    });
}

export async function getPhotos(userId, following) {
  const result = await firebase
    .firestore()
    .collection("photos")
    .where("userId", "in", following)
    .get();

  const userFollowedPhotos = result.docs.map((photo) => {
    return {
      ...photo.data(),
      docId: photo.id,
    };
  });

  const photosWithUserDetails = await Promise.all(
    userFollowedPhotos.map(async (photo) => {
      let userLikedPhoto = false;
      if (photo.likes.includes(userId)) {
        userLikedPhoto = true;
      }
      const user = await getUserByUserId(photo.userId);
      const { username } = user[0];
      return { username, ...photo, userLikedPhoto };
    })
  );

  return photosWithUserDetails;
}

export async function getUserPhotosByUsername(username) {
  const [user] = await getUserByUsername(username);

  const results = await firebase
    .firestore()
    .collection("photos")
    .where("userId", "==", user.userId)
    .get();

  return results.docs.map((item) => ({
    ...item.data(),
    docId: item.id,
  }));
}
