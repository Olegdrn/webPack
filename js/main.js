import '../style/style.scss';
import { render } from './item';
import items from './items';

const galery = document.getElementById('galery');
items.map((item) => galery.appendChild(render(item)));
