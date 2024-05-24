const auth = async () => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  const urlencoded = new URLSearchParams();
  urlencoded.append("grant_type", "client_credentials");
  urlencoded.append("client_id", "1l4j5m0kqgtgakebrb62astngr");
  urlencoded.append("client_secret", "ho5eppi7prblqtdg1uo26dbercav8i57v3opd1676gscsrq61n5");

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow"
  };

  let obj 
  const res = await fetch("https://boatsandfun-marina.auth.us-east-1.amazoncognito.com/oauth2/token", requestOptions)
  .then(data => obj = data)
    obj = await res.json();
    console.log(obj)

    return obj.access_token
}

let token = auth()

const eventHandler = async () => {
  
  let access_token = await token
  console.log(access_token)


   raw = {
    "startDate": "10/15/2024 09:00 AM",
    "endDate": "10/15/2024 05:00 PM",
    "productName": "24SD",
    "firstName": "Brandon",
    "lastName": "Araya",
    "email": "test@vquiprentals.com",
    "phone": "111-111-1111",
    "externalBookingId": "my-external-booking"
   }
   
   if (access_token) {
   
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${access_token}`);

  const reqOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };

  fetch("https://api.vquip.io/rentals/api/v1/reservation", reqOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));

    console.log(access_token)
}
    
} 
