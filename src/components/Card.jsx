import React from "react";

const Card = ({ id, name, age, email, occupation }) => {
  return (
    <div className="my-2 flex flex-col border bg-gray-900/70 border-gray-400/30 px-5 pb-2 pt-3 text-left gap-2 rounded-lg shadow-md">
      <div className="font-semibold text-white">{name}</div>
      <div className="text-sm text-gray-300">
        <p>Age: {age}</p>
        <p>Email: {email}</p>
        <p>Occupation: {occupation}</p>
      </div>
    </div>
  );
};

export default Card;
