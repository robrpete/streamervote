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

            resolve();
          } else {
            console.error("Failed to obtain access token");
            reject("Failed to obtain access token");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          reject(error);
        });
    });
  }
}

type ret = {
  data: Array<object>;
};

export async function searchChannels(name: string, token: string) {
  void getAuth(token);
  if (name === "") {
    console.log("please enter a name");
    return;
  }
  searchOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Client-Id": clientID,
    },
  };
  const res = await fetch(
    `https://api.twitch.tv/helix/search/channels?query=${name}`,
    searchOptions,
  );
  if (!res.ok) {
    throw new Error("no res");
  }
  const data = (await res.json()) as ret;
  return data.data;
}

export function checkToken() {
  console.log(accessToken);
  console.log(searchOptions);
}
