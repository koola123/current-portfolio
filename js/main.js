let newsLine = document.querySelector('.news-line');
let closeButton = document.querySelector('.close-icon');


function closeNewsLine() {
  closeButton.addEventListener('click', function() {
    newsLine.classList.add('close');
  })
}

closeNewsLine();
