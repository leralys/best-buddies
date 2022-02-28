import Map, { Marker, NavigationControl, GeolocateControl, Popup } from 'react-map-gl';
import { useSelector } from 'react-redux';
import { useState, useRef, useEffect } from 'react';
import useSupercluster from 'use-supercluster';
import { Link } from 'react-router-dom';
import PetsIcon from '@mui/icons-material/Pets';
import './MapMain.css';
import mapboxgl from '!mapbox-gl'
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;


const MapMain = () => {
    const [viewState, setViewState] = useState({
        latitude: 32.0861805437749,
        longitude: 34.80912838311763,
        zoom: 13
    });
    const [selectedPark, setSelectedPark] = useState(null);
    const locations = useSelector(state => state.locations.locations);
    const park = useSelector(state => state.park.park[0]);
    const mapRef = useRef();
    let points = [];
    const bounds = mapRef.current
        ? mapRef.current.getMap().getBounds().toArray().flat()
        : null;
    useEffect(() => {
        if (park) {
            setViewState({
                ...viewState,
                latitude: park.lat,
                longitude: park.lng,
                zoom: 17
            });
            window.scrollTo(500, 500);
        }
    });
    if (locations) {
        points = locations.map(adr => ({
            type: 'Feature',
            properties: {
                cluster: false,
                pointId: adr.location_id,
            },
            geometry: {
                type: 'Point',
                coordinates: [
                    adr.lng,
                    adr.lat
                ]
            }
        }));
    }
    const { clusters, supercluster } = useSupercluster({
        points,
        bounds,
        zoom: viewState.zoom,
        options: { radius: 50, maxZoom: 20 }
    });
    const findById = (id, arr) => {
        return arr.find(obj => obj.location_id === id)
    }
    return (
        <div className='Map-container'>
            <Map
                reuseMaps
                {...viewState}
                onMove={evt => setViewState(evt.viewState)}
                mapStyle='mapbox://styles/mapbox/streets-v9'
                mapboxAccessToken={process.env.REACT_APP_MAPBOX}
                minZoom={2}
                maxZoom={20}
                ref={mapRef}
            >
                <NavigationControl />
                <GeolocateControl />
                {selectedPark &&
                    <Popup longitude={findById(selectedPark, locations).lng}
                        latitude={findById(selectedPark, locations).lat}
                        anchor='bottom'
                        closeButton={true}
                        closeOnClick={false}
                        onClose={() => setSelectedPark(null)}
                    >
                        <div className='popup-content'>
                            <div>{findById(selectedPark, locations).address},</div>
                            <div>{findById(selectedPark, locations).city}</div>
                            <Link to={`/locations/${selectedPark}`}>See the park's page</Link>
                        </div>

                    </Popup>
                }
                {locations && clusters.length < 1
                    ? locations.map(adr => {
                        return <Marker
                            longitude={adr.lng}
                            latitude={adr.lat}
                            anchor='bottom'
                            key={adr.location_id}
                        >
                            <PetsIcon
                                className='marker-icon'
                                onClick={() => setSelectedPark(adr.location_id)}
                            />
                        </Marker>
                    })
                    : clusters.map(cluster => {
                        const [lng, lat] = cluster.geometry.coordinates;
                        const {
                            cluster: isCluster,
                            point_count: pointCount,
                        } = cluster.properties;
                        if (isCluster) {
                            return <Marker longitude={lng}
                                latitude={lat} anchor='bottom'
                                key={cluster.properties.cluster_id}>
                                <div
                                    className='cluster-marker'
                                    style={{
                                        width: `${25 + (pointCount / points.length) * 40}px`,
                                        height: `${25 + (pointCount / points.length) * 40}px`
                                    }}
                                    onClick={() => {
                                        const expansionZoom = Math.min(
                                            supercluster.getClusterExpansionZoom(cluster.id), 20
                                        );
                                        mapRef.current.easeTo({
                                            center: cluster.geometry.coordinates,
                                            zoom: expansionZoom,
                                            duration: 500
                                        });
                                    }}
                                >
                                    {pointCount}
                                </div>
                            </Marker>
                        } else {
                            return <Marker longitude={lng}
                                latitude={lat} anchor='bottom'
                                key={cluster.properties.pointId}>
                                <PetsIcon
                                    className='marker-icon'
                                    onClick={() => setSelectedPark(cluster.properties.pointId)}
                                />
                            </Marker>
                        }
                    })
                }
            </Map>
        </div>
    )
}

export default MapMain;