var wms_layers = [];
var lyr_Clippedextent_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "Clipped (extent)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Clippedextent_0.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-9664139.837759, 4306500.732260, -9660559.429136, 4310528.019817]
                            })
                        });var format_lake_1 = new ol.format.GeoJSON();
var features_lake_1 = format_lake_1.readFeatures(json_lake_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lake_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_lake_1.addFeatures(features_lake_1);var lyr_lake_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_lake_1, 
                style: style_lake_1,
                title: '<img src="styles/legend/lake_1.png" /> lake'
            });var format_Contours_2 = new ol.format.GeoJSON();
var features_Contours_2 = format_Contours_2.readFeatures(json_Contours_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Contours_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Contours_2.addFeatures(features_Contours_2);var lyr_Contours_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Contours_2, maxResolution:4.20066992284,

                style: style_Contours_2,
                title: '<img src="styles/legend/Contours_2.png" /> Contours'
            });var format_Contours_3 = new ol.format.GeoJSON();
var features_Contours_3 = format_Contours_3.readFeatures(json_Contours_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Contours_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Contours_3.addFeatures(features_Contours_3);var lyr_Contours_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Contours_3, 
                style: style_Contours_3,
                title: '<img src="styles/legend/Contours_3.png" /> Contours'
            });var format_Road_4 = new ol.format.GeoJSON();
var features_Road_4 = format_Road_4.readFeatures(json_Road_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Road_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Road_4.addFeatures(features_Road_4);var lyr_Road_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Road_4, 
                style: style_Road_4,
                title: '<img src="styles/legend/Road_4.png" /> Road'
            });var format_ValveHouse015_5 = new ol.format.GeoJSON();
var features_ValveHouse015_5 = format_ValveHouse015_5.readFeatures(json_ValveHouse015_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ValveHouse015_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ValveHouse015_5.addFeatures(features_ValveHouse015_5);var lyr_ValveHouse015_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ValveHouse015_5, 
                style: style_ValveHouse015_5,
                title: '<img src="styles/legend/ValveHouse015_5.png" /> Valve House (0.15)'
            });var format_OtterCreekRd154_6 = new ol.format.GeoJSON();
var features_OtterCreekRd154_6 = format_OtterCreekRd154_6.readFeatures(json_OtterCreekRd154_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OtterCreekRd154_6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_OtterCreekRd154_6.addFeatures(features_OtterCreekRd154_6);var lyr_OtterCreekRd154_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_OtterCreekRd154_6, 
                style: style_OtterCreekRd154_6,
                title: '<img src="styles/legend/OtterCreekRd154_6.png" /> Otter Creek Rd (1.54)'
            });var format_HallDrive032_7 = new ol.format.GeoJSON();
var features_HallDrive032_7 = format_HallDrive032_7.readFeatures(json_HallDrive032_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HallDrive032_7 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_HallDrive032_7.addFeatures(features_HallDrive032_7);var lyr_HallDrive032_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HallDrive032_7, 
                style: style_HallDrive032_7,
                title: '<img src="styles/legend/HallDrive032_7.png" /> Hall Drive (0.32)'
            });var format_AccessTrail027_8 = new ol.format.GeoJSON();
var features_AccessTrail027_8 = format_AccessTrail027_8.readFeatures(json_AccessTrail027_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AccessTrail027_8 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_AccessTrail027_8.addFeatures(features_AccessTrail027_8);var lyr_AccessTrail027_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AccessTrail027_8, 
                style: style_AccessTrail027_8,
                title: '<img src="styles/legend/AccessTrail027_8.png" /> Access Trail (0.27)'
            });var format_SouthTrailsAccess011_9 = new ol.format.GeoJSON();
var features_SouthTrailsAccess011_9 = format_SouthTrailsAccess011_9.readFeatures(json_SouthTrailsAccess011_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SouthTrailsAccess011_9 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_SouthTrailsAccess011_9.addFeatures(features_SouthTrailsAccess011_9);var lyr_SouthTrailsAccess011_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SouthTrailsAccess011_9, 
                style: style_SouthTrailsAccess011_9,
                title: '<img src="styles/legend/SouthTrailsAccess011_9.png" /> South Trails Access (0.11)'
            });var format_Spillway025_10 = new ol.format.GeoJSON();
var features_Spillway025_10 = format_Spillway025_10.readFeatures(json_Spillway025_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Spillway025_10 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Spillway025_10.addFeatures(features_Spillway025_10);var lyr_Spillway025_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Spillway025_10, 
                style: style_Spillway025_10,
                title: '<img src="styles/legend/Spillway025_10.png" /> Spillway (0.25)'
            });var format_SouthCove153_11 = new ol.format.GeoJSON();
var features_SouthCove153_11 = format_SouthCove153_11.readFeatures(json_SouthCove153_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SouthCove153_11 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_SouthCove153_11.addFeatures(features_SouthCove153_11);var lyr_SouthCove153_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SouthCove153_11, 
                style: style_SouthCove153_11,
                title: '<img src="styles/legend/SouthCove153_11.png" /> South Cove (1.53)'
            });var format_SouthTrailsConnector008_12 = new ol.format.GeoJSON();
var features_SouthTrailsConnector008_12 = format_SouthTrailsConnector008_12.readFeatures(json_SouthTrailsConnector008_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SouthTrailsConnector008_12 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_SouthTrailsConnector008_12.addFeatures(features_SouthTrailsConnector008_12);var lyr_SouthTrailsConnector008_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SouthTrailsConnector008_12, 
                style: style_SouthTrailsConnector008_12,
                title: '<img src="styles/legend/SouthTrailsConnector008_12.png" /> South Trails Connector (0.08)'
            });var format_GanierRidge185_13 = new ol.format.GeoJSON();
var features_GanierRidge185_13 = format_GanierRidge185_13.readFeatures(json_GanierRidge185_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GanierRidge185_13 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_GanierRidge185_13.addFeatures(features_GanierRidge185_13);var lyr_GanierRidge185_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GanierRidge185_13, 
                style: style_GanierRidge185_13,
                title: '<img src="styles/legend/GanierRidge185_13.png" /> Ganier Ridge (1.85)'
            });var format_SouthLake090_14 = new ol.format.GeoJSON();
var features_SouthLake090_14 = format_SouthLake090_14.readFeatures(json_SouthLake090_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SouthLake090_14 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_SouthLake090_14.addFeatures(features_SouthLake090_14);var lyr_SouthLake090_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SouthLake090_14, 
                style: style_SouthLake090_14,
                title: '<img src="styles/legend/SouthLake090_14.png" /> South Lake (0.90)'
            });var format_LakeTrail155_15 = new ol.format.GeoJSON();
var features_LakeTrail155_15 = format_LakeTrail155_15.readFeatures(json_LakeTrail155_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LakeTrail155_15 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LakeTrail155_15.addFeatures(features_LakeTrail155_15);var lyr_LakeTrail155_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LakeTrail155_15, 
                style: style_LakeTrail155_15,
                title: '<img src="styles/legend/LakeTrail155_15.png" /> Lake Trail (1.55)'
            });var format_DamWalkway024_16 = new ol.format.GeoJSON();
var features_DamWalkway024_16 = format_DamWalkway024_16.readFeatures(json_DamWalkway024_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DamWalkway024_16 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_DamWalkway024_16.addFeatures(features_DamWalkway024_16);var lyr_DamWalkway024_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DamWalkway024_16, 
                style: style_DamWalkway024_16,
                title: '<img src="styles/legend/DamWalkway024_16.png" /> Dam Walkway (0.24)'
            });var format_EducationCenter_17 = new ol.format.GeoJSON();
var features_EducationCenter_17 = format_EducationCenter_17.readFeatures(json_EducationCenter_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EducationCenter_17 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_EducationCenter_17.addFeatures(features_EducationCenter_17);var lyr_EducationCenter_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EducationCenter_17, 
                style: style_EducationCenter_17,
                title: '<img src="styles/legend/EducationCenter_17.png" /> Education Center'
            });var format_VisitorCenter_18 = new ol.format.GeoJSON();
var features_VisitorCenter_18 = format_VisitorCenter_18.readFeatures(json_VisitorCenter_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VisitorCenter_18 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_VisitorCenter_18.addFeatures(features_VisitorCenter_18);var lyr_VisitorCenter_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VisitorCenter_18, 
                style: style_VisitorCenter_18,
                title: '<img src="styles/legend/VisitorCenter_18.png" /> Visitor Center'
            });var format_ParkingLot_19 = new ol.format.GeoJSON();
var features_ParkingLot_19 = format_ParkingLot_19.readFeatures(json_ParkingLot_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParkingLot_19 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ParkingLot_19.addFeatures(features_ParkingLot_19);var lyr_ParkingLot_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ParkingLot_19, 
                style: style_ParkingLot_19,
                title: '<img src="styles/legend/ParkingLot_19.png" /> Parking Lot'
            });var format_Pictures_20 = new ol.format.GeoJSON();
var features_Pictures_20 = format_Pictures_20.readFeatures(json_Pictures_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pictures_20 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Pictures_20.addFeatures(features_Pictures_20);var lyr_Pictures_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pictures_20, 
                style: style_Pictures_20,
                title: '<img src="styles/legend/Pictures_20.png" /> Pictures'
            });

lyr_Clippedextent_0.setVisible(true);lyr_lake_1.setVisible(true);lyr_Contours_2.setVisible(true);lyr_Contours_3.setVisible(true);lyr_Road_4.setVisible(true);lyr_ValveHouse015_5.setVisible(true);lyr_OtterCreekRd154_6.setVisible(true);lyr_HallDrive032_7.setVisible(true);lyr_AccessTrail027_8.setVisible(true);lyr_SouthTrailsAccess011_9.setVisible(true);lyr_Spillway025_10.setVisible(true);lyr_SouthCove153_11.setVisible(true);lyr_SouthTrailsConnector008_12.setVisible(true);lyr_GanierRidge185_13.setVisible(true);lyr_SouthLake090_14.setVisible(true);lyr_LakeTrail155_15.setVisible(true);lyr_DamWalkway024_16.setVisible(true);lyr_EducationCenter_17.setVisible(true);lyr_VisitorCenter_18.setVisible(true);lyr_ParkingLot_19.setVisible(true);lyr_Pictures_20.setVisible(true);
var layersList = [lyr_Clippedextent_0,lyr_lake_1,lyr_Contours_2,lyr_Contours_3,lyr_Road_4,lyr_ValveHouse015_5,lyr_OtterCreekRd154_6,lyr_HallDrive032_7,lyr_AccessTrail027_8,lyr_SouthTrailsAccess011_9,lyr_Spillway025_10,lyr_SouthCove153_11,lyr_SouthTrailsConnector008_12,lyr_GanierRidge185_13,lyr_SouthLake090_14,lyr_LakeTrail155_15,lyr_DamWalkway024_16,lyr_EducationCenter_17,lyr_VisitorCenter_18,lyr_ParkingLot_19,lyr_Pictures_20];
lyr_lake_1.set('fieldAliases', {'lake2': 'lake2', });
lyr_Contours_2.set('fieldAliases', {'ID': 'ID', 'ELEV': 'ELEV', });
lyr_Contours_3.set('fieldAliases', {'ID': 'ID', 'ELEV': 'ELEV', 'feet': 'feet', });
lyr_Road_4.set('fieldAliases', {'Otter1': 'Otter1', });
lyr_ValveHouse015_5.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_TrackExtension': 'gpxx_TrackExtension', });
lyr_OtterCreekRd154_6.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_TrackExtension': 'gpxx_TrackExtension', });
lyr_HallDrive032_7.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_TrackExtension': 'gpxx_TrackExtension', });
lyr_AccessTrail027_8.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_TrackExtension': 'gpxx_TrackExtension', });
lyr_SouthTrailsAccess011_9.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_TrackExtension': 'gpxx_TrackExtension', });
lyr_Spillway025_10.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_TrackExtension': 'gpxx_TrackExtension', });
lyr_SouthCove153_11.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_TrackExtension': 'gpxx_TrackExtension', });
lyr_SouthTrailsConnector008_12.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_TrackExtension': 'gpxx_TrackExtension', });
lyr_GanierRidge185_13.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_TrackExtension': 'gpxx_TrackExtension', });
lyr_SouthLake090_14.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_TrackExtension': 'gpxx_TrackExtension', });
lyr_LakeTrail155_15.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_TrackExtension': 'gpxx_TrackExtension', });
lyr_DamWalkway024_16.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_TrackExtension': 'gpxx_TrackExtension', });
lyr_EducationCenter_17.set('fieldAliases', {'Education': 'Education', });
lyr_VisitorCenter_18.set('fieldAliases', {'Visitor Ce': 'Visitor Ce', });
lyr_ParkingLot_19.set('fieldAliases', {'Parking': 'Parking', });
lyr_Pictures_20.set('fieldAliases', {'Name': 'Name', 'Camera Model': 'Camera Model', 'Azimuth': 'Azimuth', 'Lon': 'Lon', 'Date': 'Date', 'Time': 'Time', 'ID': 'ID', 'North': 'North', 'Path': 'Path', 'Lat': 'Lat', 'Camera Maker': 'Camera Maker', 'Altitude': 'Altitude', });
lyr_lake_1.set('fieldImages', {'lake2': 'TextEdit', });
lyr_Contours_2.set('fieldImages', {'ID': 'Hidden', 'ELEV': 'Hidden', });
lyr_Contours_3.set('fieldImages', {'ID': 'Hidden', 'ELEV': 'Hidden', 'feet': 'Hidden', });
lyr_Road_4.set('fieldImages', {'Otter1': 'Hidden', });
lyr_ValveHouse015_5.set('fieldImages', {'name': 'Hidden', 'cmt': 'Hidden', 'desc': 'Hidden', 'src': 'Hidden', 'link1_href': 'Hidden', 'link1_text': 'Hidden', 'link1_type': 'Hidden', 'link2_href': 'Hidden', 'link2_text': 'Hidden', 'link2_type': 'Hidden', 'number': 'Hidden', 'type': 'Hidden', 'gpxx_TrackExtension': 'Hidden', });
lyr_OtterCreekRd154_6.set('fieldImages', {'name': 'Hidden', 'cmt': 'Hidden', 'desc': 'Hidden', 'src': 'Hidden', 'link1_href': 'Hidden', 'link1_text': 'Hidden', 'link1_type': 'Hidden', 'link2_href': 'Hidden', 'link2_text': 'Hidden', 'link2_type': 'Hidden', 'number': 'Hidden', 'type': 'Hidden', 'gpxx_TrackExtension': 'Hidden', });
lyr_HallDrive032_7.set('fieldImages', {'name': 'Hidden', 'cmt': 'Hidden', 'desc': 'Hidden', 'src': 'Hidden', 'link1_href': 'Hidden', 'link1_text': 'Hidden', 'link1_type': 'Hidden', 'link2_href': 'Hidden', 'link2_text': 'Hidden', 'link2_type': 'Hidden', 'number': 'Hidden', 'type': 'Hidden', 'gpxx_TrackExtension': 'Hidden', });
lyr_AccessTrail027_8.set('fieldImages', {'name': 'Hidden', 'cmt': 'Hidden', 'desc': 'Hidden', 'src': 'Hidden', 'link1_href': 'Hidden', 'link1_text': 'Hidden', 'link1_type': 'Hidden', 'link2_href': 'Hidden', 'link2_text': 'Hidden', 'link2_type': 'Hidden', 'number': 'Hidden', 'type': 'Hidden', 'gpxx_TrackExtension': 'Hidden', });
lyr_SouthTrailsAccess011_9.set('fieldImages', {'name': 'Hidden', 'cmt': 'Hidden', 'desc': 'Hidden', 'src': 'Hidden', 'link1_href': 'Hidden', 'link1_text': 'Hidden', 'link1_type': 'Hidden', 'link2_href': 'Hidden', 'link2_text': 'Hidden', 'link2_type': 'Hidden', 'number': 'Hidden', 'type': 'Hidden', 'gpxx_TrackExtension': 'Hidden', });
lyr_Spillway025_10.set('fieldImages', {'name': 'Hidden', 'cmt': 'Hidden', 'desc': 'Hidden', 'src': 'Hidden', 'link1_href': 'Hidden', 'link1_text': 'Hidden', 'link1_type': 'Hidden', 'link2_href': 'Hidden', 'link2_text': 'Hidden', 'link2_type': 'Hidden', 'number': 'Hidden', 'type': 'Hidden', 'gpxx_TrackExtension': 'Hidden', });
lyr_SouthCove153_11.set('fieldImages', {'name': 'Hidden', 'cmt': 'Hidden', 'desc': 'Hidden', 'src': 'Hidden', 'link1_href': 'Hidden', 'link1_text': 'Hidden', 'link1_type': 'Hidden', 'link2_href': 'Hidden', 'link2_text': 'Hidden', 'link2_type': 'Hidden', 'number': 'Hidden', 'type': 'Hidden', 'gpxx_TrackExtension': 'Hidden', });
lyr_SouthTrailsConnector008_12.set('fieldImages', {'name': 'Hidden', 'cmt': 'Hidden', 'desc': 'Hidden', 'src': 'Hidden', 'link1_href': 'Hidden', 'link1_text': 'Hidden', 'link1_type': 'Hidden', 'link2_href': 'Hidden', 'link2_text': 'Hidden', 'link2_type': 'Hidden', 'number': 'Hidden', 'type': 'Hidden', 'gpxx_TrackExtension': 'Hidden', });
lyr_GanierRidge185_13.set('fieldImages', {'name': 'Hidden', 'cmt': 'Hidden', 'desc': 'Hidden', 'src': 'Hidden', 'link1_href': 'Hidden', 'link1_text': 'Hidden', 'link1_type': 'Hidden', 'link2_href': 'Hidden', 'link2_text': 'Hidden', 'link2_type': 'Hidden', 'number': 'Hidden', 'type': 'Hidden', 'gpxx_TrackExtension': 'Hidden', });
lyr_SouthLake090_14.set('fieldImages', {'name': 'Hidden', 'cmt': 'Hidden', 'desc': 'Hidden', 'src': 'Hidden', 'link1_href': 'Hidden', 'link1_text': 'Hidden', 'link1_type': 'Hidden', 'link2_href': 'Hidden', 'link2_text': 'Hidden', 'link2_type': 'Hidden', 'number': 'Hidden', 'type': 'Hidden', 'gpxx_TrackExtension': 'Hidden', });
lyr_LakeTrail155_15.set('fieldImages', {'name': 'Hidden', 'cmt': 'Hidden', 'desc': 'Hidden', 'src': 'Hidden', 'link1_href': 'Hidden', 'link1_text': 'Hidden', 'link1_type': 'Hidden', 'link2_href': 'Hidden', 'link2_text': 'Hidden', 'link2_type': 'Hidden', 'number': 'Hidden', 'type': 'Hidden', 'gpxx_TrackExtension': 'Hidden', });
lyr_DamWalkway024_16.set('fieldImages', {'name': 'Hidden', 'cmt': 'Hidden', 'desc': 'Hidden', 'src': 'Hidden', 'link1_href': 'Hidden', 'link1_text': 'Hidden', 'link1_type': 'Hidden', 'link2_href': 'Hidden', 'link2_text': 'Hidden', 'link2_type': 'Hidden', 'number': 'Hidden', 'type': 'Hidden', 'gpxx_TrackExtension': 'Hidden', });
lyr_EducationCenter_17.set('fieldImages', {'Education': 'TextEdit', });
lyr_VisitorCenter_18.set('fieldImages', {'Visitor Ce': 'TextEdit', });
lyr_ParkingLot_19.set('fieldImages', {'Parking': 'TextEdit', });
lyr_Pictures_20.set('fieldImages', {'Name': 'Hidden', 'Camera Model': 'Hidden', 'Azimuth': 'Hidden', 'Lon': 'Hidden', 'Date': 'Hidden', 'Time': 'Hidden', 'ID': 'Hidden', 'North': 'Hidden', 'Path': 'Photo', 'Lat': 'Hidden', 'Camera Maker': 'Hidden', 'Altitude': 'Hidden', });
lyr_lake_1.set('fieldLabels', {'lake2': 'no label', });
lyr_Contours_2.set('fieldLabels', {});
lyr_Contours_3.set('fieldLabels', {});
lyr_Road_4.set('fieldLabels', {});
lyr_ValveHouse015_5.set('fieldLabels', {});
lyr_OtterCreekRd154_6.set('fieldLabels', {});
lyr_HallDrive032_7.set('fieldLabels', {});
lyr_AccessTrail027_8.set('fieldLabels', {});
lyr_SouthTrailsAccess011_9.set('fieldLabels', {});
lyr_Spillway025_10.set('fieldLabels', {});
lyr_SouthCove153_11.set('fieldLabels', {});
lyr_SouthTrailsConnector008_12.set('fieldLabels', {});
lyr_GanierRidge185_13.set('fieldLabels', {});
lyr_SouthLake090_14.set('fieldLabels', {});
lyr_LakeTrail155_15.set('fieldLabels', {});
lyr_DamWalkway024_16.set('fieldLabels', {});
lyr_EducationCenter_17.set('fieldLabels', {'Education': 'no label', });
lyr_VisitorCenter_18.set('fieldLabels', {'Visitor Ce': 'no label', });
lyr_ParkingLot_19.set('fieldLabels', {'Parking': 'no label', });
lyr_Pictures_20.set('fieldLabels', {'Path': 'no label', });
lyr_Pictures_20.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});