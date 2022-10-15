let dataBlog = []

function addBlog (evet){
    event.preventDefault()

    let title = document.getElementById("input-name").value;
    let startDate = document.getElementById("start-date").value;
    let endDate = document.getElementById("end-date").value;
    let content = document.getElementById("input-message").value;
    // let technologies = document.getElementById("input-technologies");
    let image = document.getElementById("input-image").files[0];

    image = URL.createObjectURL(image)
    console.log(image)

    let blog = {
        title,
        startDate,
        endDate,
        content,
        // technologies,
        image,
        postAt : new Date (),
        author : "Khoirul Anam Irfanudin"
    }

    dataBlog.push(blog)
    console.log(dataBlog)

    renderBlog()
}

function renderBlog() {
    document.getElementById("contents").innerHTML = ''
;


    for (let index = 0; index < dataBlog.length; index++) {
        console.log("test",dataBlog[index])

        document.getElementById("contents").innerHTML += `
        <div class="card">
            <div class="card-image">
            <img src="${dataBlog[index].image}">
            </div>
            <div class="card-content">
                <h1>
                    <a href="blog-detail.html" target="_blank">
                        ${dataBlog[index].title}
                    </a>
                </h1>
                <div class="card-detail-content">
                ${getFullTime(dataBlog[index].postAt)}| ${dataBlog[index].author}
                </div>

                <div class="start-date">
                    <label for="">start date :</label>
                    ${dataBlog[index].startDate}
                </div>
                <div class="end-date">
                    <label for="">end date:</label>
                    ${dataBlog[index].endDate}
                </div>

                <div class="input-message">
                    ${dataBlog[index].content}
                </div>

                <div>
                <p style="font-size: 15px; color: grey">${getDistanceTime(dataBlog[index].postAt)}</p>
                </div>


                <div class="os">
                    <i class="fa brands fa-google-play"></i>
                </div>

                <div class="btn-group">
                    <button class="btn-edit"> Edit Post</button>
                    <button class="btn-post"> Post Blog</button>
                </div>
            </div>
        </div>
        `
    }
} 

function getFullTime(time) {
    // time = new Date()
    // console.log(time)

    let monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    // console.log(monthName[9])

    // 14
    let date = time.getDate()
    console.log(date)

    // 9
    let monthIndex = time.getMonth()
    console.log(monthIndex)

    // 2022
    let year = time.getFullYear()
    console.log(year)

    let hours = time.getHours()
    let minutes = time.getMinutes()

    console.log(hours)

    if (hours <= 9) {
        hours = "0" + hours
    } 
    
    if (minutes <= 9) {
        minutes = "0" + minutes
    }

    // 14 Oct 2022 09:07 WIB
    return `${date} ${monthName[monthIndex]} ${year} ${hours}:${minutes} WIB`
}

function getDistanceTime(time) {
    let timeNow = new Date()
    let timePost = time

    let distance = timeNow - timePost //milisecond
    console.log(distance)

    let milisecond = 1000 // milisecond
    let secondInHours = 3600 // 1 jam = 3600 detik
    let hoursInDay = 24 // 1 hari = 24 jam

    let distanceDay = Math.floor(distance / (milisecond * secondInHours * hoursInDay))
    let distanceHours = Math.floor(distance / (milisecond * 60 * 60))
    let distanceMinutes = Math.floor(distance / (milisecond * 60))
    let distanceSecond = Math.floor(distance / milisecond)

    if (distanceDay > 0) {
        return `${distanceDay} day(s) ago`
    } else if (distanceHours > 0) {
        return `${distanceHours} hour(s) ago`
    } else if (distanceMinutes > 0) {
        return `${distanceMinutes} minute(s) ago`
    } else {
        return `${distanceSecond} second(s) ago`
    }
}

// 1#
setInterval(function() {
    renderBlog()
}, 3000)

// 2#
// setInterval(intervalFunction, 3000)

// function intervalFunction() {
//     renderBlog()
// }