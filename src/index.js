
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix == undefined){return []}
  let sorted = [];  
  for(let i = 0; i < matrix.length; i++){
      let tempo = matrix[i];
      if( i % 2 == 0)
      {
          for (let j = 0; j < tempo.length; j++) {
              sorted.push(tempo[j]);
              
          }
      }else 
      {
          tempo.reverse();
          for (let j = 0 ; j < tempo.length; j++) {
              
              sorted.push(tempo[j]);
              
          }

      }
      
      
  }
matrix = sorted;
return sorted;
}
