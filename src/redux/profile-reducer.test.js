import profileReducer, {
  addPostActionCreator,
  deletePost
} from "./profile-reducer";

let state = {
  posts: [
    {
      id: 1,
      message: "Hi, how are you?",
      likeCount: 12
    },
    {
      id: 2,
      message: "It's my first post",
      likeCount: 11
    }
  ]
};

it("length of posts should be incremented", () => {
  let action = addPostActionCreator("test test test");
  // 1. test data(исходные данные)

  // 2. action(экшен)
  let newState = profileReducer(state, action);

  // 3. expectation(ожидание)
  expect(newState.posts.length).toBe(3);
});

it("message of new posts should be correct", () => {
  let action = addPostActionCreator("test test test");
  // 1. test data(исходные данные)

  // 2. action(экшен)
  let newState = profileReducer(state, action);

  // 3. expectation(ожидание)
  expect(newState.posts[2].message).toBe("test test test");
});

it("after deleting length of messages should be incremented", () => {
  let action = deletePost(1);

  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(1);
});

it("after deleting length should't be decrement if id is incorrect", () => {
  let action = deletePost(1000);

  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(2);
});
