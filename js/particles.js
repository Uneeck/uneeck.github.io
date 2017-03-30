document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('hero'), {
    dotColor: 'rgba(255, 255, 255, 0.1)',
    lineColor: 'rgba(255, 255, 255, 0.1)'
  });
  var intro = document.getElementById('intro');
  intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
}, false);