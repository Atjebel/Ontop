import { MessageCircle, Send, Phone, MessageSquare } from "lucide-react";

const FloatingContacts = () => {
  const contacts = [
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
    {
      href: "tel:0911229511",
      label: "Call Us",
      icon: Phone,
      bg: "bg-primary",
      hover: "hover:bg-primary/80",
    },
  ];

  return (
    <div className="fixed left-6 bottom-6 z-50 flex flex-col gap-3 items-start">
      {contacts.map((c) => (
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
    </div>
  );
};

export default FloatingContacts;
