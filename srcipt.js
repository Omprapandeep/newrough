
async function main() {
    let a = await fetch("./audio/Dekho%20Na%20Dekho%20Na-%20Anuva%20Jain.mp3")
    let response = await a.text();
    let div = document.createElement("div")
    div.innerHTML=response
    console.log(div) 
    let songs=[]
    let ancors= div.getElementsByTagName("a")
    for (let index = 0; index < ancors.length; index++) {
        const e= ancors[index];
       
        if (e.href.endsWith(".mp3")) {
            songs.push(e.href)
        }
    }
    console.log(songs[0])
    return songs;

}
main()
document.querySelector(".box").addEventListener("click",async()=>{
   let track =await main()
    const adf= new Audio(track[0])
    adf.play()
})
    
