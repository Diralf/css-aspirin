const floatScroll = document.getElementById('float-scroll');
const containerScroll = document.getElementById('scroll-container');
const scrollable = document.getElementById('scrollable');

floatScroll.onscroll = () => {
    scrollable.scrollTo({
        left: floatScroll.scrollLeft
    });
};

window.onscroll = () => {
    const floatBox = floatScroll.getBoundingClientRect();
    const conteinerBox = containerScroll.getBoundingClientRect();
    if (floatBox.bottom + floatBox.height >= conteinerBox.bottom) {
        floatScroll.classList.add('hide');
    } else {
        floatScroll.classList.remove('hide');
    }
};
