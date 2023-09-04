var progressBar = document.querySelector('.loading-bar');
var width = 0;
var loadingInterval = setInterval(function() {
  width += 1;
  progressBar.style.width = width + '%';
  if (width >= 100) {
    clearInterval(loadingInterval);
  }
}, 10);

window.addEventListener('load', function() {
  var progressBar = document.querySelector('.loading-bar');
  progressBar.style.width = '100%';
  setTimeout(function() {
    progressBar.style.display = 'none';
    var loading = document.querySelector('.loading');
    loading.style.display = 'none';
  }, 1100);
});

let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('fa-sun');
    document.body.classList.toggle('dark-mode');
};  


const btnselect = document.querySelectorAll('.select-info');
const newsslide = document.querySelectorAll('.page-home');
const newsslidenext = document.querySelector('.page-home');
const xinfo = document.querySelectorAll('.x-info');

const listslide = function(manual) {
  btnselect.forEach((btn) => {
    btn.classList.remove("active");
  });

  newsslide.forEach((news) => {
    news.classList.remove("active");
  });

  btnselect[manual].classList.add("active");
  newsslide[manual].classList.add("active");

  xinfo.forEach((indexinfo) =>  {
    indexinfo.addEventListener("click", () => {
        newsslide.forEach((news) => {
            news.classList.remove("active");
            ScrollReveal().destroy(news);
            news.style = 'none';
            newsslidenext.classList.add('active');
            ScrollReveal().reveal(newsslidenext, { origin: 'bottom' });
          });
    })
  });

}

btnselect.forEach((btn, i) => {
  btn.addEventListener("click",() => {
    listslide(i);
    ScrollReveal().reveal(newsslide[1], { origin: 'right' });
    ScrollReveal().reveal(newsslide[2], { origin: 'top' });
    ScrollReveal().reveal(newsslide[3], { origin: 'left' });
    ScrollReveal().reveal(newsslide[4], { origin: 'bottom' });
  });
});

ScrollReveal({ 
  reset: true,
  distance: '20px',
  duration : 700,
  delay : 0,
});

ScrollReveal().reveal('.home,.home-about,.home-projects', { origin: 'bottom' });



