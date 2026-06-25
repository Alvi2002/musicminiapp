import {Download,Plus} from "lucide-react";


export default function MusicCard({song}){


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


<button>

<Download size={22}/>

</button>


<button>

<Plus size={22}/>

</button>



</div>

)


}
