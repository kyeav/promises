const statusRef = document.querySelector('.status')
const videoRef = document.querySelector('.video')

function getSubscriptionStatus() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(undefined)
        }, 2000)
    })
}

function getVideo(subscriptionStatus) {
    return new Promise((resolve, reject) => {
        if (subscriptionStatus === "VIP") {
            resolve("show video")
        }
        else if (subscriptionStatus === "FREE") {
            resolve("show trailer")
        }
        else {
            reject("no video")
        }
    })
}

async function main() {
    const status = await getSubscriptionStatus()
    statusRef.innerHTML = status
    try {
        console.log(await getVideo(status))
        // tries to hit the backend
        // if we unlock the promise and we unlock the promise that rejects
        // it will automatically run the catch statement
        // console.log(await getVideo(status)) to unlock the promise
    }
    catch (e) {
        console.log(e)
        videoRef.innerHTML = e
    }
}

main()

/**
 * <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="app.js" defer></script>
    <!-- add defer to make sure HTML loads before JavaScript -->
</head>
<body>
    <h1>Subscription Status: <span class="status"></span></h1>
    <h1>Video: <span class="video"></span></h1>
    <!-- <script src="app.js" defer></script> -->
</body>
</html>
 */
