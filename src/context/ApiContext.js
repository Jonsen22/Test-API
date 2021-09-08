var axios = require("axios").default;


async function getFromApi(options) {
    let responseData;
    await axios
      .request(options)
      .then(function (response) {
        // console.log(response.data);
        responseData = response.data;
      })
      .catch(function (error) {
        console.error(error);
      });
    return responseData;
  }

export async function getUsers() {
    var options = {
        method: "GET",
        url: "https://5ff75c21e7164b0017e1a82d.mockapi.io/api/v1/empreendimentos"

    };

    let response = await getFromApi(options)

    return response;
}

export async function getUserById(id) {
    var options = {
        method: "GET",
        url: `https://5ff75c21e7164b0017e1a82d.mockapi.io/api/v1/empreendimentos/${id}`

    };

    let response = await getFromApi(options)

    return response;
}