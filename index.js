const container = document.getElementById('container');

const submitBtn = document.getElementById('submit');
const clearBtn = document.getElementById('clear');

const input = document.getElementById('boxNumber');
const search = document.getElementById('searchTerm');



submitBtn.onclick = newBox;
clearBtn.onclick = clearBox;



function imageGen(search) {
    let numGen = Math.ceil((Math.random() * 1000) + 1);

    return `<img src="https://source.unsplash.com/random/500x500/?sig=${numGen}&${search}" class="imgResult" width="200px" height="200px">`
}

function newBox() {
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
    container.removeChild(container.lastChild)
}
}

