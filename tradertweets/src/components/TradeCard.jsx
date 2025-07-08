// === src/components/TradeCard.jsx ===
import React from 'react';

const TradeCard = ({ trade }) => {
  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <img
        src={trade.image}
        alt="Trade Screenshot"
        className="w-full h-auto mb-2 rounded"
      />
      <p className="text-gray-800">{trade.note}</p>
    </div>
  );
};

export default TradeCard;
