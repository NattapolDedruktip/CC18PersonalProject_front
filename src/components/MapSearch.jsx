import Map from "@/src/components/Map";
import MapSearchSidebar from "@/src/components/MapSearchSidebar";
import React from "react";

function MapSearch() {
  return (
    <div className="flex w-full">
      <div className="mt-[11vh] w-2/5 justify-center text-center h-[90vh]">
        <MapSearchSidebar />
      </div>

      <div className="z-10 mt-[11vh] w-3/5 justify-center text-center">
        <Map />
      </div>
    </div>
  );
}

export default MapSearch;
