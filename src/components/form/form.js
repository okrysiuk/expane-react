import React, { useState } from "react";
import { ADD_CLIENT_MUTATION } from "../../graphql/mutations";
import { useMutation } from "@apollo/client";
//import { useForm } from "react-hook-form";

function Form({ newClient, clientToggle, clientId }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");

  const [createUser, { error }] = useMutation(ADD_CLIENT_MUTATION);
  const addUser = () => {
    createUser({
      variables: {
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        avatarUrl: avatarUrl,
      },
    });

    if (clientId) {
      console.log("ID: ", clientId);
    }

    if (error) {
      console.log(error);
    }
  };
  console.log(newClient, clientToggle);
  return (
    <div className="max-w-md flex flex-col border border-gray-400 p-2">
      <p className="text-gray-800 text-center">Clients form</p>
      <label>Firstname:</label>
      <input
        className="border border-gray-400 px-4 py-2 text-gray-800"
        type="text"
        placeholder="First Name"
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
      <span>&nbsp;</span>
      <label>Lastname:</label>
      <input
        className="border border-gray-400 px-4 py-2 text-gray-800"
        type="text"
        placeholder="Last Name"
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />
      <span>&nbsp;</span>
      <label>Phone</label>
      <input
        className="border border-gray-400 px-4 py-2 text-gray-800"
        type="text"
        placeholder="Phone"
        onChange={(e) => {
          setPhone(e.target.value);
        }}
      />
      <span>&nbsp;</span>
      <label>Avatar URL</label>
      <input
        className="border border-gray-400 px-4 py-2 text-gray-800"
        type="text"
        placeholder="Avatar URL"
        onChange={(e) => {
          setAvatarUrl(e.target.value);
        }}
      />
      <span>&nbsp;</span>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        onClick={addUser}
      >
        Add client
      </button>
      <span>&nbsp;</span>

      <button
        className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => console.log("Update")}
      >
        Update client data
      </button>
      <span>&nbsp;</span>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={clientToggle}
      >
        Cancel
      </button>
    </div>
  );
}

export default Form;
