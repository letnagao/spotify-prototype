const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const repeatButton = document.getElementById("repeat");
const shuffleButton = document.getElementById("shuffle");
const audio = document.getElementById("audio");
const songImage = document.getElementById("song-image");
const songName = document.getElementById("song-name");
const songArtist = document.getElementById("song-artist");
const pauseButton = document.getElementById("pause");
const playButton = document.getElementById("play")
const playlistButton = document.getElementById("playlist");
const maxDuration = document.getElementById("max-duration");
const currentTimeRef = document.getElementById("current-time");
const progressBar = document.getElementById("progress-bar");
const playlistContainer = document.getElementById("playlist-container");
const closeButton = document.getElementById("close-button");
const playlistSongs = document.getElementById("playlist-songs");
const currentProgress = document.getElementById("current-progress");

let index;

let loop = true;

const songsList = [{
    name: "Make Me Move",
    link: "make-me-move.mp3",
    artist: "Culture Code",
    image: "make-me-move.jpg",
},
{
    name: "Where We Started",
    link: "where-we-started.mp3",
    artist: "Lost Sky",
    image: "where-we-started.jpg",
}, 
{
    name: "On & On",
    link: "on-on.mp3",
    artist: "Cartoon",
    image: "on-on.jpg",
},
{
    name: "Throne",
    link: "throne.mp3",
    artist: "Rival",
    image: "throne.jpg",
},
{
    name: "Need You Now",
    link: "need-you-now.mp3",
    artist: "Venemy",
    image: "need-you-now.jpg",
},
]