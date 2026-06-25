import {
  retrieveLaunchParams
} from "@telegram-apps/sdk";


export function getTelegramUser(){


try{


const {tgWebAppData}=
retrieveLaunchParams();


return tgWebAppData?.user || null;


}

catch(error){

return null;

}


}
