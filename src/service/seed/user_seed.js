export default class SeedDatabase {
  constructor(firebase) {
    this.firebase = firebase;
  }
  users = [
    {
      name: "user1",
      email: "user1@abc.com",
      added_date: Date.now(),
    },
    {
      name: "user2",
      email: "user2@abc.com",
      added_date: Date.now(),
    },
  ];
  pushData() {
    this.users.forEach((currVal, i) => {
      this.firebase
        .firestore()
        .collection("users")
        .add({
          ...currVal,
        });
    });
  }
}
