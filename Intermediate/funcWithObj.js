let course = 
{
    Title: 'functions javascript',
    Instructor: 'Hitesh',
    Student: 'Teja'
}

let Video = {
    title : 'Loopsin js',
    videoLength: 200,
    videoDescription: 'This is a vieo Description',
    author : 'teja'


}

let videoFunc = function(myObject)
{
    // console.log(myObject.Title)
    // console.log()
    // console.log(course)

    return{
        formatOne: `Time for video ${Video.videoLength + 2}`,
        format2: `This is the second one`
    }
}

// videoFunc(course)
// videoFunc(Video)

let add = videoFunc(Video)
console.log(add)

console.log()

console.log(add.formatOne)
