const tUbahWarna = document.getElementById('tUbahWarna');
tUbahWarna.onclick = function(){
    // document.body.style.backgroundColor = 'lightgreen';
    // document.body.setAttribute('class', 'biru-muda');
    document.body.classList.toggle('dark-mode');  
}
