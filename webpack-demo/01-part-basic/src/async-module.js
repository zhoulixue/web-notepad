function getComponent() {
  return import('lodash')
    .then(({ default: _ }) => {
      const ele = document.createElement('div');
      ele.innerHTML = _.join(['async', 'module'], '  ');
      return ele;
    });
}
getComponent().then((ele) => {
  document.body.appendChild(ele);
});
