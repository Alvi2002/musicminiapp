import { useState } from "react";

import MusicCard from "../components/MusicCard";
import Search from "../components/Search";

import { songs } from "../data";


export default function Home({

  setPlaylist,
  playlist,
  setSong

}){


const [search,setSearch] = useState("");



const filteredSongs = songs.filter(song =>

song.title
.toLowerCase()
.includes(
search.toLowerCase()
)

||
song.artist
.toLowerCase()
.includes(
search.toLowerCase()
)

);



function addSong(song){


const alreadyAdded = playlist.find(
item => item.id === song.id
);



if(!alreadyAdded){


setPlaylist([

...playlist,

song

]);


}

}



return(


<div className="home">


<div className="header">


<h1>
Good Morning 👋
</h1>


<p>
Listen your favourite music
</p>


</div>



<Search

value={search}

setValue={setSearch}

/>



<h2>
Popular Now 🎵
</h2>



{

filteredSongs.length > 0 ?


filteredSongs.map(song => (


<MusicCard


key={song.id}


song={song}


addSong={addSong}


playSong={setSong}



/>


))


:


<p className="empty">

No song found

</p>


}



</div>


)


}
