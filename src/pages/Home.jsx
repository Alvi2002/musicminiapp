import MusicCard from "../components/MusicCard";

import {songs} from "../data";



export default function Home({
setPlaylist,
playlist
}){



function addSong(song){


const exists =
playlist.find(
x=>x.id===song.id
);



if(!exists){

setPlaylist([
...playlist,
song
])

}

}



return(

<div className="home">


<h1>
Good Morning
</h1>



<div className="search">

🔍 Search music

</div>



<h2>
Popular Now
</h2>



{

songs.map(song=>(

<MusicCard

key={song.id}

song={song}

addSong={addSong}

/>

))

}



</div>

)


}
