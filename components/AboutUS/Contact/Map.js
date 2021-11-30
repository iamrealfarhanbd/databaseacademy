import React from 'react';

const Map = () => {
    return (
        <div>
            <section className="google-map-section">
                <div className="map-column">
                <div className="google-map-area">
                    <div className="google-map" id="contact-google-map" data-map-lat="40.712776" data-map-lng="-74.005974" data-icon-path="assets/images/icons/map-marker.png" data-map-title="Brooklyn, New York, United Kingdom" data-map-zoom={12} data-markers="{
                                &quot;marker-1&quot;: [40.712776, -74.005974, &quot;<h4>Branch Office</h4><p>77/99 New York</p>&quot;,&quot;assets/images/icons/map-marker.png&quot;]
                            }">
                    </div>
                </div>
                </div>
            </section>
        </div>
    );
};

export default Map;