import { MessageCircle, Send, Phone, MessageSquare, X } from "lucide-react";
import { useState } from "react";

const FloatingContacts = () => {
  const [showPhoneAgents, setShowPhoneAgents] = useState(false);
  const [showTelegramAgents, setShowTelegramAgents] = useState(false);
  const [showWhatsappAgents, setShowWhatsappAgents] = useState(false);

  const directContacts = [
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

      {/* Expandable Telegram Button */}
      <div className="relative flex flex-col gap-3 items-start">
        <div 
          className={`flex flex-col gap-2 overflow-hidden transition-all duration-300 ease-in-out ${
            showTelegramAgents ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <a
            href="https://t.me/ONTOP121"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-[hsl(200,80%,50%)] hover:bg-[hsl(200,80%,42%)] text-white rounded-full px-4 py-2 shadow-md transition-all ml-1"
          >
            <Send className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium whitespace-nowrap">Agent 1</span>
          </a>
          <a
            href="https://t.me/ONTOP122"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-[hsl(200,80%,45%)] hover:bg-[hsl(200,80%,38%)] text-white rounded-full px-4 py-2 shadow-md transition-all ml-1"
          >
            <Send className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium whitespace-nowrap">Agent 2</span>
          </a>
        </div>
        
        <button
          onClick={() => {
            setShowTelegramAgents(!showTelegramAgents);
            if (showPhoneAgents) setShowPhoneAgents(false);
            if (showWhatsappAgents) setShowWhatsappAgents(false);
          }}
          className={`group flex items-center bg-[hsl(200,80%,50%)] hover:bg-[hsl(200,80%,42%)] text-white rounded-full p-3 shadow-lg transition-all duration-300`}
          aria-label="Telegram Us"
        >
          {showTelegramAgents ? <X className="w-6 h-6 shrink-0" /> : <Send className="w-6 h-6 shrink-0" />}
          <span className={`max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium transition-all duration-300 ${!showTelegramAgents ? 'group-hover:max-w-32 group-hover:ml-2' : ''}`}>
            {showTelegramAgents ? 'Close' : 'Telegram'}
          </span>
        </button>
      </div>

      {/* Expandable Phone Button */}
      <div className="relative flex flex-col gap-3 items-start">
        <div 
          className={`flex flex-col gap-2 overflow-hidden transition-all duration-300 ease-in-out ${
            showPhoneAgents ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
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
          onClick={() => {
            setShowPhoneAgents(!showPhoneAgents);
            if (showTelegramAgents) setShowTelegramAgents(false);
            if (showWhatsappAgents) setShowWhatsappAgents(false);
          }}
          className={`group flex items-center bg-primary hover:bg-primary/80 text-primary-foreground rounded-full p-3 shadow-lg transition-all duration-300`}
          aria-label="Call Us"
        >
          {showPhoneAgents ? <X className="w-6 h-6 shrink-0" /> : <Phone className="w-6 h-6 shrink-0" />}
          <span className={`max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium transition-all duration-300 ${!showPhoneAgents ? 'group-hover:max-w-32 group-hover:ml-2' : ''}`}>
            {showPhoneAgents ? 'Close' : 'Call Us'}
          </span>
        </button>
      </div>

      {/* Expandable WhatsApp Button */}
      <div className="relative flex flex-col gap-3 items-start">
        <div 
          className={`flex flex-col gap-2 overflow-hidden transition-all duration-300 ease-in-out ${
            showWhatsappAgents ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <a
            href="https://wa.me/251911229511"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,38%)] text-white rounded-full px-4 py-2 shadow-md transition-all ml-1"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium whitespace-nowrap">Agent 1 (0911229511)</span>
          </a>
          <a
            href="https://wa.me/251912026123"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,38%)] text-white rounded-full px-4 py-2 shadow-md transition-all ml-1"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium whitespace-nowrap">Agent 2 (0912026123)</span>
          </a>
        </div>
        
        <button
          onClick={() => {
            setShowWhatsappAgents(!showWhatsappAgents);
            if (showTelegramAgents) setShowTelegramAgents(false);
            if (showPhoneAgents) setShowPhoneAgents(false);
          }}
          className={`group flex items-center bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,38%)] text-primary-foreground rounded-full p-3 shadow-lg transition-all duration-300`}
          aria-label="WhatsApp Us"
        >
          {showWhatsappAgents ? <X className="w-6 h-6 shrink-0" /> : <MessageCircle className="w-6 h-6 shrink-0" />}
          <span className={`max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium transition-all duration-300 ${!showWhatsappAgents ? 'group-hover:max-w-32 group-hover:ml-2' : ''}`}>
            {showWhatsappAgents ? 'Close' : 'WhatsApp'}
          </span>
        </button>
      </div>
    </div>
  );
};

export default FloatingContacts;
