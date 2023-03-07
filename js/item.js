export function render(item) {
    const itemElement = document.createElement('div');
    itemElement.classList = 'catalogItem';

    const itemSecondElement = document.createElement('div');
    itemSecondElement.classList = 'catalogSecondItem';


    if (item.type === 'image') {
        const imgElement = document.createElement('img');
        imgElement.classList = 'imgItem';
        imgElement.src = item.resource;
        itemSecondElement.appendChild(imgElement)
    } else if (item.type === 'audio') {
        const audioElement = document.createElement('audio');
        audioElement.classList = 'audioItem';
        audioElement.src = item.resource;
        audioElement.controls = true;
        itemSecondElement.appendChild(audioElement)
    }


    const titleElement = document.createElement('span');
    titleElement.classList = 'titleItem';
    titleElement.textContent = item.title;

    itemElement.appendChild(titleElement);
    itemElement.appendChild(itemSecondElement);

    return itemElement;
}