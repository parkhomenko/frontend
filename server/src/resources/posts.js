import {Rest} from "express-restful-es6";
import db from "../db";

@Rest('/posts')
class PostResource {
    
    posts() {
        return new Promise((resolve, reject) => {
            db.query('select * from posts order by pdate desc', function(error, results) {
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
    
    addNewPost() {
        return new Promise((resolve, reject) => {
            const date = new Date().toISOString().slice(0, 19).replace('T', ' ');
            const record = {
                title: this.body.title,
                content: this.body.content,
                pdate: date
            };
            
            db.query('insert into posts set ?', this.body, function(error, results) {
                if (error) {
                    resolve({
                        status: 'error',
                        message: error
                    });
                }
                else {
                    resolve({
                        status: 'success'
                    });
                }
            })
        });
    }
    
    get() {
        return this.posts();
    }
    
    post() {
        return this.addNewPost();
    }
}