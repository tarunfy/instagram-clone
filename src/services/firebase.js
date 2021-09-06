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
