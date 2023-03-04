const calcHide = document.getElementById('buttonCulc');
const timerHide = document.getElementById('buttonTimer');

export const hide = (dateForm, timerForm) => {
    calcHide.addEventListener('click', () => {
        timerForm.classList.toggle('hidden');
    });
    timerHide.addEventListener('click', () => {
        dateForm.classList.toggle('hidden');
    });
}
