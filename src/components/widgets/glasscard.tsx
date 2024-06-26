import React from "react";

const GlassCard = ({ children } :any) => {
  return (
    <div className="GlassDiv flex flex-col lg:flex-row bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 rounded-xl overflow-hidden w-auto  max-w-5xl shadow-lg m-4 lg:m-6">
      {children}
    </div>
  );
};

export default GlassCard;
