import { useState, useEffect } from "react";
import { Globe } from "lucide-react";

const TimeZoneBar = () => {
  const [times, setTimes] = useState({
    dubai: "",
    addis: "",
    london: "",
    china: "",
  });

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit', hour12: true };
      setTimes({
        dubai: now.toLocaleTimeString('en-US', { timeZone: 'Asia/Dubai', ...options }),
        addis: now.toLocaleTimeString('en-US', { timeZone: 'Africa/Addis_Ababa', ...options }),
        london: now.toLocaleTimeString('en-US', { timeZone: 'Europe/London', ...options }),
        china: now.toLocaleTimeString('en-US', { timeZone: 'Asia/Shanghai', ...options }),
      });
    };
    
    updateTimes();
    const interval = setInterval(updateTimes, 10000);
    return () => clearInterval(interval);
  }, []);

  // Avoid hydration mismatch by not rendering until mounted
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="bg-primary text-primary-foreground py-1.5 px-4 text-xs font-medium">
      <div className="container mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-1">
        <div className="flex items-center gap-1.5 font-bold mr-2">
          <Globe className="w-3.5 h-3.5" />
          <span>Local Times:</span>
        </div>
        <span className="flex items-center gap-1.5"><span className="opacity-70">Dubai</span> {times.dubai}</span>
        <span className="flex items-center gap-1.5"><span className="opacity-70">Addis Ababa</span> {times.addis}</span>
        <span className="flex items-center gap-1.5"><span className="opacity-70">London</span> {times.london}</span>
        <span className="flex items-center gap-1.5"><span className="opacity-70">China</span> {times.china}</span>
      </div>
    </div>
  );
};

export default TimeZoneBar;
