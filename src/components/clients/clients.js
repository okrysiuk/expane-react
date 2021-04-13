import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_CLIENTS } from "../../graphql/queries";
import "./clients.css";

function Clients() {
  const {/* error, */loading, data } = useQuery(LOAD_CLIENTS);
  const [clients, setClients] = useState([]);
  //const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (data) {
      setClients(data.getClients);
      console.log(clients);
    }
  }, [clients, data]);


  const table = 
  <>
    <table className="table-auto">
      <thead>
        <tr className='bg-gray-200'>
          <th className='border border-gray-400 px-4 py-2 text-gray-800'>Firstname</th>
          <th className='border border-gray-400 px-4 py-2 text-gray-800'>Lastname</th>
          <th className='border border-gray-400 px-4 py-2 text-gray-800'>Phone</th>
          <th className='border border-gray-400 px-4 py-2 text-gray-800'>Avatar URL</th>
          <th className='border border-gray-400 px-4 py-2 text-gray-800'>Edit</th>
        </tr>
      </thead>
      <tbody>
        {clients.map((client, index) => {
        return <tr key={index}>
          <td className='border border-gray-400 px-4 py-2'>{client.firstName}</td>
          <td className='border border-gray-400 px-4 py-2'>{client.lastName}</td>
          <td className='border border-gray-400 px-4 py-2'>{client.phone}</td>
          <td className='border border-gray-400 px-4 py-2'><img style={{width: 50, height: 50}} src={client.avatarUrl} alt="avatar"/></td>
          <td className='border border-gray-400 px-4 py-2'><button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'> Edit </button></td>
          </tr>})}
      </tbody>
    </table>
  </>

  return <>{loading ? <p>...Loading</p> : table}</>;
}

export default Clients;
