let newsLine = document.querySelector('.news-line');
let closeButton = document.querySelector('.close-icon');


function closeNewsLine() {
  closeButton.addEventListener('click', function() {
    newsLine.classList.add('close');
  })
}
closeNewsLine();

let menuBtn = document.querySelector('.menu-btn').addEventListener('click', function() {
  document.querySelector('.navigation-list').classList.toggle('show')
})
