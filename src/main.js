console.log('Succsess')
import '../style/style.css';
// import '../style/style.scss';
import items from './items';
import { render } from './item';

const galery = document.getElementById('galery');
items.map((item) => galery.appendChild(render(item)));
