// const cart = ["shoes", "jeans", "t-shirt's"];

// callback hell or pyramid of doom
/**
api.createOrder(cart, function () {
    api.proceedToPayment(function () {
        api.showOrderSummary(function () {
            api.updateWallet();
        });
    });
});
*/



/*
synchronous and asynchronous code
*/

/* synchronous code
console.log("start");

console.log("mid process");

console.log("finish");
*/

/**
 * asynchronous code

console.log("start");

setTimeout(() => {
    console.log("mid process");
}, 2000);

console.log("finish");
 */

// js execute synchronous code first and then asynchronous code.


/**
 * Example


console.log("start");
function importantAction(username, cb) {
    setTimeout(() => {
        cb(`Hey😀 ${username}`);
    }, 1000);
}

function shareTheVideo(video, cb) {
    setTimeout(() => {
        cb(`Shared the ${video} video`);
    }, 1000);
}

function likedTheVideo(video, cb) {
    setTimeout(() => {
        cb(`Liked the ${video} video`);
    }, 1000)
}
const message = importantAction("Bharat Dhiman", function (message) {
    console.log(message);
    likedTheVideo("React JS Tutorial", function (action) {
        console.log(action);
    });
    shareTheVideo("React JS Tutorial", function (videoName) {
        console.log(videoName);
    })
});
console.log("finish");
 */