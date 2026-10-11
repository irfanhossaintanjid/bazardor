"use client";

import { useEffect, useState } from "react";

const BnDate = ({ className }: { className?: string }) => {
  const [date, setDate] = useState("");

  useEffect(() => {
    setDate(
      new Date().toLocaleDateString("bn-BD", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "Asia/Dhaka",
      })
    );
  }, []);

  return <span className={className}>{date || "\u00A0"}</span>;
};

export default BnDate;