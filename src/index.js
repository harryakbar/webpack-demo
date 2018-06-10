import _ from 'lodash';
import './style.css';
import MyImage from './image.jpg';

function component() {
    var element = document.createElement('p');
  
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    var myIcon = new Image();
    myIcon.src = MyImage;
    element.appendChild(myIcon);

    return element;
  }
  
  document.body.appendChild(component());