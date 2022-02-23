let headerFooter = {

  //insert header.html in header tag of a page
  getHeader : function(){
  fetch('pages/header.html')
  .then(response => response.text())
  .then(data => document.querySelector("header").innerHTML = data);
  },
  
  //insert footer.html in footer tag of a page
  getFooter : function(){
  fetch('pages/footer.html')
  .then(response => response.text())
  .then(data => document.querySelector("footer").innerHTML = data);
  }
}

headerFooter.getHeader();
headerFooter.getFooter();
