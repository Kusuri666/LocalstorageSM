function rld(){
    var x = document.getElementById('inpfn').value;
    var y = document.getElementById('inpln').value;
    var f = localStorage.length
    var l = localStorage.length
    return localStorage.setItem(f,x) + localStorage.setItem(l,y) + window.location.reload()
;
}



function wari(){
 var x = [];
 for(i=0;i<localStorage.length;i++){
     x.push(localStorage.getItem(i))
 }
  document.getElementById('show').innerHTML= x;

}

function sup(){
    localStorage.clear();
}