import {useRef,useState} from "react";
import {
Play,
Pause,
X
} from "lucide-react";


export default function Player({
song,
setSong
}){


const audioRef = useRef();


const [playing,setPlaying]=useState(false);



function togglePlay(){


if(playing){

audioRef.current.pause();

}
else{

audioRef.current.play();

}


setPlaying(!playing);


}



if(!song){

return null;

}



return(

<div className="player">


<img src={song.image}/>



<div className="playerInfo">


<h4>
{song.title}
</h4>

<p>
{song.artist}
</p>


</div>




<button
onClick={togglePlay}
>

{

playing ?

<Pause/>

:

<Play/>

}

</button>



<button
onClick={()=>setSong(null)}
>

<X/>

</button>



<audio
ref={audioRef}
src={song.audio}
/>



</div>

)

}
