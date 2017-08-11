import {Rest} from 'express-restful-es6';
import db from '../db';

@Rest('/widgets/latest')
class LatestPostsWidget {
    
    posts() {
        return new Promise((resolve, reject) => {
            db.query('select title from posts order by pdate desc limit 5', function(error, results) {
                if (error) {
                    resolve({
                        status: 'error',
                        message: error
                    });
                }
                else {
                    resolve({
                        status: 'success',
                        data: results
                    });
                }
            });
        })
    }
    
    get() {
        return this.posts();
    }
}

@Rest('/widgets/count')
class PostsCountWidget {
    
    postsCount() {
        return new Promise((resolve, reject) => {
            db.query('select count(*) as cnt from posts', function(error, results) {
                if (error) {
                    resolve({
                        status: 'error',
                        message: error
                    });
                }
                else {
                    resolve({
                        status: 'success',
                        data: results[0].cnt
                    })
                }
            })
        })
    }
    
    get() {
        return this.postsCount();
    }
}