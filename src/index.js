import _ from 'lodash';
import MyImage from './image.jpg';
import './style.css';

function component() {
    var element = document.createElement('div');
  
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    var myIcon = new Image();
    myIcon.src = MyImage;

    element.appendChild(myIcon);
    element.classList.add('hello');

    return element;
  }
  
  document.body.appendChild(component());