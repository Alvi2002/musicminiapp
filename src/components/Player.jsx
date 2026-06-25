import {
useRef,
useState,
useEffect
}
from "react";


import {

Play,

Pause,

X,

SkipBack,

SkipForward

}

from "lucide-react";





export default function Player({

song,

setSong

}){



const audioRef = useRef(null);



const [playing,setPlaying] = useState(false);


const [progress,setProgress] = useState(0);


const [duration,setDuration] = useState(0);






useEffect(()=>{


if(song && audioRef.current){


audioRef.current.play();


setPlaying(true);


}


},[song]);





function togglePlay(){


if(!audioRef.current)
return;



if(playing){


audioRef.current.pause();


}

else{


audioRef.current.play();


}



setPlaying(!playing);


}






function updateProgress(){


const current =
audioRef.current.currentTime;



setProgress(current);



}







function formatTime(time){


if(!time)
return "0:00";



const min =
Math.floor(time/60);



const sec =
Math.floor(time%60);



return `${min}:${sec
.toString()
.padStart(2,"0")}`;


}






if(!song)
return null;





return(



<div className="player">



<img

src={song.image}

/>





<div className="playerInfo">


<h4>

{song.title}

</h4>


<p>

{song.artist}

</p>



<input


type="range"


min="0"


max={duration}


value={progress}



onChange={(e)=>{


audioRef.current.currentTime =
e.target.value;



}}


/>



<div className="time">


<span>

{formatTime(progress)}

</span>


<span>

{formatTime(duration)}

</span>



</div>



</div>





<button>


<SkipBack size={18}/>


</button>






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





<button>


<SkipForward size={18}/>


</button>





<button

onClick={()=>{


audioRef.current.pause();


setSong(null);


}}


>


<X/>


</button>





<audio


ref={audioRef}



src={song.audio}



onTimeUpdate={updateProgress}



onLoadedMetadata={()=>{


setDuration(

audioRef.current.duration

);


}}



/>



</div>



)


}
