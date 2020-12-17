let playlist = [
	{src:'https://freesound.org/data/previews/531/531015_9818404-lq.mp3', title:"Songggg", artist:"Songey"},  // 0
	{src:'https://freesound.org/data/previews/264/264295_4019029-lq.mp3', title:"Final Day", artist:"Songey"},  // 1
    {src:'https://freesound.org/data/previews/531/531947_7707368-lq.mp3', title:"Hello world", artist:"Songey"}  // 2
]

//start off
let artistName = document.querySelector(`#artist-name`)
let songTitle = document.querySelector(`#song-title`)
let i = 0
let isPlaying = false
let audio = null // empty for now

//playing songs
let playASong = function(whichSong) {
	let song = playlist[whichSong] 
	if (audio) { 
		audio.src = song.src // Change the song **
		if (isPlaying) { audio.play() } 
	} else {
		audio = new Audio(song.src) 
    }
    
    if (i == 0) {
        songTitle.textContent = `Ocean Waves`
        document.body.style.background = "url('https://www.teahub.io/photos/full/277-2776366_wallpaper-beach-sand-waves-surf.jpg') no-repeat"
    } else if (i == 1) {
        songTitle.textContent = `Dreams`
        document.body.style.background = "url('https://images.unsplash.com/photo-1499346030926-9a72daac6c63?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1650&q=80')"
    } else if (i == 2) {
        songTitle.textContent = `Rainfall`
        document.body.style.background = "url('https://i.pinimg.com/originals/71/a9/5d/71a95d3e30320ee8f62696a485e87aba.jpg')"
    } else if (i < 2) {
        songTitle.textContent = `nosong`
    }
    // Rocco help me, because I know if you continue clicking next, i goes up by one, 
    //but i only have three songs so i tried doing i === 3 no song, but it doesn't work, 
    // i need to know how to fix the scenario of i being < 0 and > 2 and having the audio just 
    //stop which i could maybe do audio.load?

}

// play//pause
let playPause = function() {
	if (isPlaying) {
		audio.pause()
		isPlaying = false 
		play.textContent = `play_circle_outline`
	} else {
		audio.play()
		isPlaying = true
		play.textContent = `pause_circle_outline`
	}
}
let play = document.querySelector(`#play`)
play.addEventListener(`click`, playPause)


//next song
let pressedNext = function() {
	i = i + 1
    playASong(i)
}

let next = document.querySelector(`#next`)
next.addEventListener(`click`, pressedNext)

//previous song
let pressedPrev = function() {
	i = i - 1
    playASong(i)
}

let previous = document.querySelector(`#prev`)
previous.addEventListener(`click`, pressedPrev)


//starts off at song[0]
playASong(0)