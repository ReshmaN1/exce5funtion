

  let numchars="";
//makeline(6);
function makeline(linenum){
  let hashline="";
  for(let i=0; i< linenum;i++){
    hashline+="#";
  }
  //console.log(hashline);
  return hashline;
}

//makesquare(6);
function makesquare (size){
  for(let i=0;i<size;i++){
    makeline(size);
  }
  //console.log (makesquare(6));
}
//makeRectangle(12,6);
 function makeRectangle (width,height){
   for(i=0;i<height;i++){
     makeline(width);
   }
 }
   //makeDownwardStairs(6);
   function makeDownwardStairs (height){
     for(i=1;i<=height;i++){
       makeline(i)
     }
   }

  //makespaceline (1,5)
   function makespaceline (numSpaces,numChars){
     for(i=0;i<numSpaces;i++){
      makeline(numChars)
     }
   }
  
    
    makeIsoscelesTriangle(10)
     function makeIsoscelesTriangle(height){

       for(let i=0;i<height;i++){

       console.log(printSpaces(height-i)+makeline(2*i+1)+printSpaces(height-i));
       }
     }
     function printSpaces(length){
        let spaces="";
        for(let i=0;i<length;i++){
          spaces += " ";
        }
      return spaces;
     }
    
     function makeIsoscelesTriangle1(height){
    
       
       for(let i=height;i>0;i--){
        console.log(printSpaces(height-i)+makeline(2*i+1)+printSpaces(height-i))
        }  
        }
        
       makeIsoscelesTriangle1(10)