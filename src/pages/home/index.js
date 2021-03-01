import React, { useState, useEffect } from "react";
import { Content, Details, Map } from "../../components";
import { getNetworks, getStations } from "../../clients";

const Home = () => {
  const locationStarted = { lat: 38.724954, lng: -9.149334 };
  const [networks, setNetworks] = useState({
    loading: false,
    zoom: 3,
    location: locationStarted,
    select: null,
  });

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    const result = await getNetworks();
    setNetworks({
      ...networks,
      data: result.data.networks,
      loading: false,
      zoom: 3,
      select: null,
    });
  };

  const handleClick = async ({ id }) => {
    setNetworks({ ...networks, loading: true });
    const result = await getStations(id);
    const {
      network: {
        name,
        stations,
        location: { city, latitude, longitude },
      },
    } = result.data;

    const data = stations.map(({ id, latitude, longitude, name }) => {
      return {
        id: id,
        location: { latitude, longitude },
        name: name,
        city,
        isDetails: true
      };
    });
    setNetworks({
      ...networks,
      zoom: 14,
      location: { lat: latitude, lng: longitude },
      select: { city: city, name, stations },
      data,
      loading: false,
    });
  };

  const handleClear = () => {
    setNetworks({
      ...networks,
      loading: true,
    });
    init();
  };

  return (
    <>
      <Content noBgColor>
        {!networks.loading ? (
          <>
            <Details networks={networks} handleClear={handleClear} />
            <Map networks={networks} handleClick={handleClick} />
          </>
        ) : (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
      </Content>
    </>
  );
};

export default Home;
