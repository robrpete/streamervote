import { useState } from "react";
import { api } from "~/utils/api";
import Image from "next/image";
import Link from "next/link";

import { searchChannels } from "~/utils/twitchAPI";
import { searchedStore } from "~/utils/zusState";
import { SignInButton } from "@clerk/nextjs";
import { SignOutButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import { Divider } from "@mantine/core";

type ss = {
  broadcaster_language: string;
  broadcaster_login: string;
  display_name: string;
  game_id: string;
  game_name: string;
  id: string;
  is_live: boolean;
  started_at: string;
  tag_ids: string[];
  tags: string[];
  thumbnail_url: string;
  title: string;
};

export default function Nav() {
  const { data: token } = api.token.getToken.useQuery();
  const { isSignedIn } = useUser();
  const [search, setSearch] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const searched = searchedStore((state) => state.searched);

  function handleSearch() {
    if (token) {
      const t = token[0]?.token ?? "";
      searched.clear();
      searchChannels(search, t)
        .then((result) => {
          result?.map((r) => {
            searchedStore.setState((prev) => ({
              searched: new Set(prev.searched).add({
                r: r as ss,
              }),
            }));
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  return (
    <div className="w-full">
      <div className="hidden h-12 w-full items-center bg-[#18181B] px-4 text-lg font-semibold text-white md:flex">
        <div className="flex w-1/3 gap-4">
          <Link href="/">
            <div>SV</div>
          </Link>

          <div className="flex gap-2">
            <p>following</p>
            <p>browse</p>
            <div className=" flex flex-col items-center justify-center">
              <div className="mb-1 h-1 w-1 rounded-full bg-white"></div>
              {/* try not using margin. padding blocks div/br and gap */}
              <div className="mb-1 h-1 w-1 rounded-full bg-white"></div>
              <div className="h-1 w-1 rounded-full bg-white"></div>
            </div>
          </div>
        </div>
        <div className="flex w-1/3 justify-center">
          <div className="flex w-full justify-center">
            <div className="flex w-full lg:w-4/5">
              <input
                type="text"
                placeholder="Search"
                value={search}
                className={`w-full rounded-l-full  bg-[#18181B] px-2 py-0.5 outline-none focus:border-purple-500 ${
                  search != ""
                    ? "border-y-[1px] border-l-[1px]"
                    : "border-[1px]"
                } `}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                onFocus={() => {
                  setIsFocused(true);
                }}
                onBlur={() => {
                  setIsFocused(false);
                }}
              ></input>
              {search && (
                <button
                  className={`flex items-center border-y-[1px] border-r-[1px]  text-white ${
                    isFocused ? "border-purple-500" : "border-white"
                  }`}
                  onClick={() => {
                    setSearch("");
                    console.log(search, "cleared");
                  }}
                >
                  <p className="px-2 text-gray-400 hover:rounded-full hover:bg-slate-500/25">
                    X
                  </p>
                  <div className="h-full w-2"></div>
                </button>
              )}
            </div>
            <Link href={`/search?term=${search}`}>
              <button
                onClick={handleSearch}
                className="rounded-r-full bg-black px-2 py-2 text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 512 512"
                  style={{ fill: "white" }}
                >
                  <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                </svg>
              </button>
            </Link>
          </div>
        </div>
        <div className="w-1/3">
          <div className="flex justify-end">
            {!isSignedIn && (
              <div className="bg-green-400 px-2 text-black">
                <SignInButton />
              </div>
            )}
            {isSignedIn && (
              <div className="bg-red-600 px-2">
                <SignOutButton />
              </div>
            )}
            <div className="w-2"></div>
            <Image
              src="/av.png"
              height={30}
              width={30}
              alt="avatar"
              className="rounded-full"
            />
          </div>
        </div>
      </div>

      <div className="flex h-12 w-full items-center justify-between bg-[#18181B] px-2 text-lg font-semibold text-white md:hidden">
        <div className="flex gap-4">
          <div>SV</div>
          <div className=" flex flex-col items-center justify-center">
            <div className="mb-1 h-1 w-1 rounded-full bg-white"></div>
            <div className="mb-1 h-1 w-1 rounded-full bg-white"></div>
            <div className="h-1 w-1 rounded-full bg-white"></div>
          </div>
        </div>
        <div className="text-md flex">
          <div className="flex w-full lg:w-4/5">
            <input
              type="text"
              placeholder="Search"
              value={search}
              className={`hidden w-full rounded-l-full bg-[#18181B]  px-2 py-0.5 outline-none focus:border-purple-500 mob:flex ${
                search != "" ? "border-y-[1px] border-l-[1px]" : "border-[1px]"
              } `}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              onFocus={() => {
                setIsFocused(true);
              }}
              onBlur={() => {
                setIsFocused(false);
              }}
            ></input>
            {search && (
              <button
                className={`flex items-center border-y-[1px] border-r-[1px]  text-white ${
                  isFocused ? "border-purple-500" : "border-white"
                }`}
                onClick={() => {
                  setSearch("");
                  console.log(search, "cleared");
                }}
              >
                <p className="px-2 text-gray-400 hover:rounded-full hover:bg-slate-500/25">
                  X
                </p>
                <div className="h-full w-2"></div>
              </button>
            )}
          </div>
          <button
            onClick={handleSearch}
            className="rounded-full bg-black px-2 py-2 text-white mob:rounded-l-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
              style={{ fill: "white" }}
            >
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
          </button>
        </div>
        <div>
          <div>
            <Image
              src="/av.png"
              height={30}
              width={30}
              alt="avatar"
              className="rounded-full"
              onClick={() => {
                console.log("avatar");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
