const ItemTypes = {
    image: drawImage,
    audio: drawAudio,
    video: drawVideo
}

function drawImage(item) {
    const imgElement = document.createElement('img');
    imgElement.classList = 'imgItem';
    imgElement.src = item.resource;

    return imgElement
}

function drawAudio(item) {
    const audioElement = document.createElement('audio');
    audioElement.classList = 'audioItem';
    audioElement.src = item.resource;
    audioElement.controls = true;

    return audioElement
}

function drawVideo(item) {
    const videoElement = document.createElement('video');
    videoElement.classList = 'videoItem';
    videoElement.src = item.resource;
    videoElement.controls = true;

    return videoElement
}

export function render(item) {
    const itemElement = document.createElement('div');
    itemElement.classList = 'catalogItem';

    const itemSecondElement = document.createElement('div');
    itemSecondElement.classList = 'catalogSecondItem';

    const elementType = ItemTypes[item.type];
    itemSecondElement.appendChild(elementType(item))


    const titleElement = document.createElement('h4');
    titleElement.classList = 'titleItem';
    titleElement.textContent = item.title;

    itemElement.appendChild(titleElement);
    itemElement.appendChild(itemSecondElement);

    return itemElement;
}