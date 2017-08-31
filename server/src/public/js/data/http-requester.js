const requester = (url, method, data) => {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.open(method, url);
        if (method !== "GET") {
            request.setRequestHeader("Content-Type", "application/json");
        }

        request.onload = () => {
            if (request.status == 200) {
                let response_object = JSON.parse(request.response);
                console.log(response_object);
                resolve(response_object.data);
            } else {
                reject(Error(request.statusText));
            }
        };

        request.onerror = () => {
            reject(Error("Network Error"));
        };
        
        if (method === "GET") {
            request.send();
        } else {
            request.send(JSON.stringify(data));
        }
    });
}

export default requester;
