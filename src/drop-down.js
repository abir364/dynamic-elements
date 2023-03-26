const makeDropDown = (name, items) => {
  const container = document.createElement('div');
  const button = document.createElement('div');
  button.textContent = name;
  button.classList.add(
    'p-2',
    'bg-pink-500',
    'text-white',
    'text-xl',
    'font-semibold',
    'hover:bg-pink-600',
    'mobile:font-normal',
    'mobile:text-4xl',
    'mobile:py-px',
    'mobile:px-2'
  );
  const menu = document.createElement('div');
  menu.classList.add('flex', 'flex-col', 'w-48', 'hidden', 'mobile:w-64');
  for (let i = 0; i < items.length; i++) {
    const item = document.createElement('div');
    item.textContent = items[i];
    item.classList.add(
      'p-2',
      'bg-pink-500',
      'text-white',
      'font-normal',
      'hover:bg-pink-600',
      'mobile:text-2xl',
      'mobile:p-4'
    );
    menu.appendChild(item);
  }
  container.append(button, menu);

  button.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
      menu.classList.remove('hidden');
    } else {
      menu.classList.add('hidden');
    }
  });

  return container;
};

export default makeDropDown;
