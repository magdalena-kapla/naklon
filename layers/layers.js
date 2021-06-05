var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_naklon_buf300_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "naklon_buf300",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/naklon_buf300_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1488905.090870, 5686816.798729, 1843473.173215, 5922946.398896]
                            })
                        });

lyr_OSMStandard_0.setVisible(true);lyr_naklon_buf300_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_naklon_buf300_1];
