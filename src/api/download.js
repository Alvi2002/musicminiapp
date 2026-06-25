export function downloadSong(url,name){


const link =
document.createElement("a");


link.href=url;


link.download=name;


document.body.appendChild(link);


link.click();


document.body.removeChild(link);


}
