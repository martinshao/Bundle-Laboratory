import _ from 'lodash';
import Print from './print';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = '点击这里，然后查看 console！';

  btn.onclick = Print.bind(null, 'Hello webpack!');

  element.appendChild(btn);
  return element;
}

document.body.appendChild(component());
