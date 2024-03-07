let progress = document.getElementById("progress")
let song = document.getElementById("song")
let ctrl = document.getElementById("ctrl")
let rep= document.getElementById("rep")
let he= document.getElementById("heart")


song.onloadeddata =function(){
    progress.max =Math.floor(song.duration);
    progress.value=song.currentTime;
    console.log(song.duration)
console.log(song.currentTime)
console.log(progress.value)

}


function playPause() {
        if (ctrl.classList.contains("fa-pause")) {
            song.pause();
            ctrl.classList.remove("fa-pause")
            ctrl.classList.add("fa-play")
            
        }else{
            song.play();
            ctrl.classList.remove("fa-play")
            ctrl.classList.add("fa-pause")
        }
}

if (song.play()) {
    setInterval(()=>{progress.value=song.currentTime},0.1)


    
}


progress.onchange =function(){
    song.play();
    song.currentTime=progress.value;
    ctrl.classList.remove("fa-play")
    ctrl.classList.add("fa-pause")
}

// Assuming 'song' is your audio element
song.onended = function() {
    // Do something when the song ends
    console.log("The song has ended.");
    // For example, update progress bar to indicate completion
    progress.value=song.duration;
    ctrl.classList.add("fa-play")
    ctrl.classList.remove("fa-pause")
};


function repeat() {

   

    if (rep.classList.contains("fa-repeat")) {
        
        rep.className= "fi fi-bs-arrows-repeat-1"
        
    }else{
       
        rep.className="fa-solid fa-repeat"
    }
}



function heart() {



    if (he.classList.contains("fa-regular")) {
        
        he.classList.remove("fa-regular")
        he.classList.add("fa")
        he.classList.add("colour")
        
    }else{
        
        he.classList.remove("fa")
        he.classList.remove("colour")
        he.classList.add("fa-regular")
    }
}



function frwrd() {


song.currentTime=song.currentTime+10
}

function bcwrd() {


    
    song.currentTime=song.currentTime-10
    }
    



    ///
    function searchSong() {
        var searchQuery = document.getElementById("searchQuery").value;
        var apiUrl = "https://itunes.apple.com/search?media=music&entity=musicTrack&term=" + encodeURIComponent(searchQuery);
    
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                if (data.results && data.results.length > 0) {
                    // Assuming the first result is the one we want
                    var firstResult = data.results[0];
                    var songName = firstResult.trackName;
                    var artistName = firstResult.artistName;
                    var artworkUrl = firstResult.artworkUrl100;
    
                    // Display song name and artist
                    document.getElementById("songName").textContent = songName;
                    document.getElementById("artistName").textContent = artistName;
    
                    // Display artwork
                    var artworkImage = document.getElementById("artwork");
                    artworkImage.src = artworkUrl.replace("100x100", "300x300"); // Replace thumbnail size with larger size
    
                    // Update audio source
                    var audio = document.getElementById("song");
                    audio.src = firstResult.previewUrl; // Use previewUrl for audio sample
    
                  
                } else {
                    // No results found
                    alert("No results found");
                }
            })
            .catch(error => console.log(error));
    }
    