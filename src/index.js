import _ from 'lodash';
import MyImage from './image.jpg';

function component() {
    var element = document.createElement('div');
  
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    var myIcon = new Image();
    myIcon.src = MyImage;

    element.appendChild(myIcon);

    return element;
  }
  
  document.body.appendChild(component());