const div7 = document.querySelector('.div7');

printRect = (e) => {
  const rect = div7.getBoundingClientRect();
  console.log(rect);
  console.log(`client: ${e.clientX}, ${e.clientY}`);
  console.log(`page: ${e.pageX}, ${e.pageY}`);
};

div7.addEventListener('click', (e) => printRect(e));
