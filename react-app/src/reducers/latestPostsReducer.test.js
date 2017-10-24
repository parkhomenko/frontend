import expect from 'expect';
import latestPostsReducer from './latestPostsReducer';
import * as actions from '../actions/postActions';

describe('Latest Posts Reducer', () => {
  it('should return posts when passed FETCH_POST_HEADERS', () => {
    const initialState = [
      {title: 'first post'},
      {title: 'second post'}
    ];

    const action = actions.getLatestPosts(initialState);

    const newState = latestPostsReducer(initialState, action);

    expect(newState.length).toEqual(2);
    expect(newState[0].title).toEqual('first post');
    expect(newState[1].title).toEqual('second post');
  });
});
