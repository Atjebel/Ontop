import { MessageCircle, Send, Phone, MessageSquare, X } from "lucide-react";
import { useState } from "react";

const FloatingContacts = () => {
  const [showAgents, setShowAgents] = useState(false);

  const directContacts = [
    {
      href: "https://wa.me/qr/J42XDGEMZI3MI1",
      label: "WhatsApp",
      icon: MessageCircle,
      bg: "bg-[hsl(142,70%,45%)]",
      hover: "hover:bg-[hsl(142,70%,38%)]",
    },
    {
      href: "https://t.me/ONTOP121",
      label: "Telegram",
      icon: Send,
      bg: "bg-[hsl(200,80%,50%)]",
      hover: "hover:bg-[hsl(200,80%,42%)]",
    },
    {
      href: "sms:0911229511",
      label: "SMS",
      icon: MessageSquare,
      bg: "bg-[hsl(270,60%,55%)]",
      hover: "hover:bg-[hsl(270,60%,45%)]",
    },
  ];

  return (
    <div className="fixed left-6 bottom-6 z-50 flex flex-col gap-3 items-start">
      {directContacts.map((c) => (
        <a
          key={c.label}
          href={c.href}
          target={c.href.startsWith("http") ? "_blank" : undefined}
          rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
          className={`group flex items-center ${c.bg} ${c.hover} text-primary-foreground rounded-full p-3 shadow-lg transition-all duration-300`}
          aria-label={c.label}
        >
          <c.icon className="w-6 h-6 shrink-0" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium transition-all duration-300 group-hover:max-w-32 group-hover:ml-2">
            {c.label}
          </span>
        </a>
      ))}

      {/* Expandable Phone Button */}
      <div className="relative flex flex-col gap-3 items-start">
        <div 
          className={`flex flex-col gap-2 overflow-hidden transition-all duration-300 ease-in-out ${
            showAgents ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <a
            href="tel:0911229511"
            className="flex items-center bg-blue-600 hover:bg-blue-700 text-white rounded-full px-4 py-2 shadow-md transition-all ml-1"
          >
            <Phone className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium whitespace-nowrap">Agent 1 (0911229511)</span>
          </a>
          <a
            href="tel:0912026123"
            className="flex items-center bg-blue-500 hover:bg-blue-600 text-white rounded-full px-4 py-2 shadow-md transition-all ml-1"
          >
            <Phone className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium whitespace-nowrap">Agent 2 (0912026123)</span>
          </a>
        </div>
        
        <button
          onClick={() => setShowAgents(!showAgents)}
          className={`group flex items-center bg-primary hover:bg-primary/80 text-primary-foreground rounded-full p-3 shadow-lg transition-all duration-300`}
          aria-label="Call Us"
        >
          {showAgents ? <X className="w-6 h-6 shrink-0" /> : <Phone className="w-6 h-6 shrink-0" />}
          <span className={`max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium transition-all duration-300 ${!showAgents ? 'group-hover:max-w-32 group-hover:ml-2' : ''}`}>
            {showAgents ? 'Close' : 'Call Us'}
          </span>
        </button>
      </div>
    </div>
  );
};

export default FloatingContacts;
