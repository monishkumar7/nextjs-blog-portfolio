import GhostContentAPI from '@tryghost/content-api';

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: 'https://yourblog.herokuapp.com',
  key: 'yourkeyhere',
  version: 'v4',
});

export async function getPosts() {
  return await api.posts
    .browse({
      limit: 'all',
    })
    .catch((err) => {
      console.error(err);
    });
}

export async function getSinglePost(postSlug) {
  return await api.posts.read({ slug: postSlug }).catch((err) => {
    console.log(err);
  });
}
