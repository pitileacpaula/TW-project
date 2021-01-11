import React, {Component, useState} from 'react';
import {vector} from "./map_components/source";
import GeoJSON from "ol/format/GeoJSON";
import {get} from "ol/proj";
import {VectorLayer} from "./map_components/layers";
import {Fill, Stroke, Style} from "ol/style";

class RouteLayer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            search: '',
            mapRoute: {
                "type": "FeatureCollection", "features": [{
                    "type": "Feature",
                    "properties": {"kind": "route", "from": "Constanta", "to": "SatuMare"},
                    "geometry": {
                        "type": "MultiLineString",
                        "coordinates": [[[22.89, 47.8], [21.94, 47.07], [21.33, 46.19], [21.21, 45.75], [22.91, 45.88], [23.58, 46.06], [24.16, 45.8], [26.07, 44.45], [28.63, 44.17]], [[22.89, 47.8], [21.94, 47.07], [21.33, 46.19], [21.21, 45.75], [22.91, 45.88], [23.58, 46.06], [24.16, 45.8], [26.07, 44.45], [28.63, 44.17]], [[22.89, 47.8], [21.94, 47.07], [21.33, 46.19], [21.21, 45.75], [22.91, 45.88], [23.58, 46.06], [24.16, 45.8], [26.07, 44.45], [28.63, 44.17]], [[22.89, 47.8], [21.94, 47.07], [21.33, 46.19], [21.21, 45.75], [22.91, 45.88], [23.58, 46.06], [24.16, 45.8], [26.07, 44.45], [28.63, 44.17]], [[22.89, 47.8], [21.94, 47.07], [21.33, 46.19], [21.21, 45.75], [22.91, 45.88], [23.58, 46.06], [24.16, 45.8], [26.07, 44.45], [28.63, 44.17]], [[22.89, 47.8], [21.94, 47.07], [21.33, 46.19], [21.21, 45.75], [22.91, 45.88], [23.58, 46.06], [24.16, 45.8], [26.07, 44.45], [28.63, 44.17]], [[22.89, 47.8], [21.94, 47.07], [21.33, 46.19], [21.21, 45.75], [22.91, 45.88], [23.58, 46.06], [24.16, 45.8], [26.07, 44.45], [28.63, 44.17]], [[22.89, 47.8], [21.94, 47.07], [21.33, 46.19], [21.21, 45.75], [22.91, 45.88], [23.58, 46.06], [24.16, 45.8], [26.07, 44.45], [28.63, 44.17]], [[22.89, 47.8], [21.94, 47.07], [21.33, 46.19], [21.21, 45.75], [22.91, 45.88], [23.58, 46.06], [24.16, 45.8], [26.07, 44.45], [28.63, 44.17]]]
                    }
                }]
            },
            object: {},
            isLoading: false
        };
    }

    componentWillMount() {
         fetch( '/SearchRoute/1', {mode: "no-cors"})
            .then(res => res.json())
            .then(data => {
                this.setState({
                    object: data
                });
            });

    }

    render() {
        this.componentWillMount();
        let styles = {
            'MultiLineString': new Style({
                stroke: new Stroke({
                    color: 'blue',
                    width: 3,
                }),
                fill: new Fill({
                    color: 'rgba(0, 0, 255, 0.1)',
                }),
            }),
        };
        return (
            <VectorLayer
                    source={vector({ features: new GeoJSON().readFeatures(this.state.mapRoute, { featureProjection: get('EPSG:3857') }) })}
                    style={styles.MultiLineString}
                    />
        );
    }
}

export default RouteLayer;