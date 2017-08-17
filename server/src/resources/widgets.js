import {Rest} from 'express-restful-es6';
import WidgetRepository from "../repository/widgets-repository";

@Rest('/widgets/latest')
class LatestPostsWidget {
    
    constructor() {
        this.widgetRepository = new WidgetRepository();
    }
    
    get(req, resp, next) {
        return this.widgetRepository.getLatestPosts()
            .then(result => {
                return {
                    status: 'success',
                    data: result
                }
            })
            .catch(next);
    }
}

@Rest('/widgets/count')
class PostsCountWidget {
    
    constructor() {
        this.widgetRepository = new WidgetRepository();
    }
    
    get(req, resp, next) {
        return this.widgetRepository.getPostsCount()
            .then(result => {
                return {
                    status: 'success',
                    data: result
                }
            })
            .catch(next);
    }
}
