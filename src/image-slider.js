const makeImageSlider = (images) => {
  const slider = document.createElement('div');
  const prev = document.createElement('span');
  prev.classList.add(
    'material-symbols-outlined',
    'bg-slate-600',
    'hover:bg-pink-600',
    'rounded-full',
    'text-white'
  );
  prev.textContent = 'chevron_left';
  prev.setAttribute('id', 'prev');
  const next = document.createElement('span');
  next.classList.add(
    'material-symbols-outlined',
    'bg-slate-600',
    'hover:bg-pink-600',
    'rounded-full',
    'text-white'
  );
  next.textContent = 'chevron_right';
  next.setAttribute('id', 'next');
  slider.classList.add('flex', 'gap-6', 'justify-center', 'items-center');
  let i = 0;
  const img1 = new Image(200, 200);
  img1.src = images[(i - 1 + images.length) % images.length];
  img1.classList.add('p-2', 'bg-slate-600', 'rounded-xl');
  const img2 = new Image(200, 200);
  img2.src = images[i % images.length];
  img2.classList.add('p-2', 'bg-slate-600', 'rounded-xl');
  const img3 = new Image(200, 200);
  img3.src = images[(i + 1) % images.length];
  img3.classList.add('p-2', 'bg-slate-600', 'rounded-xl');

  next.addEventListener('click', () => {
    if (i < images.length - 1) {
      i++;
    } else {
      i = 0;
    }
    changeImg(img1, img2, img3, images, i);
  });

  prev.addEventListener('click', () => {
    if (i > 0) {
      i--;
    } else {
      i = images.length - 1;
    }
    changeImg(img1, img2, img3, images, i);
  });

  setInterval(() => {
    if (i < images.length - 1) {
      i++;
    } else {
      i = 0;
    }
    changeImg(img1, img2, img3, images, i);
  }, 3000);

  slider.append(prev, img1, img2, img3, next);
  return slider;
};

function changeImg(img1, img2, img3, images, i) {
  img1.src = images[(i - 1 + images.length) % images.length];
  img2.src = images[i % images.length];
  img3.src = images[(i + 1) % images.length];
}

export default makeImageSlider;
