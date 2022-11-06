export default function Modal({ options, setOptions }) {
  if (options.show)
    return (
      <div className="absolute inset-0 backdrop-brightness-50 w-screen h-screen z-[999]">
        <div
          className={`absolute top-1/4 left-1/2 -translate-x-1/2 bg-white rounded-lg overflow-hidden z-[999]`}
          style={{ minWidth: "450px" }}
        >
          <div className="space-y-2 text-center">
            <div className="shadow-sm py-3">
              <h5
                className={`ml-3 font-bold text-2xl  tracking-wider ${
                  options.type === "success" ? "text-green-500" : "text-red-500"
                }`}
              >
                {options.type === "success" ? "Success!" : "Error!"}
              </h5>
            </div>
            <div className="pb-8 pt-5 space-y-8 text-lg">
              {options.type === "success" ? (
                <svg
                  role="img"
                  className="w-16 h-16 text-green-500 block mx-auto"
                  fill="rgb(34 197 94 / var(--tw-text-opacity))"
                >
                  <use xlinkHref="/assets/icons/sprite.svg#success" />
                </svg>
              ) : (
                <svg
                  role="img"
                  className="w-16 h-16 block mx-auto text-red-500"
                  fill="rgb(239 68 68 / var(--tw-text-opacity))"
                >
                  <use xlinkHref="/assets/icons/sprite.svg#error" />
                </svg>
              )}
              <div className="font-bold">{options.message}</div>
              <button
                className={`px-10 py-1 rounded-md text-white font-bold ${
                  options.type === "success" ? "bg-green-500" : "bg-red-500"
                }`}
                onClick={() => setOptions({ ...options, show: false })}
              >
                Okay
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}
