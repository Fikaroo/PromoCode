import React, { useState } from "react";
import styles from "../../../styles/report.module.css";
import TableComponent from "../../components/Table";
const Reports = () => {
  const [merchant, setMerchant] = useState("");
  const [source, setSource] = useState("");
  const [dateStart, setDateStart] = useState("");
  const [status, setStatus] = useState("");
  const headers = [
    "Promocode",
    "merchant",
    "description",
    "DATE start",
    "DATE END",
    "source",
    "status",
  ];
  return (
    <div className="space-y-8">
      <div className="flex justify-between">
        <div className="flex-1">
          <div className="grid max-w-xl grid-cols-2 gap-4 py-5">
            <div className="flex items-center justify-between gap-2">
              <label className="whitespace-nowrap">Sort by Source</label>
              <select
                value={source}
                onChange={(e) => setSource(e.target.value)}
              >
                <option value="US">Telegram Bot</option>
              </select>
            </div>
            <div className="flex items-center justify-between gap-2">
              <label className="whitespace-nowrap">Sort by Merchant</label>
              <select
                value={merchant}
                onChange={(e) => setMerchant(e.target.value)}
              >
                <option value="US">FRYDAY</option>
              </select>
            </div>
          </div>
          <div className="grid max-w-xl grid-cols-2 gap-4 py-5">
            <div className="flex items-center justify-between gap-2">
              <label className="whitespace-nowrap">Sort by Status</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="US">Used</option>
              </select>
            </div>
            <div className="flex items-center justify-between gap-2">
              <label className="whitespace-nowrap">Sort by Date</label>
              <select
                value={dateStart}
                onChange={(e) => setDateStart(e.target.value)}
              >
                <option value="US">Date</option>
              </select>
            </div>
          </div>
        </div>
        <div className="">
          <button className="px-8 py-3 text-gray-600 transition-all border border-gray-400 rounded hover:bg-gray-200 hover:scale-105">
            Export
          </button>
        </div>
      </div>
      <TableComponent headers={headers} variant={1} />
    </div>
  );
};

export default Reports;
