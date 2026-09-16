'use client';

import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

interface Region {
  coords: [number, number];
  title: string;
  desc: string;
  dx: number;
  dy: number;
}

export default function WhyKenyaMap({ regions }: { regions: Region[] }) {
  return (
    <ComposableMap
      projection="geoMercator"
      // Zoomed in perfectly on Kenya's coordinates
      projectionConfig={{ scale: 2800, center: [37.8, 0.5] }} 
      style={{ width: "100%", height: "100%", overflow: "visible" }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies
            // ONLY render Kenya
            .filter((geo) => geo.properties.name === "Kenya")
            .map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#EAE6D9" // Elegant sand color for the landmass
                stroke="#111A30" // Royal Navy border
                strokeWidth={0.5}
                style={{
                  default: { outline: "none" },
                  hover: { outline: "none" },
                  pressed: { outline: "none" },
                }}
              />
            ))
        }
      </Geographies>

      {/* Dynamic Markers & Lines */}
      {regions.map((region, i) => (
        <Marker key={i} coordinates={region.coords}>
          {/* Exact Point */}
          <circle r={4} fill="#B50016" />
          
          {/* Connecting Dashed Line */}
          <line
            x1={0}
            y1={0}
            x2={region.dx}
            y2={region.dy}
            stroke="#B50016"
            strokeWidth={1.5}
            strokeDasharray="3 3"
            className="opacity-60"
          />
          
          {/* HTML Text Label Embedded in the Map */}
          <foreignObject
            x={region.dx > 0 ? region.dx + 10 : region.dx - 170}
            y={region.dy - 20}
            width={160}
            height={100}
            className="overflow-visible pointer-events-none"
          >
            <div className={`flex flex-col w-full h-full ${region.dx > 0 ? 'items-start text-left' : 'items-end text-right'}`}>
              <h5 className="font-playfair font-bold text-[#111a30] text-sm md:text-base bg-white/90 backdrop-blur-sm px-2.5 py-1 border border-[#111a30]/10 rounded shadow-sm inline-block">
                {region.title}
              </h5>
              <p className="font-lora text-[11px] leading-relaxed text-[#111a30]/80 mt-1 bg-white/80 backdrop-blur-sm px-2.5 py-1.5 border border-[#111a30]/10 rounded shadow-sm">
                {region.desc}
              </p>
            </div>
          </foreignObject>
        </Marker>
      ))}
    </ComposableMap>
  );
}