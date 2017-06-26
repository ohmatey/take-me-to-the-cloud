import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1Ijoib2htYXRleSIsImEiOiJjajJ1YmQzdmowMGd3MnFzMzMwbGVyeTBnIn0.8V3dH2qi3fUtGc15_a4mqg'

const buildMap = () => {
  const map = new mapboxgl.Map({
    container: 'where',
    style: 'mapbox://styles/mapbox/light-v9',
    center: [-122.420679, 37.772537],
    zoom: 13,
    hash: true
  })

  map.on('load', function () {
    map.addLayer({
      'id': 'symbols',
      'type': 'symbol',
      'source': {
        'type': 'geojson',
        'data': {
          'type': 'FeatureCollection',
          'features': [
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [
                  -91.395263671875,
                  -0.9145729757782163
                ]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [
                  -90.32958984375,
                  -0.6344474832838974
                ]
              }
            },
            {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'Point',
                'coordinates': [
                  -91.34033203125,
                  0.01647949196029245
                ]
              }
            }
          ]
        }
      },
      'layout': {
        'icon-image': 'rocket-15'
      }
    })

    map.on('click', e => {
      console.log(e)
    })

      // Center the map on the coordinates of any clicked symbol from the 'symbols' layer.
    map.on('click', 'symbols', function (e) {
      map.flyTo({center: e.features[0].geometry.coordinates})
    })

      // Change the cursor to a pointer when the it enters a feature in the 'symbols' layer.
    map.on('mouseenter', 'symbols', function () {
      map.getCanvas().style.cursor = 'pointer'
    })

      // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'symbols', function () {
      map.getCanvas().style.cursor = ''
    })
  })

  return map
}

export default buildMap
