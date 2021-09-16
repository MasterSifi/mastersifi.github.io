let index = {

  //insert header.html in header tag of index.html
  getHeader : function(){
  fetch('pages/header.html')
  .then(response => response.text())
  .then(data => document.querySelector("header").innerHTML = data);
  },
  
  //insert footer.html in footer tag of index.html
  getFooter : function(){
  fetch('pages/footer.html')
  .then(response => response.text())
  .then(data => document.querySelector("footer").innerHTML = data);
  }
}

index.getHeader();
index.getFooter();
