function f1(clickid){
if(document.getElementById(clickid).style.display=='none'){
document.getElementById(clickid).className ='bibentry'
document.getElementById(clickid).style.display='inline-block'
}
else{
document.getElementById(clickid).style.display='none'
}
}



function serviceselect(clickclass,clickid){
    const collection = document.getElementsByClassName(clickclass);
if(document.getElementById(clickid).value=='Expand'){
    document.getElementById(clickid).value='Collapse'
    }
    else{
    document.getElementById(clickid).value='Expand'
}
for (let i = 0; i < collection.length; i++) {
    if(collection[i].style.display=='none'){
        collection[i].style.display=null
    }
    else{
        collection[i].style.display='none'
    }
}
}