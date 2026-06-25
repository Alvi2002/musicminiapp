import {
Download,
Plus,
Play
}
from "lucide-react";


import {
downloadSong
}
from "../api/download";



export default function MusicCard({

song,
addSong,
playSong

}){


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

onClick={()=>playSong(song)}

>

<Play/>

</button>





<button

onClick={()=>addSong(song)}

>

<Plus/>

</button>





<button

onClick={()=>downloadSong(

song.audio,

song.title

)}

>

<Download/>

</button>



</div>


)

}
