import React from "react";

export interface Asset {
  id: number;
  name: string;
  type: "Monitor" | "Headphone" | "Desk" | "Cubicle";
  assignedTo?: string;
}

interface AssetListProps {
  assets: Asset[];
}

const AssetList: React.FC<AssetListProps> = ({ assets }) => (
  <div className="bg-white rounded shadow p-6 mt-6">
    <h3 className="font-bold text-lg mb-4">Assets</h3>
    <table className="min-w-full text-left">
      <thead>
        <tr>
          <th className="py-2 px-4">Name</th>
          <th className="py-2 px-4">Type</th>
          <th className="py-2 px-4">Assigned To</th>
        </tr>
      </thead>
      <tbody>
        {assets.map((asset) => (
          <tr key={asset.id}>
            <td className="py-2 px-4">{asset.name}</td>
            <td className="py-2 px-4">{asset.type}</td>
            <td className="py-2 px-4">{asset.assignedTo || "-"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default AssetList;
