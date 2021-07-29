console.log("Automatic answer!");
setTimeout(function() {
  npShowAnswers();
  document.getElementsByClassName('topSteps')[0].onclick = npShowAnswers;
  
}, 50);
