const clientID = process.env.NEXT_PUBLIC_CLIENT_ID!;
const clientSecret = process.env.NEXT_PUBLIC_CLIENT_SECRET!;
let accessToken = "";

type authToken = {
  access_token: string;
};
type search_result = {
  display_name: string;
  is_live: boolean;
};
let searchResult: search_result[] = [];

const authOptions = {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  body: `client_id=${clientID}&client_secret=${clientSecret}&grant_type=client_credentials`,
};
const searchOptions = {
  method: "GET",
  headers: {
    Authorization: `Bearer ${accessToken}`,
    "Client-Id": clientID,
  },
};

export function checkToken() {
  console.log(accessToken);
  console.log(searchOptions);
}

export default async function getAuth() {
  console.log("ran");
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

export async function searchChannels(name: string) {
  await fetch(
    `https://api.twitch.tv/helix/search/channels?query=${name}`,
    searchOptions,
  )
    .then((response) => response.json())
    .then((data: search_result[]) => {
      if (data) {
        searchResult = data;
      } else {
        console.error("Search failed");
        console.log(searchOptions);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  console.log("search results ", searchResult);
}
