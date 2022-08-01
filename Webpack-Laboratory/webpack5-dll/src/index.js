import _ from 'lodash';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = '点击这里，然后查看 console！';

  element.appendChild(btn);
  return element;
}

document.body.appendChild(component());
