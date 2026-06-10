(function () {
  var reveals = document.querySelectorAll('.reveal');
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  reveals.forEach(function (el) { io.observe(el); });

  window.toggleTab = function (btn) { btn.classList.toggle('active'); };

  window.submitForm = function () {
    var nombre = document.getElementById('nombre').value.trim();
    var email  = document.getElementById('email').value.trim();
    var legal  = document.getElementById('legal').checked;
    if (!nombre || !email || !legal) {
      alert('Por favor, rellena tu nombre, email y acepta las condiciones.');
      return;
    }
    document.getElementById('form-fields').style.display = 'none';
    document.getElementById('form-success').style.display = 'block';
  };
})();
