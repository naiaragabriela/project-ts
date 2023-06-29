type VerifyUserFn = (user: User, sentvalue: User) => boolean;
type User = { username: string; password: string };

const verifyUser: VerifyUserFn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

const bdUser = { username: 'Joao', password: '12345' };
const sentUser = { username: 'Joao', password: '12345' };
const loggedIn = verifyUser(bdUser, sentUser);
console.log(loggedIn);
