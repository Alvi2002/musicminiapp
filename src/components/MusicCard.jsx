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



<img

src={
song.image ||
"https://picsum.photos/300"
}

/>




<div className="info">



<h3>

{song.title}

</h3>



<p>

{song.artist ||
"YouTube Music"}

</p>



</div>





<button


onClick={()=>playSong(song)}


title="Play"


>


<Play size={22}/>


</button>





<button


onClick={()=>addSong(song)}


title="Add Playlist"


>


<Plus size={22}/>


</button>





<button


onClick={()=>downloadSong(

song.audio,

song.title

)}


title="Download"


>


<Download size={22}/>


</button>





</div>



)


}
