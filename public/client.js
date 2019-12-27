console.log('Client-side code running');

window.onload = function(){
  const button = document.getElementById('myButton');
  button.addEventListener('click', function(e) {
    socket.emit('btnclick');
    console.log('button was clicked');
  });
}
