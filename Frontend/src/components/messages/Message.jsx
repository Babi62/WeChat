import React from "react";

export default function Message() {
  return (
    <div>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="UserImage" src="./profile.svg" />
          </div>
        </div>
        <div className="chat-bubble">Hi</div>
      </div>

      <div className="chat chat-end ">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="UserImage" src="./profile.svg" />
          </div>
        </div>
        <div className="chat-bubble chat-bubble-info">Hi</div>
      </div>
    </div>
  );
}
