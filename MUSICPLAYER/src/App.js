import React, { useState, useRef, useEffect } from "react";
import "./App.css";

const albums = [
  {
    id: "1",
    name: "MS DHONI ALBUM",
    image: "https://i.ytimg.com/vi/kJy2M3bD4Dw/maxresdefault.jpg",
    songs: [
      { title: "Le padha padha", src: "/songs/song12.mp3" },
      { title: "Ninnevarinka premistharu ", src: "/songs/song13.mp3" },
      { title: "Nuvve pranayaagni loo", src: "/songs/song14.mp3" },
      { title: "Mari Maree", src: "/songs/song15.mp3" },
      { title: "Ninne Tholi Prema Lo", src: "/songs/song16.mp3" },
      { title: "Prathi Galli Lo Dhoni Yee", src: "/songs/song17.mp3" },
    ],
  },
  {
    id: "2",
    name: "MASTER ALBUM",
    image: "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2020/12/pjimage-2020-12-31t104110-1609391482.jpg",
    songs: [
      { title: "Master Coming", src: "/songs/song18.mp3" },
      { title: "Andham Vadi Choopera", src: "/songs/song19.mp3" },
      { title: "Chitti Story", src: "/songs/song20.mp3" },
      { title: "Quit Cheyyara", src: "/songs/song21.mp3" },
      { title: "Master the Blaster", src: "/songs/song22.mp3" },
      { title: "Modhalettu", src: "/songs/song23.mp3" },
      { title: "Master Raid", src: "/songs/song24.mp3" },
    ],
  },
  {
    id: "3",
    name: "TUJH BHI RAB DEKTHA HAI ALBUM",
    image: "https://i.ytimg.com/vi/NhQdypK7PwU/maxresdefault.jpg",
    songs: [
      { title: "Cyber Groove", src: "/songs/song14.mp3" },
      { title: "Neon Dreams", src: "/songs/song15.mp3" },
    ],
  },
  {
    id: "4",
    name: "SITHA RAMAM ALBUM",
    image: "https://i.ytimg.com/vi/OHGBFSas6-o/maxresdefault.jpg",
    songs: [
      { title: "Study Session", src: "/songs/song16.mp3" },
      { title: "Midnight Coffee", src: "/songs/song17.mp3" },
    ],
  },
  {
    id: "5",
    name: "TITANIC ALBUM",
    image: "https://i.ytimg.com/vi/qupHhgsJRrk/maxresdefault.jpg",
    songs: [
      { title: "Summer Vibes", src: "/songs/song18.mp3" },
      { title: "Dance Floor", src: "/songs/song19.mp3" },
    ],
  },
  {
    id: "6",
    name: "PEAKY BLINDERS ALBUM",
    image: "https://i.ytimg.com/vi/bpiJptF7Wnc/maxresdefault.jpg",
    songs: [
      { title: "Smooth Jazz", src: "/songs/song20.mp3" },
      { title: "Late Night Jazz", src: "/songs/song21.mp3" },
    ],
  },
  {
    id: "7",
    name: "LA LA LAND ALBUM",
    image: "https://i.ytimg.com/vi/dqV19zSl_Ik/maxresdefault.jpg",
    songs: [
      { title: "Moonlight Sonata", src: "/songs/song22.mp3" },
      { title: "Four Seasons", src: "/songs/song23.mp3" },
    ],
  },
  {
    id: "8",
    name: "WEDNESDAY ALBUM",
    image: "https://tse1.mm.bing.net/th?id=OIP.glMgR8bRb7U6NCfV3bU80wHaEK&pid=Api&P=0&h=180",
    songs: [
      { title: "Urban Groove", src: "/songs/song24.mp3" },
      { title: "Rap Flow", src: "/songs/song25.mp3" },
    ],
  },
  {
    id: "9",
    name: "SPIDER MAN ALBUM",
    image: "https://i.ytimg.com/vi/E8t0ArvMKTk/maxresdefault.jpg",
    songs: [
      { title: "Forest Echoes", src: "/songs/song26.mp3" },
      { title: "Mountain Air", src: "/songs/song27.mp3" },
    ],
  },
  {
    id: "10",
    name: "THE BATMAN ALBUM",
    image: "https://i.ytimg.com/vi/3rCo94BFIe8/maxresdefault.jpg",
    songs: [
      { title: "Soulful Nights", src: "/songs/song28.mp3" },
      { title: "Groove Soul", src: "/songs/song29.mp3" },
    ],
  },
  {
    id: "11",
    name: "KRISH ALBUM",
    image: "http://i1.ytimg.com/vi/dqU3B829igs/maxresdefault.jpg",
    songs: [
      { title: "Electric Pulse", src: "/songs/song30.mp3" },
      { title: "Party Anthem", src: "/songs/song31.mp3" },
    ],
  },
  {
    id: "12",
    name: "KALKI 2898AD ALBUM",
    image: "https://newsd.in/wp-content/uploads/2024/04/Kalki-2898-AD-Prabhas-and-Deepika-Padukones-Highly-Anticipated-Movie-Gets-New-Release-Date.jpg",
    songs: [
      { title: "Acoustic Bliss", src: "/songs/song32.mp3" },
      { title: "Guitar Melodies", src: "/songs/song33.mp3" },
    ],
  },
  {
    id: "13",
    name: "PANJA ALBUM",
    image: "https://lh5.googleusercontent.com/-d33ZyMHlj6A/TrV25qdFnII/AAAAAAAAAKs/PkeMiniwmz0/s1600/Panjaa-Movie-Poster-Designs-11.jpg",
    songs: [
      { title: "80s Groove", src: "/songs/song34.mp3" },
      { title: "Retro Vibes", src: "/songs/song35.mp3" },
    ],
  },
  {
    id: "14",
    name: "OM SHANTI OM ALBUM",
    image: "https://i.pinimg.com/originals/7f/d0/a0/7fd0a03155512bf461154405f213df93.jpg",
    songs: [
      { title: "Country Nights", src: "/songs/song36.mp3" },
      { title: "Southern Charm", src: "/songs/song37.mp3" },
    ],
  },
  {
    id: "15",
    name: "KATHI ALBUM",
    image: "https://static.moviecrow.com/gallery/20141005/46559-10571989_1534094600159439_8053101441068098602_o.jpg",
    songs: [
      { title: "Desi Groove", src: "/songs/song38.mp3" },
      { title: "Bollywood Hits", src: "/songs/song39.mp3" },
    ],
  },
  {
    id: "16",
    name: "PUSHPA ALBUM",
    image: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1ldx3F.img?w=1006&h=566&m=4&q=91",
    songs: [
      { title: "pushpa pushpa", src: "/songs/song5.mp3" },
      { title: "srivalli ", src: "/songs/song6.mp3" },
      { title: "peelings", src: "/songs/song7.mp3" },
      { title: "oo Antavaa", src: "/songs/song8.mp3" },
      { title: "Dhammunte Pattukoraa", src: "/songs/song9.mp3" },
      { title: "sooseki", src: "/songs/song10.mp3" },
      { title: "gango reuka thalli jatharaa", src: "/songs/song11.mp3" },


    ],
  },
];

function App() {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [likedSongs, setLikedSongs] = useState({});
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const audioRef = useRef(null);

  const categories = {
    "HIT SONGS ALBUM": albums.slice(0, 4),
    "HOLLYWOOD HITS ALBUM": albums.slice(4, 8),
    "SUPER HEROES HITS ALBUM": albums.slice(8, 12),
    "EVERGREEN HITS ALBUM": albums.slice(12),
  };

  // Function to filter albums and songs based on search query
  const filterAlbumsAndSongs = (query) => {
    const filteredCategories = {};
    Object.entries(categories).forEach(([category, albumsInCategory]) => {
      const filteredAlbums = albumsInCategory.filter((album) => {
        const albumMatches = album.name.toLowerCase().includes(query.toLowerCase());
        const songMatches = album.songs.some((song) =>
          song.title.toLowerCase().includes(query.toLowerCase())
        );
        return albumMatches || songMatches;
      });
      if (filteredAlbums.length > 0) {
        filteredCategories[category] = filteredAlbums;
      }
    });
    return filteredCategories;
  };

  const filteredCategories = searchQuery ? filterAlbumsAndSongs(searchQuery) : categories;

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play().catch((error) => console.log("Playback prevented:", error));
      }
    }
  }, [currentSong, isPlaying]);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleLike = (songId) => {
    setLikedSongs((prevLikedSongs) => ({
      ...prevLikedSongs,
      [songId]: !prevLikedSongs[songId], // Toggle like state
    }));
  };

  const handleShare = () => {
    const shareableLink = `${window.location.origin}/songs/${currentSong.src}`;
    navigator.clipboard.writeText(shareableLink).then(() => {
      alert("Song link copied to clipboard!");
    });
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = currentSong.src;
    link.download = currentSong.title;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={styles.container}>
      <div className="bubble-animation"></div>
      <h1 style={styles.heading}>🎶 My Music Player 🎶</h1>
      <p style={styles.slogan}>Experience The Joy Of Music</p>
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search for albums or songs..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={styles.searchBar}
      />
      {selectedAlbum ? (
        <div>
          <button onClick={() => setSelectedAlbum(null)} style={styles.backButton}>⬅ Back</button>
          <h2 style={styles.albumTitle}>{selectedAlbum.name}</h2>
          <img src={selectedAlbum.image} alt={selectedAlbum.name} style={styles.albumImageLarge} />
          <ul style={styles.songList}>
            {selectedAlbum.songs.map((song, index) => (
              <li key={index} style={styles.songItem}>
                <div style={styles.songTitle} onClick={() => {
                  setCurrentSong(song);
                  setIsPlaying(true);
                }}>
                  {song.title}
                </div>
                <div style={styles.songActions}>
                  <button
                    onClick={() => handleLike(song.src)} // Use song.src as the unique ID
                    style={styles.actionButton}
                  >
                    {likedSongs[song.src] ? "❤️" : "🤍"} {/* Red heart if liked, white heart if not */}
                  </button>
                  <button onClick={handleShare} style={styles.actionButton}>🔗 Share</button>
                  <button onClick={handleDownload} style={styles.actionButton}>⬇ Download</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          {Object.entries(filteredCategories).map(([category, albumsInCategory]) => (
            <div key={category}>
              <h2 style={styles.categoryHeading}>{category}</h2>
              <div style={styles.albumGrid}>
                {albumsInCategory.map((album) => (
                  <div key={album.id} style={styles.albumBox} onClick={() => setSelectedAlbum(album)}>
                    <img src={album.image} alt={album.name} style={styles.albumImage} />
                    <h3 style={styles.albumName}>{album.name}</h3>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
      {currentSong && (
        <div style={styles.playerControls}>
          <h3>Now Playing: {currentSong.title}</h3>
          <audio ref={audioRef} src={currentSong.src} onEnded={() => setIsPlaying(false)}></audio>
          <button onClick={togglePlayPause} style={styles.playButton}>
            {isPlaying ? "⏸ Pause" : "▶ Play"}
          </button>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    background: "linear-gradient(135deg, #1e3c72, #2a5298)",
    minHeight: "100vh",
    padding: "20px",
    overflow: "hidden",
    position: "relative",
  },
  heading: {
    color: "#fff",
    fontSize: "2.5rem",
    fontFamily: "'Pacifico', cursive",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
    marginBottom: "10px",
  },
  slogan: {
    color: "#fff",
    fontSize: "1.5rem",
    fontFamily: "'Pacifico', cursive",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
    marginBottom: "20px",
    fontStyle: "italic",
  },
  searchBar: {
    width: "80%",
    maxWidth: "500px",
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "10px",
    border: "none",
    outline: "none",
    marginBottom: "20px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
  },
  categoryHeading: {
    color: "#fff",
    fontSize: "1.8rem",
    fontFamily: "'Pacifico', cursive",
    textAlign: "left",
    marginLeft: "20px",
    marginTop: "20px",
    marginBottom: "10px",
  },
  albumGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "20px",
    padding: "20px",
  },
  albumBox: {
    background: "rgba(255, 255, 255, 0.1)",
    borderRadius: "12px",
    padding: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    cursor: "pointer",
    transition: "transform 0.3s, background 0.3s",
  },
  albumImage: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  albumImageLarge: {
    width: "100%",
    maxWidth: "500px",
    height: "250px",
    objectFit: "cover",
    borderRadius: "8px",
    margin: "20px auto",
  },
  albumName: {
    fontSize: "1.2rem",
    marginTop: "10px",
    color: "#fff",
  },
  albumTitle: {
    color: "#fff",
    fontSize: "2rem",
    fontFamily: "'Pacifico', cursive",
  },
  songList: {
    listStyle: "none",
    padding: 0,
  },
  songItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    background: "rgba(255, 255, 255, 0.1)",
    margin: "5px",
    borderRadius: "5px",
    color: "#fff",
    transition: "background 0.3s",
  },
  songTitle: {
    flex: 1,
    cursor: "pointer",
  },
  songActions: {
    display: "flex",
    gap: "10px",
  },
  actionButton: {
    padding: "5px 10px",
    fontSize: "0.9rem",
    borderRadius: "5px",
    background: "#ff758c",
    color: "white",
    border: "none",
    cursor: "pointer",
    transition: "background 0.3s",
  },
  playerControls: {
    marginTop: "20px",
  },
  playButton: {
    padding: "10px 20px",
    fontSize: "1.2rem",
    borderRadius: "10px",
    background: "#ff758c",
    color: "white",
    border: "none",
    cursor: "pointer",
    transition: "background 0.3s",
  },
  backButton: {
    padding: "8px 15px",
    fontSize: "1rem",
    borderRadius: "8px",
    background: "#ffffff",
    cursor: "pointer",
    transition: "background 0.3s",
  },
};

export default App;