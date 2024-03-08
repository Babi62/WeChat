import React from "react";

export default function LogoutButton() {
  return (
    <div className="mt-auto">
      <button className="btn btn-circle btn-sm btn-outline btn-error">
        <img src="./logout.svg" alt="Logout" />
      </button>
    </div>
  );
}
