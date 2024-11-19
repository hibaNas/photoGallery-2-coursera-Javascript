//JavaScript CODE
     ///upDate() to change the div with id= image to the small images with their alt

     function upDate(previewPic){
        console.log("update image..",previewPic);
        const image = document.getElementById("image");
        image.style.backgroundImage = "url('"+previewPic.src+"')";
        image.innerHTML = previewPic.alt;
        
          }
      //unDo() to go back to the original image
          function unDo(){
              
      
          console.log("tst undo")
        const image = document.getElementById("image");
        image.innerHTML = "the beauty of morocco"
        image.style.backgroundImage = "url('')";
      
      } 
      
      
      
      //initImage to set attribute tabindex 
      
      function initImage(){
          console.log("onload");
          this.unDo();
      
          const images= document.getElementsByClassName("preview");
          for(var i=0; i<images.length; i++){
              images[i].setAttribute("tabindex",0);
          }
      
      
      
      
      }
      
      
      