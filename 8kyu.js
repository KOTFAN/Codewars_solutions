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

