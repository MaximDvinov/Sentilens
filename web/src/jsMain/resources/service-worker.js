self.addEventListener("install", function(event) {
    event.waitUntil(preLoad());
});

var preLoad = function(){
    console.log("Installing web app");
    return caches.open("offline").then(function(cache) {
        console.log("caching index and important routes");
        return cache.addAll([
            "/",
            "/script.js",
            "/skiko.js",
            "/skiko.wasm",
            "/web.js",
            "/f4338623f94e6079de97.ttf",
            "/77c1e330694154d3efed.ttf",
            "/a7c01ee77faba77e24c1.ttf",
            "/icon.ico",

        ]);
    });
};

self.addEventListener("fetch", function(event) {
    event.respondWith(checkResponse(event.request).catch(function() {
        return returnFromCache(event.request);
    }));
    event.waitUntil(addToCache(event.request));
});

var checkResponse = function(request){
    return new Promise(function(fulfill, reject) {
        fetch(request).then(function(response){
            if(response.status !== 404) {
                fulfill(response);
            } else {
                reject();
            }
        }, reject);
    });
};

var addToCache = function(request){
    return caches.open("offline").then(function (cache) {
        return fetch(request).then(function (response) {
            console.log(response.url + " was cached");
            return cache.put(request, response);
        });
    });
};

var returnFromCache = function(request){
    return caches.open("offline").then(function (cache) {
        return cache.match(request).then(function (matching) {
            if(!matching || matching.status == 404) {
                return cache.match("offline.html");
            } else {
                return matching;
            }
        });
    });
};