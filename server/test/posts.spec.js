import chai from "chai";
import sinon from "sinon";

import post_service from "../src/public/js/services/post-service";

describe("Testing Post requests", () => {
    
    describe("validate async methods", () => {
        
        let requests = [];
        
        beforeEach(() => {
            global.XMLHttpRequest = sinon.useFakeXMLHttpRequest();
            global.XMLHttpRequest.onCreate = (request) => {
                requests.push(request);
            };
        });
        
        it("getting posts from server", (done) => {
            post_service.fillPosts();
            requests[0].respond(200, { "Content-Type": "application/json" },
                "{\"status\":\"success\",\"data\":[{\"id\":1,\"title\":\"Post 1\",\"content\":\"Post content goes here\",\"pdate\":\"2017-08-11T18:23:01.000Z\"},{\"id\":2,\"title\":\"Post 2\",\"content\":\"Some information about something\",\"pdate\":\"2017-08-11T18:23:42.000Z\"},{\"id\":3,\"title\":\"Post 3\",\"content\":\"Something interesting...\",\"pdate\":\"2017-08-11T18:24:02.000Z\"}]}");
            setTimeout(() => {
                post_service.getPostItems().length.should.equal(3);
                done();
            }, 200);
        });
        
        afterEach(() => {
            global.XMLHttpRequest.restore();
        });
    });
});
