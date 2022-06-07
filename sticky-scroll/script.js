const stickyScroll = document.getElementById('sticky-scroll');
const stickyScrollContent = document.getElementById('sticky-scroll-content');
const containerScroll = document.getElementById('scrollable-container');
const scrollable = document.getElementById('scrollable');

stickyScrollContent.style.width = `${scrollable.scrollWidth}px`;

const isStickyScroll = () => {
    const floatBox = stickyScroll.getBoundingClientRect();
    const containerBox = containerScroll.getBoundingClientRect();
    return floatBox.bottom + floatBox.height < containerBox.bottom;
}

let isStickyScrollActive = isStickyScroll();

stickyScroll.onscroll = () => {
    if (isStickyScrollActive) {
        scrollable.scrollTo({
            left: stickyScroll.scrollLeft
        });
    }
};

scrollable.onscroll = () => {
    if (!isStickyScrollActive) {
        stickyScroll.scrollTo({
            left: scrollable.scrollLeft
        });
    }
}


window.onscroll = () => {
    isStickyScrollActive = isStickyScroll();
    if (isStickyScroll()) {
        stickyScroll.classList.remove('hide');
    } else {
        stickyScroll.classList.add('hide');
    }
};
