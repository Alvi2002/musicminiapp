const API_URL =
"https://your-backend-url.com";


export async function searchYoutube(query){


const res =
await fetch(
`${API_URL}/search?q=${query}`
);


const data =
await res.json();


return data;


}
