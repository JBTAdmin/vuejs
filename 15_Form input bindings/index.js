new Vue({
  el: "#app",
  data: {
    chosen: false,
    checkedFilms: [],
    selected: '',
    singleSelect: '',
    multiselect: [],
    dynamicSelection: 'Apple',
    alphabet: [
      { word: 'Apple', for: 'A' },
      { word: 'Bat', for: 'B' },
      { word: 'Cat', for: 'C' }
    ]
  }
});
