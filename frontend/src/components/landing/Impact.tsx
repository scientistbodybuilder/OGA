import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import type { LatLngTuple } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
const markers = [
    {
        title:"Scarborough",
        subHeading:"Scarborough, Ontario, Canada",
        coordinates: [43.776424, -79.231750] //lat lon
    }
]

const customMarkerIcon = (iconURL: string) => {
    const customIcon = L.icon({
        iconUrl: iconURL, // Or import from your assets,
        className:'',
        iconSize: [18, 18],              // Size of the icon
        iconAnchor: [9, 9],            // Point of the icon which will correspond to marker's location
        popupAnchor: [0, -10]
    });
    return customIcon
}

const markerUrl = '/map-icon.png'

const Impact = () => {
    return (
        <section id="impact" className="w-full max-w-[1100px] scroll-mt-20 flex flex-col items-center justify-start">
            <div className="mt-2 mb-11 flex flex-col items-center">
                <h3 className="font-heading text-3xl font-medium text-black md:text-[34px]">Impact</h3>
                <div className="mt-2 h-0.5 w-44 bg-(--accent-color)" />
                <h4 className="mt-4 max-w-[330px] text-center font-body text-sm leading-[1.4] text-[#5f554f]">Our Golden Impact!</h4>
            </div>

            <div className="flex flex-col gap-3">
                <p className="text-xs sm:text-sm text-left text-muted-foreground">Alhamdulillahi Rabbil ‘Alameen wa Rabbul ‘Arshil ‘Adheem (All Praises Belong Solely to Allah, the Lord of All Worlds, and the Lord of the Mighty Throne)! It is by the Will of Allah, that we share the following stats on the Impact of OGA Globally with you:</p>

                <p className="text-xs sm:text-sm text-left text-muted-foreground"><span className="font-bold text-black">{'>'}100 Seminars</span> on Islamic, intellectual & industry development across professions!</p>

                <p className="text-xs sm:text-sm text-left text-muted-foreground"><span className="font-bold text-black">{'>'}10,000</span> Followers from across 22 countries and 40+ cities around the world!</p>

                <p className="text-xs sm:text-sm text-left text-muted-foreground"><span className="font-bold text-black">{'>'}100,000</span> Impressions across Social Media (Meta and LinkedIn) platforms</p>

                <div className="w-full h-[450px] rounded-sm z-0">
                    <MapContainer
                     center={[51.505, -0.09] as LatLngTuple} 
                     zoom={2} 
                     style={{ height: '100%', width: '100%', borderRadius: '8px' }}
                     >
                        <TileLayer
                            // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}.png"
                        />
                        {markers.map((marker, index) => (
                            <Marker
                                key={index}
                                position={marker.coordinates as LatLngTuple}
                                icon={customMarkerIcon(markerUrl)}
                            >
                                <Popup>
                                    <h3>{marker.title}</h3>
                                    <p>{marker.subHeading}</p>
                                </Popup>
                            </Marker>
                        ))}
                    </MapContainer>
                </div>

                <p className="text-xs sm:text-sm text-left text-muted-foreground">In sha Allahu ta’ala, with <span className="font-bold text-black">Allah’s Permission</span>, together: we can SPARC Our Golden Age to reach <span className="font-bold text-black">Allah’s Pleasure</span> and Perfection, forever!</p>
            </div>

            


        </section>
    )
}

export default Impact