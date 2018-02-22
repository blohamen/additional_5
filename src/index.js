module.exports = function check(str, bracketsConfig) {
  if(str.length % 2 !==0) return false;
  var arr = [];
  for(var i = 0; i< str.length; i++){
    for(var j = 0; j< bracketsConfig.length; j++){
      if(str[i] === bracketsConfig[j][0]){
        arr.unshift(str[i]);
      }
      if(str[i] === bracketsConfig[j][1]){
        if(arr[0] === bracketsConfig[j][0]){
           arr.shift();
        }
        else return false;
      }
    }
  }
  return arr.length === 0 ? true : false;
  // your solution
}
