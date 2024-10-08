const obtenerMemes1 = async ()=>{
    const memeContainers= document.getElementById('list-memes');
    const memeTemplate = document.getElementById('meme')

    const request = await fetch('https://api.imgflip.com/get_memes');
    const response = await request.json();
    console.log(response);

    response.data.memes.slice(0,16).forEach(meme=>{
        console.log(meme);
        const newMemeCard = memeTemplate.cloneNode(true);
        const img = newMemeCard.querySelector('img')
        img.src= meme.url;
        memeContainers.appendChild(newMemeCard)
    });
    memeTemplate.remove();    
}
obtenerMemes1()

// Walter Cobacango
