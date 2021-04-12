let d1 = document.querySelector('#d1');
let d1p1 = document.querySelector('#d1p1');

//d1.addEventListener('click', function(){alert('div clique')});
d1.addEventListener('mouseover', function(){this.style.backgroundColor='blue'});
d1.addEventListener('mouseout', function(){this.style.backgroundColor='green'});