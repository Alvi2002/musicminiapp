import {useState} from "react";
import {searchYoutube} from "../api/youtube";


export default function Search({

setResults

}){


const [text,setText]=useState("");



async function handleSearch(){


if(!text)return;


const data =
await searchYoutube(text);


setResults(data);


}



return(

<div>


<input

className="search"

placeholder="Search YouTube music..."

value={text}


onChange={
e=>setText(e.target.value)
}


/>



<button

className="searchBtn"

onClick={handleSearch}

>

Search

</button>



</div>

)


}
