module.exports = function check(str, bracketsConfig) {
  let brackets = { 'opening' : [], 'closing' : []};
  if (str.length % 2 !==0){
    return false;
  }
  let matchingOpeningBracket;
  let el;
  let buffer = [];
  bracketsConfig.forEach(v => {
    brackets.opening.push(v[0]);
    brackets.closing.push(v[1]);
  });
  for (i = 0; i < str.length; i++) {
    el = str[i];
    let openingKey = brackets.opening.indexOf(el);
    let closingKey = brackets.closing.indexOf(el);
    if(openingKey === closingKey && buffer[buffer.length-1] == el){
      buffer.pop();
    }else if (openingKey > -1) {
      buffer.push(el);
    }else if(closingKey > -1){
      matchingOpeningBracket = brackets.opening[closingKey];
      if (buffer.length == 0 || (buffer.pop() != matchingOpeningBracket)) {
        return false;
      }
    }
  }
  return (buffer.length == 0);
};
