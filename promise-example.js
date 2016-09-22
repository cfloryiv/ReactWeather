function addPromise(a, b) {
  return new Promise(function(resolve, reject) {
  if (typeof a === 'number' && typeof b === 'number') {
    resolve(a+b);
  } else {
    reject('not a number');
  }
});
}

addPromise(1,'x').then(function(res) {
  console.log(res);
}, function(err) {
  console.log(err);
});
