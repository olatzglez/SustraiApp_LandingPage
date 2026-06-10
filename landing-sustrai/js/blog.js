(function () {
  window.openArticle = function (id) {
    document.getElementById('view-index').style.display = 'none';
    document.querySelectorAll('.article-wrap').forEach(function (el) {
      el.classList.remove('open');
      el.style.display = 'none';
    });
    var target = document.getElementById('view-' + id);
    target.style.display = 'block';
    target.classList.add('open');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    observeReveals();
  };

  window.closeArticle = function () {
    document.querySelectorAll('.article-wrap').forEach(function (el) {
      el.classList.remove('open');
      el.style.display = 'none';
    });
    document.getElementById('view-index').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  function observeReveals() {
    var reveals = document.querySelectorAll('.reveal');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  }

  observeReveals();
})();
