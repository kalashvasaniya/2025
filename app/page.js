"use client";

import { useState, useEffect } from 'react';

const calculateYearProgress = () => {
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 1);
  const endOfYear = new Date(now.getFullYear() + 1, 0, 1);
  const totalDays = (endOfYear.getTime() - startOfYear.getTime()) / (1000 * 60 * 60 * 24);
  const daysPassed = (now.getTime() - startOfYear.getTime()) / (1000 * 60 * 60 * 24);
  return ((daysPassed / totalDays) * 100).toFixed(2);
};

export default function Home() {
  const [yearProgress, setYearProgress] = useState(calculateYearProgress());

  useEffect(() => {
    const updateProgress = () => {
      setYearProgress(calculateYearProgress());
    };

    // Update immediately
    updateProgress();

    // Set up interval to update daily
    const interval = setInterval(updateProgress, 24 * 60 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black p-4">
      <div className="text-white text-center">
        <span className="text-8xl sm:text-9xl md:text-[10rem] lg:text-[12rem] font-bold tracking-tighter">
          {yearProgress}%
        </span>
      </div>
    </main>
  );
}
