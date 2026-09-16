'use client';
import { ComposableMap, Geographies, Geography, Marker, Line } from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";
const kenyaCoord: [number, number] = [37.9062, -0.0236];

export default function TraceabilityMap({ markers }: { markers: any[] }) {
  const otherMarkers = markers.filter(m => m.name !== "Kenya");

  return (
    <ComposableMap
      projection="geoMercator"
      width={1000} 
      height={450}
      projectionConfig={{ scale: 150, center: [15, 25] }} 
      style={{ width: "100%", height: "auto", overflow: "visible" }} 
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#E3EBE6" 
              stroke="#FFFFFF"
              strokeWidth={0.75}
              style={{
                default: { outline: "none" },
                hover: { fill: "#C8D9D0", outline: "none", cursor: "pointer" },
                pressed: { outline: "none" },
              }}
            />
          ))
        }
      </Geographies>
      {otherMarkers.map((marker, i) => (
        <Line
          key={`line-${i}`}
          from={kenyaCoord}
          to={marker.coordinates}
          stroke="#111a30" 
          strokeWidth={2}
          strokeDasharray="4 4"
          strokeLinecap="round"
          className="opacity-40"
        />
      ))}

      {markers.map((marker, i) => {
        const isKenya = marker.name === "Kenya";
        
        return (
          <Marker key={i} coordinates={marker.coordinates}>
            <circle r={3.5} fill={isKenya ? "#B50016" : "#4A5D6A"} />
            <line 
              x1={0} y1={0} 
              x2={0} y2={-25} 
              stroke={isKenya ? "#B50016" : "#111a30"} 
              strokeDasharray="2 2" 
              strokeWidth={1.5} 
            />
            <foreignObject 
              x={-60} y={-55} 
              width={120} height={30} 
              className="overflow-visible pointer-events-none"
            >
              <div className="flex w-full h-full justify-center items-center">
                <div 
                  className={`flex items-center justify-center gap-1.5 px-3 py-1  transition-transform duration-300 ${
                    isKenya 
                      ? ' text-white scale-110 shadow-royal-red/20 rounded-full' 
                      : ' text-[#2A3D36]'
                  }`}
                >
                  <span className="text-sm leading-none">{marker.flag}</span>
                 
                </div>
              </div>
            </foreignObject>
          </Marker>
        );
      })}
    </ComposableMap>
  );
}