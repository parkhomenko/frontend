import expect from 'expect';
import postsReducer from './postReducer';
import * as actions from '../actions/postActions';

describe('Posts Reducer', () => {
  it('should add post when passed CREATE_POST_SUCCESS', () => {
    const initialState = [
      {title: 'first post'},
      {title: 'second post'}
    ];

    const newPost = {title: 'third post'};

    const action = actions.createPostSuccess(newPost);

    const newState = postsReducer(initialState, action);

    expect(newState.length).toEqual(3);
    expect(newState[0].title).toEqual('first post');
    expect(newState[1].title).toEqual('second post');
    expect(newState[2].title).toEqual('third post');
  });

  it('should return posts when passed FETCH_ALL_POSTS', () => {
    const initialState = [
      {title: 'first post'},
      {title: 'second post'}
    ];

    const action = actions.getPosts(initialState);

    const newState = postsReducer(initialState, action);

    expect(newState.length).toEqual(2);
    expect(newState[0].title).toEqual('first post');
    expect(newState[1].title).toEqual('second post');
  });
});
