(function () {
  farmOS.map.behaviors.farm_map_pdok = {
    attach: function (instance) {
  
      var basemaps = [
        { "name": "AHN2 5m", "type": "ahn2", "layer": "ahn2_5m" },
        { "name": "AHN3 5m DSM", "type": "ahn3", "layer": "ahn3_5m_dsm" },
      ];

      basemaps.forEach(function(basemap) {
        var opts = {
          title: "PDOK " + basemap.name,
          url: 'http://geodata.nationaalgeoregister.nl/'+basemap.type+'/wms',
          visible: false,
          base: true,
          group: 'AHN Layers',
          params: {
            SERVICE: 'wms',
            LAYERS: basemap.layer,
            VERSION: '1.3.0',
            REQUEST: 'GetMap',
            CRS: 'EPSG:28992',
            STYLES: ',',
            FORMAT: 'image/png',
          },
        };
        instance.addLayer('wms', opts);
      });

      var basemaps = [
        { "name": "Luchtfoto Actueel RGB", "type": "luchtfotorgb", "layer": "Actueel_ortho25" },
        { "name": "Luchtfoto Actueel IR", "type": "luchtfotocir", "layer": "Actueel_ortho25IR" },
      ];

      basemaps.forEach(function(basemap) {
        var opts = {
          title: basemap.name,
          url: 'https://service.pdok.nl/hwh/'+ basemap.type +'/wms/v1_0',
          params: {
            SERVICE: 'wms',
            LAYERS: basemap.layer,
            VERSION: '1.3.0',
            FORMAT: 'image/png',
            REQUEST: 'GetMap',
            CRS: 'EPSG:28992',
          },
          visible: false,
          base: true,
        };
        instance.addLayer('wms', opts);
      });

    },
    weight: -100,
  };
}());

