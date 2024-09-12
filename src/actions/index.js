import { password, username } from './secrets.js';
export const RECIEVE_MEMES='RECEIVE MEMES';
export const NEW_MEME="NEW_MEME";
function recieveMemes(json){
    const {memes}=json.data;  //we want our json data to go into memes
    return{
        type:RECIEVE_MEMES,  //by help of receiveMemes function,we have to get json data that imgFlip website will provife us and after getting the data we have to pass it in memes variable
        memes,
    }
}
function fetchMemesJson(){
    return fetch("https://api.imgflip.com/get_memes")
    .then(response => response.json())   //creates a promise
}
export function fetchMemes(){
    return function(dispatch){  //dispatch is the method used to dispatch the actions and triggers changes to the store
        return fetchMemesJson()
        .then(json => dispatch(recieveMemes(json)))    //to get our menes

    }
}
export function newMeme(meme){
    return{
        type:"NEW_MEME",
        meme,
    }
}
function postMemeJson(params){
params["username"]=username;
params["password"]=password;
const bodyParams=Object.keys(params).map(key =>{
    return encodeURIComponent(key)+"=" + encodeURIComponent(params[key]);
}).join("&"); //route params are parameters whose values are set dynamically in a page url
console.log("bodyParams",bodyParams);
return fetch("https://api.imgflip.com/caption_image",{
    method: "POST",
    headers:{
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: bodyParams
}).then(response => response.json());
}
export function createMeme(new_meme_object) {
    return function(dispatch) {
        return postMemeJson(new_meme_object)
            .then(response => {
                const meme = {
                    id: response.data.id,
                    url: response.data.url, // Ensure you get the URL here
                    name: new_meme_object.text0 + " " + new_meme_object.text1 // or adjust as needed
                };
                dispatch(newMeme(meme));
            });
    };
}