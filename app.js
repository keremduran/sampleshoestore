const wrapper = document.querySelector('.sliderWrapper');
const sliderTitles = document.querySelectorAll('.sliderTitle');
const menuItems = document.querySelectorAll('.menuItem');
let previousIndex = 0;
menuItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    wrapper.style.transform = `translateX(${-100 * index}vw)`;
    sliderTitles[index].style.transform = `scale(1.3, 1.2)`;
    sliderTitles[previousIndex].style.transform = `scale(1)`;
    previousIndex = index;
  });
});
