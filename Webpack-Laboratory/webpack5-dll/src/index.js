import _ from 'lodash';
import print from './print'

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = '点击这里，然后查看 console！';

  btn.addEventListener('click', () => print('我是大帅比。。。'), false)

  element.appendChild(btn);
  return element;
}

document.body.appendChild(component());
