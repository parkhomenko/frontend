const requester = (url, method, data) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.open(method, url);
        if (method !== "GET") {
            request.setRequestHeader("Content-Type", "application/json");
        }

        request.onload = () => {
            if (request.status == 200) {
                const response_object = JSON.parse(request.response);
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
};

export default requester;
