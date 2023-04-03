function initMap() {
    var marker = new ol.Feature({
      geometry: new ol.geom.Point(
        ol.proj.fromLonLat([-117.33725, 33.15500])
      ),
      name: 'Marker',
    });
    
    var vectorSource = new ol.source.Vector({
      features: [marker],
    });
    
    var markerVectorLayer = new ol.layer.Vector({
      source: vectorSource,
      style: new ol.style.Style({
        image: new ol.style.Icon({
          anchor: [0.5, 1],
          src: 'https://cdn.mapmarker.io/api/v1/pin?size=50&background=%23DB4437&color=%23FFFFFF&voffset=0&hoffset=1&icon=fa-map-marker',
        })
      })
    });
    
    var map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        }),
        markerVectorLayer,
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([-117.33725, 33.15500]),
        zoom: 15
      })
    });
  }

  window.onload = initMap;