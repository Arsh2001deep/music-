let progress = document.getElementById("progress")
let song = document.getElementById("song")
let ctrl = document.getElementById("ctrl")
let rep= document.getElementById("rep")
let he= document.getElementById("heart")


song.onloadeddata =function(){
    progress.max =song.duration;
    progress.value=song.currentTime;
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
    setInterval(()=>{progress.value=song.currentTime},100)
    
}

progress.onchange =function(){
    song.play();
    song.currentTime=progress.value;
    ctrl.classList.remove("fa-play")
    ctrl.classList.add("fa-pause")
}


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


    // /////
    // function searchYouTube() {
    //     var searchQuery = document.getElementById("searchQuery").value;
    
    //     // Your YouTube Data API key
    //     var apiKey = "AIzaSyA6sb5UpC9oo24Z7L-cUvC1HOwdaA-ax9o";
    
    //     // API URL for searching videos
    //     var apiUrl = "https://www.googleapis.com/youtube/v3/search?key=" + apiKey + "&part=snippet&type=video&q=" + encodeURIComponent(searchQuery);
    
    //     // Clear previous results
    //     document.getElementById("results").innerHTML = "";
    
    //     // Fetch data from the YouTube API
    //     fetch(apiUrl)
    //         .then(response => response.json())
    //         .then(data => {
    //             data.items.forEach(item => {
    //                 var videoTitle = item.snippet.title;
    //                 var videoId = item.id.videoId;
    //                 var videoThumbnail = item.snippet.thumbnails.default.url;
    
    //                 // Create HTML elements for displaying search results
    //                 var resultItem = document.createElement("div");
    //                 resultItem.innerHTML = "<h3>" + videoTitle + "</h3>" +
    //                                        "<a href='https://www.youtube.com/watch?v=" + videoId + "' target='_blank'>" +
    //                                        "<img src='" + videoThumbnail + "'></a>";
    
    //                 // Append the search result to the results container
    //                 document.getElementById("results").appendChild(resultItem);
    //             });
    //         })
    //         .catch(error => console.log(error));
    // }
    /////