var fs = require('fs');
var UglifyJS = require("uglify-js");
var path = require('path');
var pngquant = require('node-pngquant-native');

function scanFolder(path) {
    var fileList = [],
        folderList = [],
        walk = function(path, fileList, folderList) {
            files = fs.readdirSync(path);
            files.forEach(function(item) {
                var tmpPath = path + '\\' + item,
                    stats = fs.statSync(tmpPath);

                if (stats.isDirectory()) {
                    walk(tmpPath, fileList, folderList);
                    folderList.push(tmpPath);
                } else {
                    fileList.push(tmpPath);
                }
            });
        };

    walk(path, fileList, folderList);



    return {
        'files': fileList,
        'folders': folderList
    }
}





function mkdirsSync(dirname, mode) {
    if (fs.existsSync(dirname)) {
        return true;
    } else {
        if (mkdirsSync(path.dirname(dirname), mode)) {
            fs.mkdirSync(dirname, mode);
            return true;
        }
    }
}

var srcPath = path.normalize(__dirname + "\\publish\\html5\\res");

var result = scanFolder(srcPath);





for (var j in result.files) {
    var filePath = result.files[j];
    (function(_filePath) {
        if (/png$/.test(_filePath)) {

            fs.readFile(_filePath, function(err, buffer) {
                if (err) throw err;
                var resBuffer = pngquant.compress(buffer, {
                    "speed": 1
                });

                console.log(_filePath);

                fs.writeFile(_filePath, resBuffer, {
                    flags: 'wb'
                }, function(err) {});
            });

        }

    })(filePath)

}
