const container = document.getElementById('container');

const submitBtn = document.getElementById('submit');
const clearBtn = document.getElementById('clear');

const input = document.getElementById('boxNumber');
const search = document.getElementById('searchTerm');


// button functions

submitBtn.onclick = newBox;
clearBtn.onclick = clearBox;
search.addEventListener('keyup', function(event){ // enter button function
    if (event.keyCode === 13) {
    newBox()}
});

// unused search function that changes images while typing
// search.onkeyup = dynamicSearch;
// function dynamicSearch(){
//     clearBox();
//     newBox();
// }



function imageGen(search) {
    let numGen = Math.floor((Math.random() * 1000) + 1);

    return `<img src="https://source.unsplash.com/random/500x500/?sig=${numGen}&${search}" class="imgResult" width="200px" height="200px">`
}

function newBox() {
    document.getElementById("instruction").style.display = "none";

    for(i=0;i<input.value;i++){
        const box = document.createElement('div');
        box.classList.add("box");
        box.innerHTML = `${imageGen(search.value)}`;
        container.appendChild(box)

        
    }

}

        
function clearBox() {
    while (container.firstChild)
{
    container.removeChild(container.lastChild);
}
  const box = document.createElement('div');
  box.id = ("instruction");
  box.innerHTML = `Select # of images and search term`;
  container.appendChild(box)
}


