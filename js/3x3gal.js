const gallery = document.getElementById('gallery');

fetch('assets/gallery.json') //creates a fetch request to the path
  .then(response => response.json()) //acts like a hand shake to take the date from the json
  .then(data => { //loops through each object in the json

    data.forEach(image => { 

        //takes the json and changes every element to a js obj the adds to the gal

      const imageElement = document.createElement('div');
      imageElement.className = 'gallery-item';
      const link = document.createElement('a');
      link.href = image.url;
      link.target = '_blank';
      const img = document.createElement('img');
      img.src = image.url; //uniform resource locator
      img.alt = image.caption;
      const caption = document.createElement('caption');
      caption.textContent = image.caption;
      link.appendChild(img);
      imageElement.appendChild(link);
      imageElement.appendChild(caption);
      gallery.appendChild(imageElement);

    });

    adjustGallery();

  })
  .catch(error => console.error(error));

function adjustGallery() { //adjusts the layout of the gallery

  const items = document.getElementsByClassName('gallery-item');
  const itemWidth = items[0].offsetWidth;
  const galleryWidth = gallery.offsetWidth;
  const columns = Math.floor(galleryWidth / itemWidth); //depending on how many items create the gallery best fit
  const margin = (galleryWidth - (itemWidth * columns)) / (columns - 1); //calcs width of margin


  for (let i = 0; i < items.length; i++) {
    items[i].style.marginRight = margin + 'px';
    if (i % columns === columns - 1) {
      items[i].style.marginRight = 0;
    }
  }
}

window.addEventListener('load', adjustGallery);
window.addEventListener('resize', adjustGallery);