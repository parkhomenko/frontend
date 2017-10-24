import expect from 'expect';
import * as postActions from './postActions';

describe('Post Actions', () => {
  it('should create a CREATE_POST_SUCCESS action', () => {
    const post = {title: 'A New Post'};
    const expectedAction = {
      type: 'CREATE_POST_SUCCESS',
      post: post
    };

    const action = postActions.createPostSuccess(post);

    expect(action).toEqual(expectedAction);
  });

  it('should create a FETCH_ALL_POSTS action', () => {
    const posts = [{post: {title: 'A New Post'}}];
    const expectedAction = {
      type: 'GET_POSTS',
      posts: posts
    };

    const action = postActions.getPosts(posts);

    expect(action).toEqual(expectedAction);
  });

  it('should create a FETCH_POST_HEADERS action', () => {
    const posts = [{post: {title: 'A New Post'}}];
    const expectedAction = {
      type: 'LATEST_POSTS',
      latestPosts: posts
    };

    const action = postActions.getLatestPosts(posts);

    expect(action).toEqual(expectedAction);
  });

  it('should create a FETCH_POSTS_COUNT action', () => {
    const cnt = 5;
    const expectedAction = {
      type: 'POSTS_COUNT',
      postsCount: cnt
    };

    const action = postActions.getPostsCount(cnt);

    expect(action).toEqual(expectedAction);
  });
});
