/**
 * Created by Monkey on 2017/10/18.
 */
var gulp = require("gulp"),
    webServer = require("gulp-webserver"),
    fs = require("fs"),
    path = require("path"),
    url = require("url");

gulp.task("server", function () {
    gulp.src("./Data")
        .pipe(webServer({
            port:"8090",
            host:"localhost",
            livereload:true,
            directoryLising:{
                path:"./",
                enable:true
            },
            middleware: function (req, res) {
                var oUrl = url.parse(req.url);
                var filejson = path.join(__dirname,"Data",oUrl.query+".json");
                fs.exists(filejson, function (exist) {
                    if(!exist){
                        res.writeHead(404,{
                            "Content-type":"text/json",
                            "Access-Control-Allow-Origin":"http://localhost:63342"
                        })
                        res.end("失败")
                    }else{
                        fs.readFile(filejson, function (err, result) {
                            if(err) return console.error(err);
                            res.writeHead(200,{
                                "Content-type":"text/json",
                                "Access-Control-Allow-Origin":"http://localhost:63342"
                            })
                            res.end(result.toString());
                        })
                    }
                })
            }
        }))
})