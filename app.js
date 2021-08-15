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

//TODO: File size validation, so bad users don't put in a huge file to crash my system.

//TODO: File scanning and pushing it into an array of music files that the user already has.

//Note: The user will have a starter kit of Vivaldi's Four Seasons, 
//but they can delete those or keep those and add new songs.
