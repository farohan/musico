//Two functions for opening sidebar in index.html.

function openSideBar() {
    document.getElementById('sidebar').style.width = '33vw';
}

function closeSideBar() {
    document.getElementById('sidebar').style.width = '0';
}

//Collapsible works in manager.html because of this code.

const collItems = document.getElementsByClassName("storage-btn");
let i;

for (i = 0; i < collItems.length; i++) {
  collItems[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
