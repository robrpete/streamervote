const clientID = process.env.NEXT_PUBLIC_CLIENT_ID!;
const clientSecret = process.env.NEXT_PUBLIC_CLIENT_SECRET!;
let accessToken = "";

type authToken = {
  access_token: string;
};
const authOptions = {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  body: `client_id=${clientID}&client_secret=${clientSecret}&grant_type=client_credentials`,
};

export default async function getAuth() {
  await fetch(`https://id.twitch.tv/oauth2/token`, authOptions)
    .then((response) => response.json())
    .then((data: authToken) => {
      if (data.access_token) {
        accessToken = data.access_token;
      } else {
        console.error("Failed to obtain access token");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  console.log("access token ", accessToken);
}
