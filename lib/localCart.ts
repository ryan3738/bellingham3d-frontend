const getLocalCart = (): => {
  if (typeof Storage !== 'undefined') {
    // Store
    const list = [];
    list.push('<h1>John<h1>');
    list.push('<h2>David<h2>');
    localStorage.setItem('list', JSON.stringify(list));

    // Retrieve
    document.getElementById('result').innerHTML = JSON.parse(
      localStorage.getItem('list')
    );
  } else {
    document.getElementById('result').innerHTML =
      'Sorry, your browser does not support Web Storage...';
  }
};

const addLocalCartItem = (item) => {};

const createLocalCartItem = (item) => {};

const removeLocalCartItem = (item) => {};

export { getLocalCart };
