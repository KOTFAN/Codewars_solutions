//vectors colinearity

function collinearity(x1, y1, x2, y2) {
   if (x1 * y2 === y1 * x2) {//x1/x2 === y1/y2 => x1*y2===y1*x2
      return true;
   } else {
      return false;
   }

}

//=============================================
//neutralise

function neutralise(s1, s2) {
   let res = '';
   for (let i = 0; i < s1.length; i++) {
      if (s1[i] === s2[i]) {
         res = res + s1[i];
      }
      else {
         res = res + '0';
      }

   }
   return res;
}
//=============================================

//Upeprcase
function makeUpperCase(str) {
   return str.toUpperCase()
}



//The Wide-Mouthed frog!


function mouthSize(animal) {
   if (animal.toUpperCase() !== 'ALLIGATOR') {
      return "wide";
   }
   else {
      return "small";
   }
}

//======================================================


//Flick Switch
function flickSwitch(arr) {
   let res = [];
   let isflickhere = false;

   for (let i = 0; i < arr.length; i++) {

      if (arr[i] == "flick") {
         isflickhere = !isflickhere;
      }


      isflickhere ? res.push(false) : res.push(true)

   }

   return res;
}



//quadrant

function quadrant(x, y) {
   let res = 1;
   if (x * y > 0) {
      x > 0 ? res = 1 : res = 3;
   }
   else {
      x < 0 ? res = 2 : res = 4;
   }

   return res;
}