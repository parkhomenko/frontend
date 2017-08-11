## Install dependencies
npm install

## Start server
npm start

## Main page
http://ss-fe08.vlab.lohika.com:5000

## Rest services:
http://ss-fe08.vlab.lohika.com:5000/posts [GET] - the list of all posts
http://ss-fe08.vlab.lohika.com:5000/posts [POST] - adds a new post
body example:
```json
{
	"title": "Post 3",
	"content": "This is the post about NodeJS"
)
```
http://ss-fe08.vlab.lohika.com:5000/widgets/latest [GET] - the list of all latest posts
http://ss-fe08.vlab.lohika.com:5000/widgets/count [GET] - the count of all posts