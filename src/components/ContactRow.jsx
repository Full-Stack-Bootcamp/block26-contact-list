export default function ContactRow({ setSelectedContactId, contact }) {
  const { name, phone, email } = contact;
  return (
    <tr onClick={() => setSelectedContactId(contact.id)}>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
    </tr>
  );
}
