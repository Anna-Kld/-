var wms_layers = [];


        var lyr_YandexSatellite_0 = new ol.layer.Tile({
            'title': 'Yandex Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="">Yandex Satellite</a>',
                url: 'https://core-sat.maps.yandex.net/tiles?l=sat&v=3.1025.0&x={x}&y={y}&z={z}&scale=1&lang=ru_RU'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: 'Рамка',
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> Рамка'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__3, 
                style: style__3,
                popuplayertitle: 'Дороги',
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> Дороги'
            });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__4, 
                style: style__4,
                popuplayertitle: 'Здания',
                interactive: true,
                title: '<img src="styles/legend/_4.png" /> Здания'
            });

lyr_YandexSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);
var layersList = [lyr_YandexSatellite_0,lyr_OSMStandard_1,lyr__2,lyr__3,lyr__4];
lyr__2.set('fieldAliases', {'fid': 'fid', 'name': 'name', });
lyr__3.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'description': 'description', 'footway': 'footway', 'ford': 'ford', 'depth': 'depth', 'oneway': 'oneway', 'smoothness': 'smoothness', 'railway': 'railway', 'ref': 'ref', 'old_ref': 'old_ref', 'name': 'name', 'lanes': 'lanes', 'bicycle': 'bicycle', 'access': 'access', 'ramp': 'ramp', 'incline': 'incline', 'handrail': 'handrail', 'foot': 'foot', 'service': 'service', 'surface': 'surface', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr__4.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'addr_stree': 'addr_stree', 'religion': 'religion', 'training': 'training', 'sport': 'sport', 'leisure': 'leisure', 'building_l': 'building_l', 'shop': 'shop', 'name_ru': 'name_ru', 'amenity': 'amenity', 'type': 'type', 'name': 'name', 'addr_postc': 'addr_postc', 'addr_house': 'addr_house', 'addr_city': 'addr_city', 'addres': 'addres', });
lyr__2.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', });
lyr__3.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'description': 'TextEdit', 'footway': 'TextEdit', 'ford': 'TextEdit', 'depth': 'TextEdit', 'oneway': 'TextEdit', 'smoothness': 'TextEdit', 'railway': 'TextEdit', 'ref': 'TextEdit', 'old_ref': 'TextEdit', 'name': 'TextEdit', 'lanes': 'TextEdit', 'bicycle': 'TextEdit', 'access': 'TextEdit', 'ramp': 'TextEdit', 'incline': 'TextEdit', 'handrail': 'TextEdit', 'foot': 'TextEdit', 'service': 'TextEdit', 'surface': 'TextEdit', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', });
lyr__4.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'addr_stree': 'TextEdit', 'religion': 'TextEdit', 'training': 'TextEdit', 'sport': 'TextEdit', 'leisure': 'TextEdit', 'building_l': 'TextEdit', 'shop': 'TextEdit', 'name_ru': 'TextEdit', 'amenity': 'TextEdit', 'type': 'TextEdit', 'name': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_house': 'TextEdit', 'addr_city': 'TextEdit', 'addres': 'TextEdit', });
lyr__2.set('fieldLabels', {'fid': 'no label', 'name': 'no label', });
lyr__3.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'description': 'no label', 'footway': 'no label', 'ford': 'no label', 'depth': 'no label', 'oneway': 'no label', 'smoothness': 'no label', 'railway': 'no label', 'ref': 'no label', 'old_ref': 'no label', 'name': 'no label', 'lanes': 'no label', 'bicycle': 'no label', 'access': 'no label', 'ramp': 'no label', 'incline': 'no label', 'handrail': 'no label', 'foot': 'no label', 'service': 'no label', 'surface': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', });
lyr__4.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'addr_stree': 'no label', 'religion': 'no label', 'training': 'no label', 'sport': 'no label', 'leisure': 'no label', 'building_l': 'no label', 'shop': 'no label', 'name_ru': 'no label', 'amenity': 'no label', 'type': 'no label', 'name': 'no label', 'addr_postc': 'no label', 'addr_house': 'no label', 'addr_city': 'no label', 'addres': 'no label', });
lyr__4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});