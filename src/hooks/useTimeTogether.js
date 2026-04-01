import { useState, useEffect } from 'react';

const START_DATE = new Date('2025-11-19T00:00:00');

function calculateTime() {
  const now = new Date();

  const totalDays = Math.floor((now - START_DATE) / (1000 * 60 * 60 * 24));

  let months =
    (now.getFullYear() - START_DATE.getFullYear()) * 12 +
    (now.getMonth() - START_DATE.getMonth());
  if (now.getDate() < START_DATE.getDate()) months--;

  const lastAnniversary = new Date(START_DATE);
  lastAnniversary.setMonth(lastAnniversary.getMonth() + months);
  const remainingDays = Math.floor(
    (now - lastAnniversary) / (1000 * 60 * 60 * 24)
  );

  return { totalDays, months, remainingDays };
}

export function useTimeTogether() {
  const [time, setTime] = useState(calculateTime);

  useEffect(() => {
    const id = setInterval(() => setTime(calculateTime()), 60_000);
    return () => clearInterval(id);
  }, []);

  return time;
}
