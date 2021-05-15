
window.addEventListener('load', function () {
  menuButton = document.querySelector('.nav-button');
  nav = document.querySelector('nav');
  logo = document.querySelector('.logo');
  body = document.querySelector('body');
  link = document.querySelectorAll('.nav li');
  link.forEach(function (item, idx) {
    item.addEventListener('click', function () {
      body.classList.toggle('no-scroll');
      menuButton.classList.toggle('active__button');
      nav.classList.toggle('active__nav');
      logo.classList.toggle('active__logo');
    })
  });
  menuButton.addEventListener('click', function () {
    menuButton.classList.toggle('active__button');
    nav.classList.toggle('active__nav');
    logo.classList.toggle('active__logo');
    body.classList.toggle('no-scroll');
  });


  document.querySelectorAll('a[href^="#"').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      let href = this.getAttribute('href').substring(1);
      const scrollTarget = document.getElementById(href);
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition;
      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
      });
    });
  });
  new Glider(document.querySelector('.glider'), {
    slidesToShow: 1,
    draggable: true,
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }
  })
  let inputs = document.querySelectorAll('#tel');
  let im = new Inputmask('+7 (999) 999-99-99');
  im.mask(inputs);
})
function sendMail(params) {
  var tempParams = {
    from_name: document.getElementById("fromName").value,
    message: document.getElementById("msg").value,
    tel: document.getElementById("tel").value
  };
  emailjs.send('service_letkm73', 'template_8eyfhrt', tempParams)
}