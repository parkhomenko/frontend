import chai from "chai";
import validation_service from "../src/public/js/services/validation-service";

chai.should();

describe("Validation Testing", () => {
    
    describe("Validate a post's title", () => {
        it("Title can't be less than 10 characters", () => {
            validation_service.validatePostTitle("title").should.equal(false);
        });
        
        it("Title can't be more than 100 characters", () => {
            validation_service.validatePostTitle("some title\
                                                some title\
                                                some title\
                                                some title\
                                                some title\
                                                some title\
                                                some title\
                                                some title\
                                                some title\
                                                some title\
                                                some title").should.equal(false);
        });
        
        it ("Title should be fine", () => {
            validation_service.validatePostTitle("Perfectly normal title").should.equal(true);
        });
    });
    
    describe("Validate a post's body", () => {
        it("Body can't be less than 10 characters", () => {
            validation_service.validatePostBody("text").should.equal(false);
        });
        
        it("Body should be fine", () => {
            validation_service.validatePostBody("some title some title\
                                                some title some title\
                                                some title some title\
                                                some title some title\
                                                some title some title\
                                                some title some title\
                                                some title some title\
                                                some title some title\
                                                some title some title\
                                                some title some title\
                                                some title some title").should.equal(true);
        });
    });
});
