const wrapper = document.querySelector('.sliderWrapper');
const sliderTitles = document.querySelectorAll('.sliderTitle');
const menuItems = document.querySelectorAll('.menuItem');

const products = [
  {
    id: 1,
    title: 'Air Force',
    price: 119,
    colors: [
      {
        code: 'black',
        img: './img/air.png',
      },
      {
        code: 'darkblue',
        img: './img/air2.png',
      },
    ],
  },
  {
    id: 2,
    title: 'Air Jordan',
    price: 149,
    colors: [
      {
        code: 'lightgray',
        img: './img/jordan.png',
      },
      {
        code: 'green',
        img: './img/jordan2.png',
      },
    ],
  },
  {
    id: 3,
    title: 'Blazer',
    price: 109,
    colors: [
      {
        code: 'lightgray',
        img: './img/blazer.png',
      },
      {
        code: 'green',
        img: './img/blazer2.png',
      },
    ],
  },
  {
    id: 4,
    title: 'Crater',
    price: 129,
    colors: [
      {
        code: 'black',
        img: './img/crater.png',
      },
      {
        code: 'lightgray',
        img: './img/crater2.png',
      },
    ],
  },
  {
    id: 5,
    title: 'Hippie',
    price: 99,
    colors: [
      {
        code: 'gray',
        img: './img/hippie.png',
      },
      {
        code: 'black',
        img: './img/hippie2.png',
      },
    ],
  },
];

let choosenProduct = products[0];
let choosenProductNode = document.querySelector('.product');

menuItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    setActiveClass(menuItems, index);
    animateSlide(index);
    setProductContent(index);
  });
});

const setActiveClass = (items, index) => {
  items.forEach((item, y) => {
    item.classList.remove('active');
  });
  items[index].classList.add('active');
};

const animateSlide = (index) => {
  wrapper.style.transform = `translateX(${-100 * index}vw)`;
  sliderTitles[index].style.transform = `scale(1.3, 1.2)`;
  sliderTitles[previousIndex].style.transform = `scale(1)`;
};

const setProductContent = (index) => {
  choosenProduct = products[index];
  choosenProductNode.querySelector('.productTitle').textContent =
    choosenProduct.title;

  choosenProductNode.querySelector('.productPrice').textContent =
    `$` + choosenProduct.price;

  choosenProductNode.querySelector('.productImg').src =
    choosenProduct.colors[0].img;

  choosenProductNode
    .querySelector('.colors')
    .querySelectorAll('div')
    .forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
      color.addEventListener('click', () => {
        choosenProductNode.querySelector('.productImg').src =
          choosenProduct.colors[index].img;
      });
    });

  const sizes = choosenProductNode
    .querySelector('.sizes')
    .querySelectorAll('div');

  sizes.forEach((size, index) => {
    size.addEventListener('click', () => {
      console.log('click');
      setActiveClass(sizes, index);
    });
  });
};

setProductContent(0);

const buyButton = document
  .querySelector('.product')
  .querySelector('.buyButton');
const payment = document.querySelector('.paymentModal');
const closeButton = payment.querySelector('.close');
buyButton.addEventListener('click', () => {
  payment.style.display = 'flex';
});
closeButton.addEventListener('click', () => {
  payment.style.display = 'none';
});
