const imgs='https://raw.githubusercontent.com/MTN73/landscape-gallery/main/imgs.json';

const rowHeight = 300;

let scroll;
window.addEventListener("scroll", (event) => {
    scroll = this.scrollY;
});

let info;
    fetch(imgs)
    .then(response => response.json())
    .then(data => {
        info = data;

        //arrange in random order

        let count = 0;
        for (const description of info["DESCRIPTIONS"]){
            let card = document.createElement("div");
            card.id = "card"+count;
            let img = document.createElement("img");
            img.id = "img"+count;
            //only if is seen by user
            img.src = info["URLS"][count];
            card.appendChild(img);
            
            let desc = document.createElement("p");
            desc.id = "desc"+count;
            let descContent = document.createTextNode(description);
            desc.appendChild(descContent);
            card.appendChild(desc);

            document.getElementById("container").appendChild(card);
            count++;
        }
    });