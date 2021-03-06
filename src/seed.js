/* eslint-disable no-plusplus */
// NOTE: replace 'T2KqzlnkWwTF1jUMNktuKXgK8ov1' with your Firebase auth user id (can be taken from Firebase)
export function seedDatabase(firebase) {
  console.log(firebase);
  const users = [
    {
      userId: "T2KqzlnkWwTF1jUMNktuKXgK8ov1",
      username: "ohitztarun",
      fullName: "Tarun Sharma",
      emailAddress: "tarunsharma8920@gmail.com",
      following: ["2"],
      followers: ["2", "3", "4"],
      dateCreated: Date.now(),
    },
    {
      userId: "2",
      username: "raphael",
      fullName: "Raffaello Sanzio da Urbino",
      emailAddress: "raphael@sanzio.com",
      following: [],
      followers: ["T2KqzlnkWwTF1jUMNktuKXgK8ov1"],
      dateCreated: Date.now(),
    },
    {
      userId: "3",
      username: "dali",
      fullName: "Salvador Dalí",
      emailAddress: "salvador@dali.com",
      following: [],
      followers: ["T2KqzlnkWwTF1jUMNktuKXgK8ov1"],
      dateCreated: Date.now(),
    },
    {
      userId: "4",
      username: "orwell",
      fullName: "George Orwell",
      emailAddress: "george@orwell.com",
      following: [],
      followers: ["T2KqzlnkWwTF1jUMNktuKXgK8ov1"],
      dateCreated: Date.now(),
    },
  ];

  // eslint-disable-next-line prefer-const
  for (let k = 0; k < users.length; k++) {
    firebase.firebase_.firestore().collection("users").add(users[k]);
  }

  // eslint-disable-next-line prefer-const
  for (let i = 1; i <= 5; ++i) {
    firebase.firebase_
      .firestore()
      .collection("photos")
      .add({
        photoId: i,
        userId: "2",
        imageSrc: `/images/users/raphael/${i}.jpg`,
        caption: "Saint George and the Dragon",
        likes: [],
        comments: [
          {
            displayName: "dali",
            comment: "Love this place, looks like my animal farm!",
          },
          {
            displayName: "orwell",
            comment: "Would you mind if I used this picture?",
          },
        ],
        userLatitude: "40.7128°",
        userLongitude: "74.0060°",
        dateCreated: Date.now(),
      });
  }
}
