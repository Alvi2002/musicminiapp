import { useState } from "react";

import Search from "../components/Search";
import MusicCard from "../components/MusicCard";

import { searchYoutube } from "../api/youtube";



export default function Home({

setPlaylist,
playlist,
setSong

}){


const [results,setResults] = useState([]);

const [loading,setLoading] = useState(false);



async function handleSearch(query){


try{


setLoading(true);



const data = await searchYoutube(query);



setResults(data);



}

catch(error){


console.log(error);


setResults([]);


}

finally{


setLoading(false);


}



}




function addSong(song){


const exists =
playlist.find(
item => item.id === song.id
);



if(!exists){


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

Search Music 🎧

</h1>


<p>

Find your favourite songs

</p>


</div>





<Search

setResults={handleSearch}

/>





{

loading &&

<p className="empty">

Searching...

</p>

}





<h2>

Results 🎵

</h2>





{

results.length > 0 ?



results.map(song => (



<MusicCard


key={song.id}


song={song}


addSong={addSong}


playSong={setSong}


/>


))


:


!loading &&

<p className="empty">

Search a song to start

</p>



}





</div>


)


}
