import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_CLIENTS } from "../../graphql/queries";
import "./clients.css";

function Clients() {
  const { error, loading, data } = useQuery(LOAD_CLIENTS);
  const [clients, setClients] = useState([]);
  //const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (data) {
      setClients(data.getClients);
      console.log(clients);
    }
  }, [clients, data]);

  return (
    <>
      {loading ? <p>...Loading</p> : <p>Loading completed</p>}
    </>
  );
}

export default Clients;
