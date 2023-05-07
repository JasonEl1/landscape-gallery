const imgs='https://raw.githubusercontent.com/MTN73/landscape-gallery/main/imgs.json';

let urls;
    fetch(imgs)
    .then(response => response.json())
    .then(data => {
        urls = data;
        console.log(urls);
    });