// import logo from './logo.svg';
import './App.css';
import contacts from './Contacts.js';
import React from 'react';


//conditional rendering
// function App() {
//   let contactlist = contacts.map((contact) => {
//     return (
//       <li>
//         <div>Name: {contact.first_name.toUpperCase()} {contact.last_name.toUpperCase()}</div>
//         <div>Email: <a href={`mailto:${contact.email}`}>{contact.email}</a></div>
//         <div>Phone: {contact.phone}</div>
//       </li>
//     )
//   })

//   if (contacts.length > 0) {
//     return (
//       <div className="App">
//         <ul>{contactlist}</ul>

//         <div>Total Number of Contacts: {contacts.length}</div>
//       </div>
//     );
//   } else {
//     return (<div className="App">Sorry, can't sit here :(</div>)
//   }

// }

//Ternary Operator
// function App() {
//   let contactList = contacts.map((contact) => {
//     return (
//       <li>
//         <div>Name: {contact.first_name.toUpperCase()} {contact.last_name.toUpperCase()}</div>
//         <div>Email: <a href={`mailto:${contact.email}`}>{contact.email}</a></div>
//         <div>Phone: {contact.phone}</div>
//       </li>
//     )
//   })

//   if (contacts.length > 0) {
//     return (
//       <div className="App">
//         {contacts.length
//           ? <div><ul>{contactList}</ul><div>Total Number of Contacts: {contacts.length}</div></div>
//           : <div>Sorry, no contacts found :(</div>
//         }
//       </div>
//     )
//   } 

// };

//using react fragment
// function App() {
//   let contactList = contacts.map((contact) => {
//     return (
//       <li>
//         <div>Name: {contact.first_name.toUpperCase()} {contact.last_name.toUpperCase()}</div>
//         <div>Email: <a href={`mailto:${contact.email}`}>{contact.email}</a></div>
//         <div>Phone: {contact.phone}</div>
//       </li>
//     )
//   })

//   if (contacts.length > 0) {
//     return (
//       <div className="App">
//         { contacts.length
//           ? <React.Fragment><ul>{contactList}</ul><div>Total Number of Contacts: {contacts.length}</div></React.Fragment>
//           : <div>Sorry, no contacts found :(</div>
//           }
//       </div>
//     )
    
//   } 

// };

//for styling in JSX

function App() {
  let contactList = contacts.map( (contact) => {
    return (
      <tr className="contact">
        <td className="name">{contact.first_name.toUpperCase()} {contact.last_name.toUpperCase()}</td>
        <td className="email"><a href={`mailto:${contact.email}`}>{contact.email}</a></td>
        <td className="phone">{contact.phone}</td>
      </tr>
  )})

  return (
    <div className="App">
      <table className="contacts">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {contactList}
        </tbody>
      </table>
      { contacts.length
        ? <div className="contactSummary">Total Number of Contacts: {contacts.length}</div>
        : <div>Sorry, no contacts found :(</div>
      }
    </div>
  )
}


export default App;
