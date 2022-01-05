

function getJoke() {
    
    
    fetch('https://api.blablagues.net/?rub=blagues')
    .then ((res) => res.json())
    .then ((data) => {
        const header = document.getElementById('header');
        const content = document.getElementById('content');
        
        header.textContent = data.data.content.text_head;
        content.textContent = data.data.content.text!==''
        ? data.data.content.text
        : data.data.content.text_hidden;
    })
}

getJoke();

document.body.addEventListener('click', getJoke)
    
