## Install dependencies
npm install

## Gulp tasks
gulp lint - checkstyle
gulp minify - minification of js and css files

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
}
```
http://ss-fe08.vlab.lohika.com:5000/posts [PUT] - edits a post  
body example:
```json
{
	"id": 1,
	"title": "Post 45",
	"content": "This is something edited"
}
```
http://ss-fe08.vlab.lohika.com:5000/posts [DELETE] - removes a post  
body example
```json
{
	"id": 4
}
```
http://ss-fe08.vlab.lohika.com:5000/widgets/latest [GET] - the list of all latest posts  
http://ss-fe08.vlab.lohika.com:5000/widgets/count [GET] - the count of all posts