let playlist = [
	{src:'https://freesound.org/data/previews/264/264295_4019029-lq.mp3', track: 0, artist:"Songey"},  // 0
	{src:'https://freesound.org/data/previews/531/531015_9818404-lq.mp3', track: 1, artist:"Songey"},  // 1
    {src:'https://freesound.org/data/previews/531/531947_7707368-lq.mp3', track: 2, artist:"Songey"}  // 2
]


//start off
let artistName = document.querySelector(`#artist-name`)
let songTitle = document.querySelector(`#song-title`)
let trackCount = playlist.length
let i = 0
let isPlaying = false
let audio = null // empty for now

//playing songs
let playASong = function(whichSong) {
    prev.toggleAttribute(`disabled`, true)
	next.toggleAttribute(`disabled`, true)
	let song = playlist[whichSong] 
	if (audio) { 
		audio.src = song.src // Change the song **
		if (isPlaying) { audio.play() } 
	} else {
        audio = new Audio(song.src)
    }
    
    if (i == 0) {
        songTitle.textContent = `DREAMS`
        document.body.classList.add(`swap`)
        setTimeout(()=>{ 
	                document.body.style.backgroundImage = `url('https://images.unsplash.com/photo-1499346030926-9a72daac6c63?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1650&q=80')` 
                                }, 500)
        //document.body.style.background = "url('https://images.unsplash.com/photo-1499346030926-9a72daac6c63?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1650&q=80') no-repeat"
    } else if (i == 1) {
        songTitle.textContent = `OCEAN WAVE`
        document.body.classList.add(`swap`)
        setTimeout(()=>{ 
	                document.body.style.backgroundImage = `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1653&q=80')` 
                                }, 500)
        //document.body.style.background = "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1653&q=80')"
    } else if (i == 2) {
        songTitle.textContent = `RAINFALL`
        document.body.classList.add(`swap`)
        setTimeout(()=>{ 
	                document.body.style.backgroundImage = `url('https://i.pinimg.com/originals/71/a9/5d/71a95d3e30320ee8f62696a485e87aba.jpg')` 
                                }, 500)
        //document.body.style.background = "url('https://i.pinimg.com/originals/71/a9/5d/71a95d3e30320ee8f62696a485e87aba.jpg')"
    } 

    document.body.addEventListener('animationend', () => {
        document.body.classList.remove(`swap`)
        
        if (i <= 0) {
            i = 0
        } else {
            previous.toggleAttribute(`disabled`, false)
        }
        
        if (i >= imgs.length-1) {
            i = imgs.length-1
        } else {
            next.toggleAttribute(`disabled`, false)
        }
    })

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
    if((i + 1) < trackCount){
        i = i + 1
        playASong(i)
    } 
}

let next = document.querySelector(`#next`)
next.addEventListener(`click`, pressedNext)

//previous song
let pressedPrev = function() {
    if((i - 1) > -1){
        i = i - 1
        playASong(i)
    } 
}

let previous = document.querySelector(`#prev`)
previous.addEventListener(`click`, pressedPrev)


//starts off at song[0]
playASong(0)