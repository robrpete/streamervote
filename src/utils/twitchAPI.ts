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

let searchOptions = {};

export default async function getAuth(token: string | null) {
  if (token) {
    accessToken = token;
    console.log(accessToken);
    return;
  } else {
    console.log("no token");
    return new Promise<void>((resolve, reject) => {
      fetch(`https://id.twitch.tv/oauth2/token`, authOptions)
        .then((response) => response.json())
        .then((data: authToken) => {
          if (data.access_token) {
            accessToken = data.access_token;

            resolve(); // Resolve the promise when the access token is obtained
          } else {
            console.error("Failed to obtain access token");
            reject("Failed to obtain access token"); // Reject the promise on failure
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          reject(error); // Reject the promise on error
        });
    });
  }
}

type ret = {
  data: Array<object>;
};
let arr: object[] = [];

export async function searchChannels(name: string, token: string) {
  void getAuth(token);
  if (name === "") {
    console.log("please enter a name", name);
    return;
  }
  searchOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Client-Id": clientID,
    },
  };
  await fetch(
    `https://api.twitch.tv/helix/search/channels?query=${name}`,
    searchOptions,
  )
    .then((response) => response.json())
    .then((data: ret) => (arr = data.data))

    .catch((error) => {
      console.error("Error:", error);
    });
  return arr;
}

export function checkToken() {
  console.log(accessToken);
  console.log(searchOptions);
}
