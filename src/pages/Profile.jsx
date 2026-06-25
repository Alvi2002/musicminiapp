import {
useEffect,
useState
}
from "react";


import {
getTelegramUser
}
from "../telegram/telegram";



export default function Profile(){


const [user,setUser]=useState(null);



useEffect(()=>{


const data =
getTelegramUser();


setUser(data);



},[]);




return(

<div className="profile">


<img

src={
user?.photo_url ||
"https://picsum.photos/200"
}

/>



<h1>

{

user?.first_name ||

"Telegram User"

}


</h1>



<p>

@

{

user?.username ||

"unknown"

}

</p>



<p>

ID:

{

user?.id ||

"00000"

}

</p>



<div className="stats">


<div>

0

<br/>

Played

</div>


<div>

0

<br/>

Liked

</div>



<div>

0

<br/>

Downloads

</div>



</div>



</div>

)


}
