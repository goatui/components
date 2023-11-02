anime({
  targets: '.banner-logo path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1500,
  delay: function(el, i) {
    return i * 250;
  },
  direction: 'alternate',
  loop: false,
});
document.body.addEventListener('mousemove', evt => {
  document.querySelectorAll('.banner-logo .head').forEach(headPath => {
    headPath.style.transform = `rotate(${15 - (evt.clientY / document.body.clientHeight) * 60}deg)`;
    if ((evt.clientX / document.body.clientWidth) * 100 > 50) {
      document.querySelector('.banner-logo').style.transform = ' rotateY(180deg)';
    } else {
      document.querySelector('.banner-logo').style.transform = ' rotateY(0deg)';
    }
  });
});
