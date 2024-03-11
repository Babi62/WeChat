import React from "react";

export default function MessageInput() {
  return (
    <form className="px4 my-3">
      <div className="w-full relative">
        <input
          type="text"
          placeholder="Type Message"
          className="border text-sm rounded-lg block w-96 p-2.5 bg-gray-700 border-gray-600 text-white"
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-1"
        >
          <img src="./send.svg" alt="send" />
        </button>
      </div>
    </form>
  );
}


