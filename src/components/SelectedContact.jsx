// map over each contact to add click event, this should be done in App.jsx
// create function that takes in a contact and returns specific information
// create && statement to make it only happen when a puppy is clicked
// render SelectedContact components

import { useState, useEffect } from "react";

export default function SelectedContact({
  selectedContactId,
  setSelectedContactId,
}) {
  const [contact, setContact] = useState(null);
  // const [selectedContactId, setSelectedContactId] = useState(null);
  useEffect(
    () =>
      async function fetchSingleUser() {
        try {
          const res = await fetch(
            `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
          );
          const data = await res.json();
          console.log(data);
          setContact(data);
        } catch (err) {
          console.log(err);
        }
      },
    [selectedContactId]
  );
  return (
    <div>
      <h1>{contact?.name}</h1>
      <p>{contact?.email}</p>
      <p>{contact?.address?.city}</p>
      <p>{contact?.phone}</p>
      <button
        onClick={() => {
          setSelectedContactId(null);
        }}
      >
        Back
      </button>
    </div>
  );
}
// Optional ? after a value that you gotta fetch first
// Optional chaing operator?
// Add a button that will return the setSelectedContactId to null
