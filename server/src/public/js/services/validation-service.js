const validation_service = {
    
    validatePostTitle(text = "") {
        return text.length >= 10 && text.length <= 100;
    },
    
    validatePostBody(text = "") {
        return text.length >= 10 && text.length <= 1000;
    }
};

export default validation_service;
