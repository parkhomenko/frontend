import {Rest} from "express-restful-es6";
import widgetRepository from "../repository/widgets-repository";

@Rest("/widgets/latest")
class LatestPostsWidget {
    
    get(req, resp, next) {
        return widgetRepository.getLatestPosts()
            .then(result => {
                return {
                    status: "success",
                    data: result
                };
            })
            .catch(next);
    }
}

@Rest("/widgets/count")
class PostsCountWidget {
    
    get(req, resp, next) {
        return widgetRepository.getPostsCount()
            .then(result => {
                return {
                    status: "success",
                    data: result
                };
            })
            .catch(next);
    }
}
