window.addEventListener('load', function () {
  new Glider(document.querySelector('.glider'), {
    slidesToShow: 1,
    draggable: true,
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }
  })
})
function sendMail(params) {
  var tempParams = {
    from_name: document.getElementById("fromName").value,
    message: document.getElementById("msg").value,
    tel: document.getElementById("tel").value
  };
  emailjs.send('gmail', 'template_8eyfhrt', tempParams)
    .then(function (res) {
      alert('Отправлено')
    })
}