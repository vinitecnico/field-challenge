import React from "react";
import "./style.scss";

const Details = ({ networks = {}, handleClear }) => {
  return (
    <section className="home-body">
      {!networks.select && (
        <h3 className="home-body-title">Select Networks:</h3>
      )}
      {!networks.select && networks.data && networks.data && (
        <p>network total: {networks.data.length}</p>
      )}
      {networks.select && (
        <>
          <div>
            <div className="row align-items-start">
              <div className="col-8">
                <h3>
                  city: {networks.select.city} - stations:{" "}
                  {networks.select.name} - Number of stations:{" "}
                  {networks.select.stations.length}
                </h3>
              </div>
              <div className="col-4">
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={handleClear}
                >
                  clear
                </button>
              </div>
            </div>
            <div className="row align-items-start">
              <div className="col-12">
                <table className="table table-sm">
                  <thead>
                    <tr>
                      <th scope="col">name</th>
                      <th scope="col">empty slots</th>
                      <th scope="col">free bikes</th>
                      <th scope="col">date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {networks.select.stations.map(
                      ({ id, name, empty_slots, free_bikes, timestamp }) => (
                        <tr key={id}>
                          <td>{name}</td>
                          <td>{empty_slots}</td>
                          <td>{free_bikes}</td>
                          <td>
                            {Intl.DateTimeFormat("pt-BR", {
                              year: "numeric",
                              month: "numeric",
                              day: "numeric",
                              hour: "numeric",
                              minute: "numeric",
                              second: "numeric",
                            }).format(new Date(timestamp))}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Details;
