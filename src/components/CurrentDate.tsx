"use client";

import { useEffect, useState } from "react";

type Props = {
  className?: string;
  fallback?: string;
};

const CurrentDate = ({ className, fallback = "লোড হচ্ছে..." }: Props) => {
  const [date, setDate] = useState("");

  useEffect(() => {
    const nextDate = new Date().toLocaleDateString("bn-BD", {
      dateStyle: "full",
      timeZone: "Asia/Dhaka",
    });

    setDate(nextDate);
  }, []);

  return (
    <span suppressHydrationWarning className={className}>
      {date || fallback}
    </span>
  );
};

export default CurrentDate;
