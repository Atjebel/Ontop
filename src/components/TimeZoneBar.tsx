import { useState, useEffect } from "react";
import { Globe, Clock } from "lucide-react";

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
    <div className="container mx-auto px-4 mt-8 mb-4">
      <div className="bg-gradient-to-br from-blue-600 to-sky-500 rounded-3xl p-6 md:p-10 max-w-5xl mx-auto shadow-xl text-white">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 mb-8 text-white/90">
            <Globe className="w-7 h-7 text-white" />
            <h3 className="text-lg font-heading font-bold uppercase tracking-wider text-white">Global Time Zones</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
            {[
              { city: 'Dubai', time: times.dubai },
              { city: 'Addis Ababa', time: times.addis },
              { city: 'London', time: times.london },
              { city: 'China', time: times.china },
            ].map((tz) => (
              <div key={tz.city} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 text-center shadow-lg hover:bg-white/20 transition-all group">
                <Clock className="w-8 h-8 text-white mx-auto mb-3 opacity-90 group-hover:scale-110 transition-transform" />
                <p className="font-heading text-white font-bold text-lg md:text-xl tracking-tight">{tz.time}</p>
                <p className="text-blue-100 font-medium text-sm mt-1">{tz.city}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeZoneBar;
