import React from "react";
import caseDetails from "./CaseDetails.json";

const CaseDetails = () => {
  return (
    <div className="bg-white border-2 border-[#2B4C65] p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-[#00008B] mb-4">
        Case Details
      </h2>

      <p className="text-[#2B4C65] mb-2">
        <strong>Case ID:</strong> {caseDetails.caseId}
      </p>

      <h3 className="text-xl font-semibold text-[#2B4C65] mb-2">Charges:</h3>
      <ul className="list-disc list-inside mb-4 text-[#2B4C65]">
        {caseDetails.charges.map((charge, index) => (
          <li key={index}>
            <strong>
              {charge.section} - {charge.title}:
            </strong>{" "}
            {charge.description}
            <br />
            <em>Penalty:</em> {charge.penalty}
          </li>
        ))}
      </ul>

      <p className="text-[#2B4C65] mb-2">
        <strong>Imprisonment Duration:</strong>{" "}
        {caseDetails.imprisonmentDuration}
      </p>
      <p className="text-[#2B4C65] mb-2">
        <strong>Hearing Dates:</strong> {caseDetails.hearingDates.join(", ")}
      </p>
      <p className="text-[#2B4C65] mb-2">
        <strong>Judge:</strong> {caseDetails.judge}
      </p>

      <h3 className="text-xl font-semibold text-[#2B4C65] mb-2">
        Bail Status:
      </h3>
      <p className="text-[#2B4C65] mb-4">{caseDetails.bailStatus}</p>

      <h3 className="text-xl font-semibold text-[#2B4C65] mb-2">
        Bail History:
      </h3>
      <ul className="list-disc list-inside mb-4 text-[#2B4C65]">
        {caseDetails.bailHistory.map((entry, index) => (
          <li key={index}>
            <strong>Date:</strong> {entry.date} - <strong>Status:</strong>{" "}
            {entry.status}
            <br />
            <em>Remarks:</em> {entry.remarks}
          </li>
        ))}
      </ul>

      <h3 className="text-xl font-semibold text-[#2B4C65] mb-2">Lawyer:</h3>
      <p className="text-[#2B4C65] mb-2">
        <strong>Name:</strong> {caseDetails.lawyer.name} <br />
        <strong>Contact:</strong> {caseDetails.lawyer.contact}
      </p>
    </div>
  );
};

export default CaseDetails;
