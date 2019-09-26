
function display(ar,K){
    let counter=0;
    for(let i=0;i<ar.length-1;i++){
        for(let j=i+1;j<ar.length;j++){
            if((ar[i]+ar[j])%K===0){
                affiche(ar[i],ar[j],ar[i]+ar[j])
                counter++
            }
        }
    }
    document.querySelector("#afficheur").innerHTML+="<p>Nous avons "+counter+" paire(s) qui correspond(ent).<p>"
}

function affiche(i,j,sum){
    let randomColor="rgb("+randomVal(0,255)+","+randomVal(0,255)+","+randomVal(0,255)+")"
    document.querySelector("#afficheur").innerHTML+=
        '<p>'+
		'<span style="color:'+randomColor+'">('+i+','+j+') : </span>'+
        '<span class="textBold">'+sum+'</span>'+
        '</p>'
}

function randomVal (min, max){
    return parseInt(Math.random()*(max-min))+min;
}

window.onload=function(){
    document.querySelector("#button").onclick=function(){
		let tab=[]
		for(let i=0;i<20;i++){
			tab.push(randomVal(0,20))
		}
		display(tab,5)
	}
}