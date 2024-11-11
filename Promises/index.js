// promises in JS -> to overcome callback hell problem
console.log("start");

const sub = new Promise((resolve, reject) => {
    setTimeout(() => {
        const result = true;
        if (result) {
            resolve("task done on time");
        }
        else {
            reject(new Error("Please complete your task"));
        }
    }, 2000)
});

sub.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})

// const sub = Promise.reject("Work not Completed");
// sub.catch((err) => {
//     console.log(err);
// })
// console.log("stop");



// console.log("start");
// function importantAction(username) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`Hey😀 ${username}`);
//         }, 1000);
//     })
// }


// function likedTheVideo(video) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`You liked the ${video} video`);
//         }, 1000)
//     })
// }

// function shareTheVideo(video) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject(`You shared the ${video} video`);
//         }, 1000);
//     })
// }



/**
 * This is a promise hell
importantAction("Bharat Dhiman").then((res) => {
    console.log(res);
    likedTheVideo("React Tutorial").then((res) => {
        console.log(res);
        shareTheVideo("React Tutorial").then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })
    }).catch((err) => {
        console.log(err);
    })
}).catch((err) => {
    console.log(err);
})
 */



/**
 * This is promise chaining

importantAction("Bharat Dhiman").then((res) => {
    console.log(res);
    return likedTheVideo("React JS Tutorial");
}).then((res) => {
    console.log(res);
    return shareTheVideo("React JS Tutorial");
}).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})
 */


/**
 * promise combinator -> array of promises
 * if one promise fail, then all of the promises fail


console.log(
    Promise.all([
        importantAction("Bharat"),
        likedTheVideo("React JS Tutorial"),
        shareTheVideo("React JS Tutorial")
    ]).then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log("Error: Promises failed");
    })
);
 */

/**
 * async await make promises easier to write
 * async makes a function return a Promise
 * await makes a function wait for a Promise
const result = async () => {
    try {
        const message1 = await importantAction("Bharat");
        console.log(message1);
        const message2 = await likedTheVideo("React JS Tutorial");
        console.log(message2);
        const message3 = await shareTheVideo("React JS Tutorial");
        console.log(message3);
    } catch (error) {
        console.log("promises failed", error);
    }
};

result();
*/

// console.log("finish");



/**
 * Practice Question: 1
 * Predict the output?
console.log("start");

const promise1 = new Promise((resolve, reject) => {
    console.log(1);
    resolve(2);
});

promise1.then((res) => {
    console.log(res);
});

console.log("finish");

Note: .then(()=>{}); -> is asynchronous operation
 */


/**
 * Practice Question: 2
 * Predict the output?



console.log("start");

const fn = () => {
    return new Promise((resolve, reject) => {
        console.log(1);
        resolve("success");
    });
}

console.log("middle");

fn().then((res) => {
    console.log(res);
})
console.log("end");

 */

/**
 * Practice Question: 3
 * Predict the output?


function job() {
    return new Promise(function (resolve, reject) {
        reject();
    });
};

let variable = job();

variable
    .then(function () {
        console.log("success 1");
    })
    .then(function () {
        console.log("success 2");
    })
    .then(function () {
        console.log("success 3");
    })
    .catch(function () {
        console.log("error 1");
    })
    .then(function () {
        console.log("success 4");
    })
 */