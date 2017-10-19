/**
 * Created by Monkey on 2017/10/18.
 */
app.factory("shopCarService", function ($http, $q) {
    return {
        ajax: function (type, url) {
            var defer = $q.defer();
            if(type == "JSON" || type == "json"){
                $.ajax({
                    url:url,
                    dataType:"jsonp",
                    success: function (result) {
                        return defer.resolve(result);
                    }
                })
            }else{
                $http({
                    url:url,
                    type:type
                }).then(function (result) {
                    return defer.resolve(result);
                }, function (err) {
                    return defer.resolve(err);
                })
            }
            return defer.promise;
        }
    }
})