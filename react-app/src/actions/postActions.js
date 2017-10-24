import request from "superagent";

export function getPosts(posts) {
    return {
        type: "GET_POSTS",
        posts
    };
}

export function getLatestPosts(latestPosts) {
    return {
        type: "LATEST_POSTS",
        latestPosts
    };
}

export function getPostsCount(postsCount) {
    return {
        type: "POSTS_COUNT",
        postsCount
    };
}

export function createPostSuccess(post) {
  return {
    type: "CREATE_POST_SUCCESS",
    post
  };
}

export function loadPosts() {
    return function(dispatch) {
        request('GET', 'http://localhost:5000/posts').then(response => {
            const result = JSON.parse(response.text);
            dispatch(getPosts(result.data));
        }).catch(error => {
            throw(error);
        });
    }
}

export function loadLatestPosts() {
    return function(dispatch) {
        request('GET', 'http://localhost:5000/widgets/latest').then(response => {
            const result = JSON.parse(response.text);
            console.log(result);
            dispatch(getLatestPosts(result.data));
        }).catch(error => {
            throw(error);
        });
    }
}

export function loadPostsCount() {
    return function(dispatch) {
        request('GET', 'http://localhost:5000/widgets/count').then(response => {
            const result = JSON.parse(response.text);
            dispatch(getPostsCount(result.data));
        }).catch(error => {
            throw(error);
        });
    }
}

export function savePost(post) {
  return function(dispatch) {
    request.post('http://localhost:5000/posts')
    .send(post)
    .then((error, result) => {
      dispatch(createPostSuccess(post));
    }).catch(error => {
      throw(error);
    });
  };
}
