import axios from 'axios';

export const getContactsAPI = () => {
  return new Promise(function (resolve, reject) {
    let url = `/api/v1/contacts`;

    axios
      .get(url)
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        console.log("Service: getContacts", error);
      });
  });
}
