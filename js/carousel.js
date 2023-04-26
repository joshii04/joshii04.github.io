var images = document.getElementById('carouselImg');
var back = document.getElementById('carouselBack'); //these act as pulls from the html that follow these ids
var next = document.getElementById('carouselNext');
var caption = document.getElementById('carouselCaption');

fetch('assets/imageBank.json').then(function(res){
     //result of fecth op

     res.json().then(function(json){ //js is a curly bracket lang
        json.forEach(function(el, i) {  //element and index
            
            var image = document.createElement('img');

            image.setAttribute('src', el.url );//properties access by el.url in the json
            image.setAttribute('alt', el.caption); //alternate image which is caption
            image.setAttribute('title', el.caption);

            images.appendChild(image);// save to image

            setupCarousel(json);
        });
     });

     function setupCarousel(json){
        var imageNO = images.childElementCount; //this links back to the image 
        var currentImage = 1;
        var imageWidth = 400;

        back.addEventListener('click', function(){
            if(currentImage != 1){ //if not curr image change by minusing
                --currentImage;
                images.style.left = imageWidth-(currentImage*imageWidth)+'px';

                caption.innerText = json[currentImage - 1].caption; //update the caption for the next image
            }
        });

        next.addEventListener('click', function(){
            if(currentImage!= imageNO){
                ++currentImage; //update the img ref

                images.style.left = imageWidth - (currentImage * imageWidth) + 'px';
            }

            caption.innerText = json[currentImage-1].caption; //inner text means you can add text to an element
        });

        caption.innerText = json[currentImage-1].caption; //same applies here by updating the ref

     }
    
});

