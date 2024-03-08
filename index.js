let progress = document.getElementById("progress")
let song = document.getElementById("song")
let ctrl = document.getElementById("ctrl")
let rep = document.getElementById("rep")
let he = document.getElementById("heart")


song.onloadeddata = function () {
    progress.max = Math.ceil(song.duration)
    progress.value = song.currentTime;
}


function playPause() {
    if (ctrl.classList.contains("fa-pause")) {
        song.pause();
        ctrl.classList.remove("fa-pause")
        ctrl.classList.add("fa-play")

    } else {
        song.play();
        ctrl.classList.remove("fa-play")
        ctrl.classList.add("fa-pause")
    }
}

if (song.play()) {
    setInterval(() => { progress.value = song.currentTime }, 1000)
}

progress.onchange = function () {
    song.play();
    song.currentTime = progress.value;
    ctrl.classList.remove("fa-play")
    ctrl.classList.add("fa-pause")
}

// Assuming 'song' is your audio element
song.onended = function () {
    // Do something when the song ends
    console.log("The song has ended.");
    // For example, update progress bar to indicate completion
    console.log(progress.value, progress.max)
    // progress.value = progress.max;
    progress.max = progress.value
};


function repeat() {



    if (rep.classList.contains("fa-repeat")) {

        rep.className = "fi fi-bs-arrows-repeat-1"

    } else {

        rep.className = "fa-solid fa-repeat"
    }
}



function heart() {



    if (he.classList.contains("fa-regular")) {

        he.classList.remove("fa-regular")
        he.classList.add("fa")
        he.classList.add("colour")

    } else {

        he.classList.remove("fa")
        he.classList.remove("colour")
        he.classList.add("fa-regular")
    }
}



function frwrd() {


    song.currentTime = song.currentTime + 5
}

function bcwrd() {



    song.currentTime = song.currentTime - 5
}


document.getElementById("searchQuery").addEventListener("keydown", (e) => {
    if (e.key === 'Enter') {
        searchSong()
    }
})



function url() {


    let yourybeapi="AIzaSyA6sb5UpC9oo24Z7L-cUvC1HOwdaA-ax9o"

    let search=document.getElementById("searchQuerry").value;
    
}




///
function searchSong() {


    ctrl.classList.remove("fa-pause")
    ctrl.classList.add("fa-play")


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


                // //adding the results////////////////////
                // for (let i = 0; i < Math.min(3, data.results.length); i++) {
                //     const result = data.results[i];
                //     const songName = result.trackName;
                //     const artistName = result.artistName;
                //     const artworkUrl = result.artworkUrl100;
                //     const resultElement = document.getElementById(`result${i + 1}`);
                //     const imageElement = document.getElementById(`image${i + 1}`);

                //     // Update the content and image source of the HTML elements
                //     resultElement.textContent = `${songName} - ${artistName}`;
                //     imageElement.src = artworkUrl.replace("100x100", "90x90"); 
                //     imageElement.alt = `${songName} by ${artistName}`;
                // }

                //////////////////////////////
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


window.onload = function() {
    document.getElementById("searchQuery").value = ""; // Clear the placeholder value
};


const startTimer = document.getElementById("startTimer");
const endTimer = document.getElementById("endTimer");

song.addEventListener("loadedmetadata", () => {
    const duration = song.duration;
    const formattedDuration = formatTime(duration);
    endTimer.textContent = formattedDuration;
});

song.addEventListener("timeupdate", () => {
    const currentTime = song.currentTime;
    const formattedTime = formatTime(currentTime);
    startTimer.textContent = formattedTime;
});

progress.addEventListener("input", () => {
    const currentTime = song.duration * (progress.value / 100);
    const formattedTime = formatTime(currentTime);
    startTimer.textContent = formattedTime;
});

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

