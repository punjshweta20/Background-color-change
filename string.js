function change(color){
    document.body.style.background=color;
    let abc=document.getElementsByClassName("samecolor");
    if((color=='#000000')){
        for(let i of abc){
            i.style.color="white";
        }
    }
    for(let i of abc){
        i.style.color="black";
    }
}