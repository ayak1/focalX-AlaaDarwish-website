let master_video = document.querySelector('.master_video_iframe');
let small_video = document.querySelector('.small_video_iframe');
console.log(master_video.onclick(()=>{
    return 'hh'
}))
let master_src=master_video.src;
let small_src=small_video.src;
// console.log(changeVideo())
const changeVideo = () =>{
    // master_video.src=small_src;
    // small_video.src=master_src;
    console.log('first')
}
small_video.contentWindow.body.addEventListener('keydown',changeVideo,false)
small_video