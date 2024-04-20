import React, { useState } from "react";
import "./Campaigns.scss";

export const Campaigns: React.FC = () => {
  return (
    <div className="campaigns-page">
      <h2>Campaigns</h2>
      <button type="button">Create a campaign</button>
      <ul>
        <li>Campaign A</li>
        <li>Campaign B</li>
        <li>Campaign C</li>
        <li>Campaign D</li>
        <li>Campaign E</li>
      </ul>
    </div>
  );
};
