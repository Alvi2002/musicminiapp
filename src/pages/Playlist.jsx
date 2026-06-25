export default function Playlist({
playlist
}){


return(

<div className="home">


<h1>
Your Playlist
</h1>


{

playlist.length===0 ?

<p>
No songs yet
</p>


:

playlist.map(song=>(


<div className="card">


<img src={song.image}/>


<div>

<h3>
{song.title}
</h3>


<p>
{song.artist}
</p>


</div>


</div>


))


}


</div>


)

}
