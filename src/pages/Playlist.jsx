import MusicCard from "../components/MusicCard";


export default function Playlist({

playlist,
setSong

}){


return(

<div className="home">


<h1>
Your Playlist
</h1>



{

playlist.map(song=>(


<MusicCard

key={song.id}

song={song}

playSong={setSong}

addSong={()=>{}}

/>


))


}


</div>

)


}
