import _ from 'lodash';
import './style.css';
import Icon from './icon.png';

import Data from './data.xml'
import Notes from './data.csv'

function component() {
  const element = document.createElement('div');
  // lodash, 现在通过一个 script 引入
  element.innerHTML = _.join(['Hello ', 'webpack'], '');
  element.classList.add('hello');

  // 将图片添加到我们已经存在的 div 中
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);
  console.info('test change')
  console.info(Data)
  console.info(Notes)

  return element;
}

document.body.appendChild(component());
