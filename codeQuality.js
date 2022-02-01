// level {1/2/3}
async function getUsers() {
  let doc = await Promise.all(getUser(), getProfile(), getPosts());

  let user = doc[0];
  let profile = doc[1];
  let posts = doc[2];

  const userProfile = {
    user,
    profile,
    posts,
  };

  return userProfile;
}
