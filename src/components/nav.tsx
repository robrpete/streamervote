export default function Nav() {
  return (
    <div className="w-full">
      <div className="hidden h-12 w-full items-center justify-between bg-[#18181B] px-4 text-lg font-semibold text-white md:flex">
        <div>SV</div>
        <div className="flex justify-evenly gap-2">
          <p>following</p>
          <p>browse</p>
          <div className=" flex flex-col items-center justify-center">
            <div className="mb-1 h-1 w-1 rounded-full bg-white"></div>
            {/* try not using margin. padding blocks div/br and gap */}
            <div className="mb-1 h-1 w-1 rounded-full bg-white"></div>
            <div className="h-1 w-1 rounded-full bg-white"></div>
          </div>
        </div>
        <div className="flex">
          <input
            type="text"
            placeholder="Search"
            className="text- rounded-l-full border-[1px] bg-[#18181B] px-2 py-0.5 outline-none hover:bg-slate-600"
          />
          <button className="rounded-r-full bg-black px-2 py-2 text-white">
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
          <div>avatar</div>
        </div>
      </div>
      <div className="flex h-12 w-full items-center justify-between bg-[#18181B] px-2 text-lg font-semibold text-white md:hidden">
        <div>SV</div>
        <div className=" flex flex-col items-center justify-center">
          <div className="mb-1 h-1 w-1 rounded-full bg-white"></div>
          <div className="mb-1 h-1 w-1 rounded-full bg-white"></div>
          <div className="h-1 w-1 rounded-full bg-white"></div>
        </div>
        <div className="text-md flex">
          <input
            type="text"
            placeholder="Search"
            className="mob:flex hidden rounded-l-full border-[1px] bg-[#18181B] px-2 py-0.5 outline-none hover:bg-slate-600"
          />
          <button className="mob:rounded-l-lg rounded-full bg-black px-2 py-2 text-white">
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
          <div>avatar</div>
        </div>
      </div>
    </div>
  );
}
