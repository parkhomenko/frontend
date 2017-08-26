const posts_data = {
    
    getPosts() {
        return new Promise((resolve, reject) => {
            let request = new XMLHttpRequest();
            request.open("GET", "/posts");
            
            request.onload = () => {
                if (request.status == 200) {
                    let response_object = JSON.parse(request.response);
                    resolve(response_object.data);
                } else {
                    reject(Error(request.statusText));
                }
            };
            
            request.onerror = () => {
                reject(Error("Network Error"));
            };
            
            request.send();
        });
    }
};

export default posts_data;
