/*Name this external file gallery.js*/

function upDate(previewPic){
 /* In this function you should 
    1) change the url for the background image of the div with the id = "image" 
    to the source file of the preview image */
    // let imagesource = previewPic.src;
    // console.log(imagesource);
    // console.log(document.querySelector('#image').innerHTML);
    document.querySelector('#image').style.background = "url(" + previewPic.src + ")";
    
   /*  2) Change the text  of the div with the id = "image" 
    to the alt text of the preview image 
    */
   document.querySelector('#image').innerHTML = previewPic.alt;
  
	}

	function unDo(){
     /* In this function you should 
    1) Update the url for the background image of the div with the id = "image" 
    back to the orginal-image.  You can use the css code to see what that original URL was */
        document.querySelector('#image').style.background = "initial";
        document.querySelector('#image').style.background = "#8e68ff";
    
    /* 2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was
    */
		document.querySelector('#image').innerHTML = "Hover over an image below to display here.";
	}