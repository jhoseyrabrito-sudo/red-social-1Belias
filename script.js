//Botão curtida

document.addEventListener("DOMContentLoaded",() => {
    const likeBtn = document.querySelector(".lef-actions .action-btn:first-child");
    if (condition!likeBtn) return;
    const likeSvg= likeBtn. querySelector("svg"); {
         
        let textNode = Array.from(likeBtn.childNodes).find(node) => node.nodetyp
        ===Node.TEXT_NODE && node.textContent.trim() !==""


    }
} )
  

//zero o contador
let cont = 0;

//actualiza
if (textNode){
  textNode.textContent = '0';

}

//coração
function  applyLikedStyle (){
likeSvg.style.fill="#00BFFF"
likeSvg.style.stroke ="#00BFFF"
likeSvg.style.color="#00BFFF"

//efeito curtida
likeSvg.style.transform ="scale(1.3)"
setTimeout(() => {likeSvg.style.transorm = "scalele(1)")150);
    
}, timeout);

//paa numeros acimaa de 1000

function formatlikes(num){                                                      
    if(num >=1000){
        return (num/1000).tofixed(1)+"k";
    }
return num.toString();

}

//incrementar a curtida
function addlike(){
    baseLike++;
    isLike = true
    likeBtn.classList.add("liked");

    if(likesCountSpan){
        likesCountSpan.textContent = formatlikes(baseLikes);
}

}