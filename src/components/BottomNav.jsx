import {Home, Music, User} from "lucide-react";
import {useState} from "react";

export default function BottomNav(){

const [active,setActive]=useState("home");


return(

<div className="bottom">


<button
onClick={()=>setActive("home")}
onContextMenu={(e)=>e.preventDefault()}
>
<Home/>
<span>Home</span>
</button>


<button
onClick={()=>setActive("playlist")}
onContextMenu={(e)=>e.preventDefault()}
>
<Music/>
<span>Playlist</span>
</button>


<button
onClick={()=>setActive("profile")}
onContextMenu={(e)=>e.preventDefault()}
>
<User/>
<span>Profile</span>
</button>


</div>

)

}
