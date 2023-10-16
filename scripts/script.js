window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("back-to-top").style.display = "block";
  } else {
    document.getElementById("back-to-top").style.display = "none";
  }
}

document.getElementById('back-to-top').addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({top: 0, behavior: 'smooth'});
});
