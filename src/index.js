import './style.css';

import cans from './assets/krzysztof-hepner-MTOjTacH2zg-unsplash.jpg';
import tea from './assets/luke-oslizlo-eCo4KaFd_jQ-unsplash.jpg';
import faluda from './assets/vd-photography-vA0_270so1U-unsplash.jpg';
import juice from './assets/yulia-khlebnikova-yIE7pZUmT_s-unsplash.jpg';

import makeDropDown from './drop-down';
import makeImageSlider from './image-slider';

const content = document.getElementById('content');
content.classList.add('w-full');

const items = ['a', 'b', 'c', 'd', 'e'];
const name = 'Menu';
const drop_down = makeDropDown(name, items);
const button = document.createElement('button');
button.appendChild(drop_down);

const images = [cans, tea, faluda, juice];
const slider = makeImageSlider(images);
const out = document.createElement('div');
out.classList.add('flex', 'justify-center', 'items-center');
out.appendChild(slider);

content.append(button, out);
