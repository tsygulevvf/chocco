let myMap;

const init = () => {
  myMap = new ymaps.Map("map", {
    center: [59.934212, 30.398654],
    zoom: 11,
    controls: []
  });

  const coords = [
    [60.012499, 30.398510],
    [60.052497, 30.433538],
    [59.927059, 30.324054],
    [59.890849, 30.318806]
  ];

  const  myCollection = new ymaps.GeoObjectCollection({}, {
    draggable: false,
    iconLayout: 'default#image',
    iconImageHref: 'img/icons/map-icon.svg',
    iconImageSize: [43, 54],
    iconImageOffset: [-35, -52]
  }); 

  coords.forEach(coord => {
    myCollection.add(new ymaps.Placemark(coord));
  });
  myMap.geoObjects.add(myCollection);

  myMap.behaviors.disable('scrollZoom');
};

ymaps.ready(init);

