const ftoc = function(n) {
  n -= 32;
  n *= (5/9);
  n = Math.round(n *10) / 10;
  return n;
};

const ctof = function(n) {
  n *= (9/5);
  n += 32;
  n = Math.round(n *10) / 10;
  return n;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
