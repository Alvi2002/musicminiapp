import {Download,Plus} from "lucide-react";


export default function MusicCard({
song,
addSong
}){


function downloadSong(){

alert(
"Downloading "+song.title
)

}



return(

<div className="card">


<img src={song.image}/>



<div className="info">

<h3>
{song.title}
</h3>

<p>
{song.artist}
</p>


</div>



<button
onClick={downloadSong}
>

<Download/>

</button>




<button
onClick={()=>addSong(song)}
>

<Plus/>

</button>


</div>

)

}
