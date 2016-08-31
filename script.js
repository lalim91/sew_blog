/**
 * Created by Lalim on 8/29/16.
 */

(function(){
    var app = angular.module('sewApp', []);

    app.controller('navController', function(){
        var nav = this;
        nav.title = 'Sew Loved';
        nav.home = 'Posts';
    });

    app.controller('blogController', ['$http', function($http){
        var blog = this;
        blog.posts = {};
        $http.get('https://s3-us-west-2.amazonaws.com/s.cdpn.io/110131/posts_1.json').success(function(data){
            blog.posts = data;
        });
        blog.tab = "blog";
        blog.selectTab = function(setTab){
            blog.tab = setTab;
            console.log(blog.tab)
        };
        blog.isSelected = function(checkTab){
            return blog.tab === checkTab;
        };
        blog.post = {};
        blog.addPost = function(){
            blog.post.createdOn = Date.now();
            blog.post.comments = [];
            blog.post.likes = 0;
            blog.posts.unshift(this.post);
            blog.tab = 0;
            blog.post = {};
        };


    }]);


})();


