var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_AnGiang_1 = new ol.format.GeoJSON();
var features_AnGiang_1 = format_AnGiang_1.readFeatures(json_AnGiang_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnGiang_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnGiang_1.addFeatures(features_AnGiang_1);
var lyr_AnGiang_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AnGiang_1, 
                style: style_AnGiang_1,
                interactive: false,
                title: '<img src="styles/legend/AnGiang_1.png" /> AnGiang'
            });
var lyr_20170505_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "20170505",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20170505_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11663815.332040, 1139035.809377, 11754269.219715, 1227759.841109]
                            })
                        });
var lyr_20170511_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "20170511",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20170511_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11663815.332040, 1139035.809377, 11754269.219715, 1227759.841109]
                            })
                        });
var lyr_20170517_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "20170517",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20170517_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11663815.332040, 1139035.809377, 11754269.219715, 1227759.841109]
                            })
                        });
var lyr_20170523_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "20170523",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20170523_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11663815.332040, 1139035.809377, 11754269.219715, 1227759.841109]
                            })
                        });
var lyr_20170529_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "20170529",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20170529_6.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11663815.332040, 1139035.809377, 11754269.219715, 1227759.841109]
                            })
                        });
var lyr_20170604_7 = new ol.layer.Image({
                            opacity: 1,
                            title: "20170604",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20170604_7.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11663815.332040, 1139035.809377, 11754269.219715, 1227759.841109]
                            })
                        });
var lyr_20170610_8 = new ol.layer.Image({
                            opacity: 1,
                            title: "20170610",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20170610_8.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11663815.332040, 1139035.809377, 11754269.219715, 1227759.841109]
                            })
                        });
var lyr_20170616_9 = new ol.layer.Image({
                            opacity: 1,
                            title: "20170616",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20170616_9.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11663815.332040, 1139035.809377, 11754269.219715, 1227759.841109]
                            })
                        });
var lyr_20170622_10 = new ol.layer.Image({
                            opacity: 1,
                            title: "20170622",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20170622_10.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11663815.332040, 1139035.809377, 11754269.219715, 1227759.841109]
                            })
                        });
var lyr_20170628_11 = new ol.layer.Image({
                            opacity: 1,
                            title: "20170628",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20170628_11.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11663815.332040, 1139035.809377, 11754269.219715, 1227759.841109]
                            })
                        });
var lyr_20170704_12 = new ol.layer.Image({
                            opacity: 1,
                            title: "20170704",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20170704_12.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11663815.332040, 1139035.809377, 11754269.219715, 1227759.841109]
                            })
                        });
var lyr_20170710_13 = new ol.layer.Image({
                            opacity: 1,
                            title: "20170710",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20170710_13.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11663815.332040, 1139035.809377, 11754269.219715, 1227759.841109]
                            })
                        });
var lyr_20170716_14 = new ol.layer.Image({
                            opacity: 1,
                            title: "20170716",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20170716_14.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11663815.332040, 1139035.809377, 11754269.219715, 1227759.841109]
                            })
                        });
var lyr_20170722_15 = new ol.layer.Image({
                            opacity: 1,
                            title: "20170722",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20170722_15.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11663815.332040, 1139035.809377, 11754269.219715, 1227759.841109]
                            })
                        });
var lyr_20170728_16 = new ol.layer.Image({
                            opacity: 1,
                            title: "20170728",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20170728_16.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11663815.332040, 1139035.809377, 11754269.219715, 1227759.841109]
                            })
                        });
var lyr_20170803_17 = new ol.layer.Image({
                            opacity: 1,
                            title: "20170803",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20170803_17.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11663815.332040, 1139035.809377, 11754269.219715, 1227759.841109]
                            })
                        });
var lyr_20170809_18 = new ol.layer.Image({
                            opacity: 1,
                            title: "20170809",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20170809_18.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11663815.332040, 1139035.809377, 11754269.219715, 1227759.841109]
                            })
                        });
var lyr_20170815_19 = new ol.layer.Image({
                            opacity: 1,
                            title: "20170815",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20170815_19.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11663815.332040, 1139035.809377, 11754269.219715, 1227759.841109]
                            })
                        });
var lyr_20170821_20 = new ol.layer.Image({
                            opacity: 1,
                            title: "20170821",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20170821_20.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11663815.332040, 1139035.809377, 11754269.219715, 1227759.841109]
                            })
                        });
var lyr_20170827_21 = new ol.layer.Image({
                            opacity: 1,
                            title: "20170827",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20170827_21.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11663815.332040, 1139035.809377, 11754269.219715, 1227759.841109]
                            })
                        });
var lyr_20170902_22 = new ol.layer.Image({
                            opacity: 1,
                            title: "20170902",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20170902_22.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11663815.332040, 1139035.809377, 11754269.219715, 1227759.841109]
                            })
                        });
var lyr_20170908_23 = new ol.layer.Image({
                            opacity: 1,
                            title: "20170908",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20170908_23.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11663815.332040, 1139035.809377, 11754269.219715, 1227759.841109]
                            })
                        });
var lyr_20170914_24 = new ol.layer.Image({
                            opacity: 1,
                            title: "20170914",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20170914_24.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11663815.332040, 1139035.809377, 11754269.219715, 1227759.841109]
                            })
                        });
var lyr_20170920_25 = new ol.layer.Image({
                            opacity: 1,
                            title: "20170920",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20170920_25.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11663815.332040, 1139035.809377, 11754269.219715, 1227759.841109]
                            })
                        });
var lyr_20170926_26 = new ol.layer.Image({
                            opacity: 1,
                            title: "20170926",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20170926_26.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11663815.332040, 1139035.809377, 11754269.219715, 1227759.841109]
                            })
                        });
var lyr_20171002_27 = new ol.layer.Image({
                            opacity: 1,
                            title: "20171002",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20171002_27.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11663815.332040, 1139035.809377, 11754269.219715, 1227759.841109]
                            })
                        });
var lyr_20171008_28 = new ol.layer.Image({
                            opacity: 1,
                            title: "20171008",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20171008_28.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11663815.332040, 1139035.809377, 11754269.219715, 1227759.841109]
                            })
                        });
var lyr_20171014_29 = new ol.layer.Image({
                            opacity: 1,
                            title: "20171014",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20171014_29.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11663815.332040, 1139035.809377, 11754269.219715, 1227759.841109]
                            })
                        });
var lyr_20171020_30 = new ol.layer.Image({
                            opacity: 1,
                            title: "20171020",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20171020_30.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11663815.332040, 1139035.809377, 11754269.219715, 1227759.841109]
                            })
                        });
var lyr_20171026_31 = new ol.layer.Image({
                            opacity: 1,
                            title: "20171026",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20171026_31.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11663815.332040, 1139035.809377, 11754269.219715, 1227759.841109]
                            })
                        });
var lyr_20171101_32 = new ol.layer.Image({
                            opacity: 1,
                            title: "20171101",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20171101_32.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11663815.332040, 1139035.809377, 11754269.219715, 1227759.841109]
                            })
                        });
var lyr_20171107_33 = new ol.layer.Image({
                            opacity: 1,
                            title: "20171107",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20171107_33.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11663815.332040, 1139035.809377, 11754269.219715, 1227759.841109]
                            })
                        });
var lyr_20171113_34 = new ol.layer.Image({
                            opacity: 1,
                            title: "20171113",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20171113_34.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11663815.332040, 1139035.809377, 11754269.219715, 1227759.841109]
                            })
                        });
var lyr_20171119_35 = new ol.layer.Image({
                            opacity: 1,
                            title: "20171119",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20171119_35.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11663815.332040, 1139035.809377, 11754269.219715, 1227759.841109]
                            })
                        });
var lyr_20171125_36 = new ol.layer.Image({
                            opacity: 1,
                            title: "20171125",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20171125_36.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11663815.332040, 1139035.809377, 11754269.219715, 1227759.841109]
                            })
                        });
var lyr_20171201_37 = new ol.layer.Image({
                            opacity: 1,
                            title: "20171201",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20171201_37.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11663815.332040, 1139035.809377, 11754269.219715, 1227759.841109]
                            })
                        });
var lyr_20171207_38 = new ol.layer.Image({
                            opacity: 1,
                            title: "20171207",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20171207_38.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11663815.332040, 1139035.809377, 11754269.219715, 1227759.841109]
                            })
                        });
var lyr_20171213_39 = new ol.layer.Image({
                            opacity: 1,
                            title: "20171213",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20171213_39.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11663815.332040, 1139035.809377, 11754269.219715, 1227759.841109]
                            })
                        });
var lyr_20171219_40 = new ol.layer.Image({
                            opacity: 1,
                            title: "20171219",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20171219_40.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11663815.332040, 1139035.809377, 11754269.219715, 1227759.841109]
                            })
                        });
var lyr_20171225_41 = new ol.layer.Image({
                            opacity: 1,
                            title: "20171225",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20171225_41.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11663815.332040, 1139035.809377, 11754269.219715, 1227759.841109]
                            })
                        });
var lyr_20171231_42 = new ol.layer.Image({
                            opacity: 1,
                            title: "20171231",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20171231_42.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11663815.332040, 1139035.809377, 11754269.219715, 1227759.841109]
                            })
                        });
var lyr_20180106_43 = new ol.layer.Image({
                            opacity: 1,
                            title: "20180106",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20180106_43.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11663815.332040, 1139035.809377, 11754269.219715, 1227759.841109]
                            })
                        });
var lyr_20180112_44 = new ol.layer.Image({
                            opacity: 1,
                            title: "20180112",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20180112_44.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11663815.332040, 1139035.809377, 11754269.219715, 1227759.841109]
                            })
                        });
var lyr_20180118_45 = new ol.layer.Image({
                            opacity: 1,
                            title: "20180118",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20180118_45.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11663815.332040, 1139035.809377, 11754269.219715, 1227759.841109]
                            })
                        });
var lyr_20180124_46 = new ol.layer.Image({
                            opacity: 1,
                            title: "20180124",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20180124_46.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11663815.332040, 1139035.809377, 11754269.219715, 1227759.841109]
                            })
                        });
var lyr_20180130_47 = new ol.layer.Image({
                            opacity: 1,
                            title: "20180130",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20180130_47.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11663815.332040, 1139035.809377, 11754269.219715, 1227759.841109]
                            })
                        });
var lyr_20180205_48 = new ol.layer.Image({
                            opacity: 1,
                            title: "20180205",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20180205_48.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11663815.332040, 1139035.809377, 11754269.219715, 1227759.841109]
                            })
                        });
var lyr_20180211_49 = new ol.layer.Image({
                            opacity: 1,
                            title: "20180211",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20180211_49.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11663815.332040, 1139035.809377, 11754269.219715, 1227759.841109]
                            })
                        });
var lyr_20180217_50 = new ol.layer.Image({
                            opacity: 1,
                            title: "20180217",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20180217_50.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11663815.332040, 1139035.809377, 11754269.219715, 1227759.841109]
                            })
                        });
var lyr_20180223_51 = new ol.layer.Image({
                            opacity: 1,
                            title: "20180223",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20180223_51.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11663815.332040, 1139035.809377, 11754269.219715, 1227759.841109]
                            })
                        });
var lyr_20180301_52 = new ol.layer.Image({
                            opacity: 1,
                            title: "20180301",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20180301_52.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11663815.332040, 1139035.809377, 11754269.219715, 1227759.841109]
                            })
                        });
var lyr_20180307_53 = new ol.layer.Image({
                            opacity: 1,
                            title: "20180307",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20180307_53.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11663815.332040, 1139035.809377, 11754269.219715, 1227759.841109]
                            })
                        });
var lyr_20180313_54 = new ol.layer.Image({
                            opacity: 1,
                            title: "20180313",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20180313_54.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11663815.332040, 1139035.809377, 11754269.219715, 1227759.841109]
                            })
                        });
var lyr_20180319_55 = new ol.layer.Image({
                            opacity: 1,
                            title: "20180319",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20180319_55.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11663815.332040, 1139035.809377, 11754269.219715, 1227759.841109]
                            })
                        });
var lyr_20180325_56 = new ol.layer.Image({
                            opacity: 1,
                            title: "20180325",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20180325_56.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11663815.332040, 1139035.809377, 11754269.219715, 1227759.841109]
                            })
                        });
var lyr_20180331_57 = new ol.layer.Image({
                            opacity: 1,
                            title: "20180331",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/20180331_57.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11663815.332040, 1139035.809377, 11754269.219715, 1227759.841109]
                            })
                        });

lyr_OpenStreetMap_0.setVisible(true);lyr_AnGiang_1.setVisible(true);lyr_20170505_2.setVisible(false);lyr_20170511_3.setVisible(false);lyr_20170517_4.setVisible(false);lyr_20170523_5.setVisible(false);lyr_20170529_6.setVisible(false);lyr_20170604_7.setVisible(false);lyr_20170610_8.setVisible(false);lyr_20170616_9.setVisible(false);lyr_20170622_10.setVisible(false);lyr_20170628_11.setVisible(false);lyr_20170704_12.setVisible(false);lyr_20170710_13.setVisible(false);lyr_20170716_14.setVisible(false);lyr_20170722_15.setVisible(false);lyr_20170728_16.setVisible(false);lyr_20170803_17.setVisible(false);lyr_20170809_18.setVisible(false);lyr_20170815_19.setVisible(false);lyr_20170821_20.setVisible(false);lyr_20170827_21.setVisible(false);lyr_20170902_22.setVisible(false);lyr_20170908_23.setVisible(false);lyr_20170914_24.setVisible(false);lyr_20170920_25.setVisible(false);lyr_20170926_26.setVisible(false);lyr_20171002_27.setVisible(false);lyr_20171008_28.setVisible(false);lyr_20171014_29.setVisible(false);lyr_20171020_30.setVisible(false);lyr_20171026_31.setVisible(false);lyr_20171101_32.setVisible(false);lyr_20171107_33.setVisible(false);lyr_20171113_34.setVisible(false);lyr_20171119_35.setVisible(false);lyr_20171125_36.setVisible(false);lyr_20171201_37.setVisible(false);lyr_20171207_38.setVisible(false);lyr_20171213_39.setVisible(false);lyr_20171219_40.setVisible(false);lyr_20171225_41.setVisible(false);lyr_20171231_42.setVisible(false);lyr_20180106_43.setVisible(false);lyr_20180112_44.setVisible(false);lyr_20180118_45.setVisible(false);lyr_20180124_46.setVisible(false);lyr_20180130_47.setVisible(false);lyr_20180205_48.setVisible(false);lyr_20180211_49.setVisible(false);lyr_20180217_50.setVisible(false);lyr_20180223_51.setVisible(false);lyr_20180301_52.setVisible(false);lyr_20180307_53.setVisible(false);lyr_20180313_54.setVisible(false);lyr_20180319_55.setVisible(false);lyr_20180325_56.setVisible(false);lyr_20180331_57.setVisible(false);
var layersList = [lyr_OpenStreetMap_0,lyr_AnGiang_1,lyr_20170505_2,lyr_20170511_3,lyr_20170517_4,lyr_20170523_5,lyr_20170529_6,lyr_20170604_7,lyr_20170610_8,lyr_20170616_9,lyr_20170622_10,lyr_20170628_11,lyr_20170704_12,lyr_20170710_13,lyr_20170716_14,lyr_20170722_15,lyr_20170728_16,lyr_20170803_17,lyr_20170809_18,lyr_20170815_19,lyr_20170821_20,lyr_20170827_21,lyr_20170902_22,lyr_20170908_23,lyr_20170914_24,lyr_20170920_25,lyr_20170926_26,lyr_20171002_27,lyr_20171008_28,lyr_20171014_29,lyr_20171020_30,lyr_20171026_31,lyr_20171101_32,lyr_20171107_33,lyr_20171113_34,lyr_20171119_35,lyr_20171125_36,lyr_20171201_37,lyr_20171207_38,lyr_20171213_39,lyr_20171219_40,lyr_20171225_41,lyr_20171231_42,lyr_20180106_43,lyr_20180112_44,lyr_20180118_45,lyr_20180124_46,lyr_20180130_47,lyr_20180205_48,lyr_20180211_49,lyr_20180217_50,lyr_20180223_51,lyr_20180301_52,lyr_20180307_53,lyr_20180313_54,lyr_20180319_55,lyr_20180325_56,lyr_20180331_57];
lyr_AnGiang_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ADM1_CODE': 'ADM1_CODE', 'ADM1_NAME': 'ADM1_NAME', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM0': 'ADM0', });
lyr_AnGiang_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'ADM1_CODE': 'TextEdit', 'ADM1_NAME': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM0': 'TextEdit', });
lyr_AnGiang_1.set('fieldLabels', {'OBJECTID': 'no label', 'ADM1_CODE': 'no label', 'ADM1_NAME': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM0': 'no label', });
lyr_AnGiang_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});