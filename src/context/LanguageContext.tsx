import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "en" | "am";

export interface Translations {
  // Navbar
  nav_home: string;
  nav_destinations: string;
  nav_services: string;
  nav_about: string;
  nav_faq: string;
  nav_contact: string;
  nav_book: string;

  // Hero
  hero_title1: string;
  hero_title2: string;
  hero_subtitle: string;
  hero_explore: string;
  hero_contact: string;
  hero_feat1_title: string;
  hero_feat1_desc: string;
  hero_feat2_title: string;
  hero_feat2_desc: string;
  hero_feat3_title: string;
  hero_feat3_desc: string;
  hero_feat4_title: string;
  hero_feat4_desc: string;

  // Partners
  partners_title: string;

  // Destinations
  dest_tag: string;
  dest_title: string;
  dest_contact: string;

  // Services
  svc_tag: string;
  svc_title: string;
  svc_flight_title: string;
  svc_flight_desc: string;
  svc_hotel_title: string;
  svc_hotel_desc: string;
  svc_visa_title: string;
  svc_visa_desc: string;
  svc_tour_title: string;
  svc_tour_desc: string;
  svc_insurance_title: string;
  svc_insurance_desc: string;
  svc_support_title: string;
  svc_support_desc: string;
  svc_fast_title: string;
  svc_fast_desc: string;
  svc_cert_title: string;
  svc_cert_desc: string;
  svc_umrah_title: string;
  svc_umrah_desc: string;

  // About
  about_tag: string;
  about_title: string;
  about_desc: string;
  about_h1: string;
  about_h2: string;
  about_h3: string;
  about_h4: string;
  about_stat1_label: string;
  about_stat2_label: string;
  about_stat3_label: string;
  about_stat4_label: string;
  about_mission_title: string;
  about_mission_desc: string;

  // Contact
  contact_tag: string;
  contact_title: string;
  contact_desc: string;
  contact_fname: string;
  contact_lname: string;
  contact_email: string;
  contact_dest: string;
  contact_msg: string;
  contact_send: string;
  contact_sent_title: string;
  contact_sent_desc: string;

  // FAQ
  faq_tag: string;
  faq_title: string;
  faq_subtitle: string;
  faq_q1: string;
  faq_a1: string;
  faq_q2: string;
  faq_a2: string;
  faq_q3: string;
  faq_a3: string;
  faq_q4: string;
  faq_a4: string;
  faq_q5: string;
  faq_a5: string;
  faq_q6: string;
  faq_a6: string;
  faq_q7: string;
  faq_a7: string;
  faq_q8: string;
  faq_a8: string;
  faq_q9: string;
  faq_a9: string;
  faq_cta_text: string;
  faq_cta_btn: string;

  // Footer
  footer_tagline: string;
  footer_links: string;
  footer_top_dest: string;
  footer_contact: string;
  footer_rights: string;
}

const en: Translations = {
  nav_home: "Home",
  nav_destinations: "Destinations",
  nav_services: "Services",
  nav_about: "About",
  nav_faq: "FAQ",
  nav_contact: "Contact",
  nav_book: "Book Now",

  hero_title1: "Explore the World",
  hero_title2: "With ONTOP",
  hero_subtitle: "Your trusted travel partner for unforgettable journeys. We craft bespoke experiences tailored to your dreams.",
  hero_explore: "Explore Destinations",
  hero_contact: "Contact Us",
  hero_feat1_title: "200+ Destinations",
  hero_feat1_desc: "Worldwide coverage",
  hero_feat2_title: "Trusted & Secure",
  hero_feat2_desc: "Safe bookings",
  hero_feat3_title: "24/7 Support",
  hero_feat3_desc: "Always here for you",
  hero_feat4_title: "Tailored Trips",
  hero_feat4_desc: "Crafted for you",

  partners_title: "Our Partners",

  dest_tag: "Popular Destinations",
  dest_title: "Where Will You Go Next?",
  dest_contact: "Contact Us",

  svc_tag: "What We Offer",
  svc_title: "Our Travel Services",
  svc_flight_title: "Flight Booking",
  svc_flight_desc: "Best deals on domestic and international flights with top airlines worldwide.",
  svc_hotel_title: "Hotel Reservations",
  svc_hotel_desc: "Handpicked hotels and resorts from budget-friendly to luxury 5-star stays.",
  svc_visa_title: "Visa Services",
  svc_visa_desc: "We assist travelers with fast and reliable visa processing for multiple destinations. Whether it's tourist, business, or transit visas, our team ensures a smooth and hassle-free experience, handling all the paperwork and embassy communication for you.\n\n🔴 Tourist, Business, and Transit visa support\n🔴 Guidance on visa requirements and eligibility\n🔴 Document preparation and embassy submission\n🔴 Expedited processing for urgent travel needs\n🔴 Real-time updates on application status",
  svc_tour_title: "Tour Packages",
  svc_tour_desc: "Curated travel packages with guided tours, activities, and local experiences.",
  svc_insurance_title: "Travel Insurance",
  svc_insurance_desc: "Comprehensive coverage to protect your trip from unexpected events.",
  svc_support_title: "24/7 Support",
  svc_support_desc: "Round-the-clock assistance wherever you are in the world.",
  svc_fast_title: "Fast and Reliable",
  svc_fast_desc: "We guarantee timely delivery and exceptional customer service to ensure a seamless travel experience.",
  svc_cert_title: "Our Certifications & Awards",
  svc_cert_desc: "Recognized for our commitment to quality, safety, and professional excellence",
  svc_umrah_title: "Umrah Packages",
  svc_umrah_desc: "Spiritual Pilgrimage Services. Specialized religious travel packages for Umrah pilgrimage. We handle all aspects including visa processing, accommodation near the holy sites, guided religious tours, and ground transportation.\n\n• Complete visa processing assistance\n• Hotels near Masjid al-Haram\n• Guided religious rituals and tours\n• Ground transportation in Saudi Arabia\n• Group and individual packages available",

  about_tag: "About Us",
  about_title: "Why Choose ONTOP Travel Service?",
  about_desc: "At ONTOP Travel Service, we believe every journey should be extraordinary. Our dedicated team of travel experts works tirelessly to craft personalized experiences that exceed expectations — from exotic getaways to business travel solutions.",
  about_h1: "15+ years of travel expertise",
  about_h2: "Partnerships with 500+ hotels and airlines",
  about_h3: "Customized itineraries for every budget",
  about_h4: "Thousands of satisfied travelers worldwide",
  about_stat1_label: "Happy Travelers",
  about_stat2_label: "Destinations",
  about_stat3_label: "Expriance",
  about_stat4_label: "Customer Support",
  about_mission_title: "OUR Mission",
  about_mission_desc: "On top travel is a travel company that offers a unique and personalized experience for travelers. We are passionate about providing authentic and sustainable travel experiences that are tailored to meet the needs and preferences of our clients. Our mission is to create memories that will last a lifetime.\n\nOn Top Travel has always been known for our reliability, quality, and efficiency, and now we have come up with a unique idea",

  contact_tag: "Get In Touch",
  contact_title: "Plan Your Next Adventure",
  contact_desc: "Ready to start your journey? Reach out to our travel experts and we'll help you plan the perfect trip.",
  contact_fname: "First Name",
  contact_lname: "Last Name",
  contact_email: "Email",
  contact_dest: "Destination of Interest",
  contact_msg: "Tell us about your dream trip...",
  contact_send: "Send Message",
  contact_sent_title: "Message Sent!",
  contact_sent_desc: "We'll get back to you shortly.",

  faq_tag: "Got Questions?",
  faq_title: "Frequently Asked Questions",
  faq_subtitle: "Everything you need to know before you book your dream trip with ONTOP.",
  faq_q1: "How do I book a trip with ONTOP?",
  faq_a1: "Simply fill out the contact form on our website or reach out via WhatsApp/Telegram. One of our travel experts will get back to you within 24 hours to start planning your perfect itinerary.",
  faq_q2: "What destinations do you cover?",
  faq_a2: "We offer travel packages to 200+ destinations worldwide — including Europe, Asia, Africa, the Americas, and beyond. If you have a specific place in mind, just ask!",
  faq_q3: "Can I customize my travel package?",
  faq_a3: "Absolutely. Every trip we arrange is tailored to your preferences, budget, and schedule. We don't do one-size-fits-all — your journey is uniquely yours.",
  faq_q4: "Is travel insurance included?",
  faq_a4: "Travel insurance is available as an add-on to any package. We strongly recommend it for international travel and can help you choose the right coverage for your trip.",
  faq_q5: "What payment methods do you accept?",
  faq_a5: "We accept bank transfers, mobile money, and other payment methods. Our team will walk you through the payment process when you book.",
  faq_q6: "What if I need to cancel or change my booking?",
  faq_a6: "We understand that plans change. Our team will work with you to modify or cancel your booking based on the supplier's policy. We always aim to find the best solution for our clients.",
  faq_q7: "Can I change my ticket after it's issued?",
  faq_a7: "Yes, you can request changes to your ticket after issuance. However, please note that change fees and fare differences may apply based on the airline's policies.",
  faq_q8: "What documents do I need for a visa application?",
  faq_a8: "Requirements vary by country, but generally include:\n• Valid passport\n• Passport-size photos\n• Bank statements\n• Employment or business documents\n• Travel itinerary\nWe will guide you through everything step-by-step.",
  faq_q9: "Do you assist with visa applications?",
  faq_a9: "Yes, we provide full visa support, including document checklists, application form assistance, appointment booking, and travel insurance recommendations.",
  faq_cta_text: "Still have questions? We're happy to help.",
  faq_cta_btn: "Contact Our Team",

  footer_tagline: "Your trusted partner for extraordinary travel experiences around the globe.",
  footer_links: "Quick Links",
  footer_top_dest: "Top Destinations",
  footer_contact: "Contact Us",
  footer_rights: "© 2026 ONTOP Travel Service. All rights reserved.",
};

const am: Translations = {
  nav_home: "መነሻ",
  nav_destinations: "መዳረሻዎች",
  nav_services: "አገልግሎቶች",
  nav_about: "ስለ እኛ",
  nav_faq: "ጥያቄዎች",
  nav_contact: "ያግኙን",
  nav_book: "አሁን ያስይዙ",

  hero_title1: "ዓለምን ያስሱ",
  hero_title2: "ከ ONTOP ጋር",
  hero_subtitle: "ለማይረሳ ጉዞ የሚታመን የጉዞ አጋርዎ። ለህልምዎ የተበጁ ልዩ ተሞክሮዎችን እናቀርብልዎ።",
  hero_explore: "መዳረሻዎችን ያስሱ",
  hero_contact: "ያግኙን",
  hero_feat1_title: "200+ መዳረሻዎች",
  hero_feat1_desc: "በዓለም አቀፍ ሽፋን",
  hero_feat2_title: "ታማኝ እና ደህንነቱ የተጠበቀ",
  hero_feat2_desc: "ደህንነቱ የተጠበቀ ቦታ ማስያዝ",
  hero_feat3_title: "24/7 ድጋፍ",
  hero_feat3_desc: "ሁልጊዜ ለእርስዎ ዝግጁ",
  hero_feat4_title: "ተስማሚ ጉዞዎች",
  hero_feat4_desc: "ለእርስዎ የተዘጋጀ",

  partners_title: "አጋሮቻችን",

  dest_tag: "ታዋቂ መዳረሻዎች",
  dest_title: "ቀጥሎ የት ይሄዳሉ?",
  dest_contact: "ያግኙን",

  svc_tag: "የምናቀርበው",
  svc_title: "የጉዞ አገልግሎቶቻችን",
  svc_flight_title: "የበረራ ቦታ ማስያዝ",
  svc_flight_desc: "ከዓለም ዙሪያ ካሉ ምርጥ አየር መንገዶች ጋር ምርጥ ዋጋ።",
  svc_hotel_title: "የሆቴል ቦታ ማስያዝ",
  svc_hotel_desc: "ከቀለል ያለ ወጪ እስከ ቅንጦት 5-ኮከብ ቆይታ የሚደርሱ ምርጥ ሆቴሎች።",
  svc_visa_title: "የቪዛ አገልግሎቶች",
  svc_visa_desc: "ለተለያዩ መዳረሻዎች ፈጣን እና አስተማማኝ የቪዛ ሂደቶችን እናግዛለን። የቱሪስት፣ የንግድ ወይም የትራንዚት ቪዛ፣ ቡድናችን የሰነድ ዝግጅትን እና የኤምባሲ ግንኙነቶችን በመያዝ ለስላሳ እና እንከን የለሽ ተሞክሮን ያረጋግጣል።\n\n🔴 የቱሪስት፣ የንግድ እና የትራንዚት ቪዛ ድጋፍ\n🔴 በቪዛ መስፈርቶች እና ብቁነት ላይ መመሪያ\n🔴 የሰነድ ዝግጅት እና ኤምባሲ ማቅረብ\n🔴 ለአስቸኳይ የጉዞ ፍላጎቶች ፈጣን ሂደት\n🔴 በማመልከቻ ሁኔታ ላይ ፈጣን መረጃ",
  svc_tour_title: "የጉዞ ፓኬጆች",
  svc_tour_desc: "ከሚመሩ ጉብኝቶች፣ ተግባራት እና የአካባቢ ተሞክሮዎች ጋር የተዘጋጁ ፓኬጆች።",
  svc_insurance_title: "የጉዞ ኢንሹራንስ",
  svc_insurance_desc: "ጉዞዎን ከማይጠበቁ ሁኔታዎች ለመጠበቅ ሁሉን አቀፍ ሽፋን።",
  svc_support_title: "24/7 ድጋፍ",
  svc_support_desc: "በዓለም ውስጥ ባሉበት ቦታ ሁሉ ቀን ሌሊት ድጋፍ።",
  svc_fast_title: "ፈጣን እና አስተማማኝ",
  svc_fast_desc: "እንከን የለሽ የጉዞ ልምድን ለማረጋገጥ ወቅታዊ አቅርቦት እና ልዩ የደንበኞች አገልግሎት እናረጋግጣለን።",
  svc_cert_title: "የኛ ማረጋገጫዎች እና ሽልማቶች",
  svc_cert_desc: "ለጥራት፣ ለደህንነት እና ለሙያዊ የላቀ ብቃት ባለን ቁርጠኝነት እውቅና የተሰጠን",
  svc_umrah_title: "የኡምራ ፓኬጆች",
  svc_umrah_desc: "መንፈሳዊ የሐጅ አገልግሎቶች። ለኡምራ ጉዞ ልዩ የሃይማኖት የጉዞ ፓኬጆች። የቪዛ አሰራርን፣ በቅዱስ ቦታዎች አቅራቢያ የሚገኝ ማረፊያን፣ የሚመሩ ሃይማኖታዊ ጉብኝቶችን እና የምድር ትራንስፖርትን ጨምሮ ሁሉንም ገጽታዎች እናስተናግዳለን።\n\n• ሙሉ የቪዛ አሰራር ድጋፍ\n• በመስጂድ አል-ሀረም አቅራቢያ ያሉ ሆቴሎች\n• የሚመሩ የሃይማኖታዊ ስነስርዓቶች እና ጉብኝቶች\n• በሳዑዲ አረቢያ የምድር ትራንስፖርት\n• የቡድን እና የግል ፓኬጆች ይገኛሉ",

  about_tag: "ስለ እኛ",
  about_title: "ለምን ONTOP የጉዞ አገልግሎትን ይምረጡ?",
  about_desc: "በONTOP የጉዞ አገልግሎት፣ እያንዳንዱ ጉዞ ልዩ መሆን እንዳለበት እናምናለን። ሙሉ ቡድናችን ከምርጥ ጉዞዎች እስከ የንግድ ጉዞ መፍትሄዎች ድረስ ከቅeዎት በላይ የሆኑ ልዩ ተሞክሮዎችን ለማቅረብ ሳይታክት ይሰራል።",
  about_h1: "ከ15+ ዓመት የጉዞ ልምድ",
  about_h2: "ከ500+ ሆቴሎች እና አየር መንገዶች ጋር ሽርክና",
  about_h3: "ለእያንዳንዱ በጀት የተበጀ የጉዞ መርሃ ግብር",
  about_h4: "በሺዎች የሚቆጠሩ ተደሳቾ ተጓዦች ዓለም ዙሪያ",
  about_stat1_label: "ደስተኛ ተጓዦች",
  about_stat2_label: "መዳረሻዎች",
  about_stat3_label: "ልምድ",
  about_stat4_label: "የደንበኛ ድጋፍ",
  about_mission_title: "ተልእኮአችን",
  about_mission_desc: "ኦን ቶፕ ትራቭል ለተጓዦች ልዩ እና ግላዊ የሆነ ተሞክሮን የሚያቀርብ የጉዞ ኩባንያ ነው። የደንበኞቻችንን ፍላጎት እና ምርጫ ለማሟላት የተዘጋጁ እውነተኛ እና ዘላቂ የጉዞ ተሞክሮዎችን ለማቅረብ እንተጋለን። ተልእኳችን የዕድሜ ልክ ትዝታዎችን መፍጠር ነው።\n\nኦን ቶፕ ትራቭል ሁልጊዜም በአስተማማኝነቱ፣ በጥራቱ እና በብቃቱ ይታወቃል፤ አሁን ደግሞ ልዩ በሆነ ሀሳብ መጥተናል",

  contact_tag: "ያግኙን",
  contact_title: "ቀጣዩን ጀብደኛ ጉዞዎን ያቅዱ",
  contact_desc: "ጉዞዎን ለመጀመር ዝግጁ ነዎት? ለምርጥ ጉዞ እቅድ የጉዞ ባለሙያዎቻችን ያግኙን።",
  contact_fname: "ስም",
  contact_lname: "የአባት ስም",
  contact_email: "ኢሜይል",
  contact_dest: "ፍላጎትዎ ያለው መዳረሻ",
  contact_msg: "ስለ ህልም ጉዞዎ ይንገሩን...",
  contact_send: "መልዕክት ላክ",
  contact_sent_title: "መልዕክቱ ተልኳል!",
  contact_sent_desc: "በቅርቡ ወደ እርስዎ እንደርሳለን።",

  faq_tag: "ጥያቄ አለዎት?",
  faq_title: "የተደጋጋሚ ጥያቄዎች",
  faq_subtitle: "ከONTOP ጋር ጉዞዎን ከማስያዝዎ በፊት ማወቅ የሚፈልጉትን ሁሉ ይህ ነው።",
  faq_q1: "እንዴት ጉዞ ማስያዝ ይቻላል?",
  faq_a1: "በድረ-ገፃችን ላይ ያለውን የመገናኛ ቅጽ ይሙሉ ወይም በዋትሳፕ/ቴሌግራም ያግኙን። የጉዞ ባለሙያዎቻችን በ24 ሰዓት ውስጥ ይደውሉልዎ።",
  faq_q2: "ወደ የትኞቹ መዳረሻዎች ይጓዛሉ?",
  faq_a2: "ከ200+ ዓለም አቀፍ መዳረሻዎች — አውሮፓ፣ እስያ፣ አፍሪካ፣ አሜሪካ እና ሌሎችም። ልዩ ቦታ ካለዎት ያሳውቁን!",
  faq_q3: "የጉዞ ፓኬጁን ማበጀት ይቻላል?",
  faq_a3: "በእርግጥ። እያንዳንዱ ጉዞ እንደ ፍላጎትዎ፣ በጀትዎ እና ጊዜ ሰሌዳዎ ይበጃል። ጉዞዎ ልዩ ነው።",
  faq_q4: "የጉዞ ኢንሹራንስ ተካቷል?",
  faq_a4: "የጉዞ ኢንሹራንስ እንደ ተጨማሪ አገልግሎት ይገኛል። ለዓለም አቀፍ ጉዞ ይመከራል፤ ቡድናችን ትክክለኛ ሽፋን እንዲያገኙ ይረዳዎ።",
  faq_q5: "ምን ዓይነት የክፍያ ዘዴዎች ይቀበላሉ?",
  faq_a5: "የባንክ ዝውውር፣ ሞባይል ብር እና ሌሎች ዘዴዎች ይቀበላሉ። ቡድናችን የክፍያ ሂደቱን ያሳውቀዎታል።",
  faq_q6: "ቦታ ማስያዙን ለማሻሻል ወይም ለመሰረዝ ምን ማድረግ ይቻላል?",
  faq_a6: "እቅዶች ሊለወጡ እንደሚችሉ እንረዳለን። ቡድናችን ቦታ ማስያዙን ለማሻሻል ወይም ለመሰረዝ ከአቅራቢ ፖሊሲ መሰረት ይሰራሉ።",
  faq_q7: "ቲኬቴ ከተቆረጠ በኋላ መቀየር እችላለሁ?",
  faq_a7: "አዎ፣ ቲኬትዎ ከተቆረጠ በኋላ ለውጦችን መጠየቅ ይችላሉ። ነገር ግን በአየር መንገዱ ፖሊሲ መሰረት የለውጥ ክፍያዎች ሊኖሩ ይችላሉ።",
  faq_q8: "ለቪዛ ማመልከቻ ምን ምን ሰነዶች ያስፈልጉኛል?",
  faq_a8: "መስፈርቶቹ እንደየአገሩ ይለያያሉ ነገር ግን በአብዛኛው እነዚህን ያካትታሉ፡\n• ህጋዊ ፓስፖርት\n• የፓስፖርት መጠን ፎቶዎች\n• የባንክ መግለጫዎች\n• የስራ ወይም የንግድ ሰነዶች\n• የጉዞ መርሃ ግብር\nበእያንዳንዱ ደረጃ እንመራዎታለን።",
  faq_q9: "የቪዛ ማመልከቻዎችን በማስገባት ትረዳላችሁ?",
  faq_a9: "አዎ፣ የሰነድ ማረጋገጫ ዝርዝሮችን፣ የቅጽ ማመልከቻ እገዛን፣ ቀጠሮ ማስያዝን እና የጉዞ ኢንሹራንስ ምክሮችን ጨምሮ ሙሉ የቪዛ ድጋፍ እንሰጣለን።",
  faq_cta_text: "ሌሎች ጥያቄዎች አሉዎት? ደስታችን ነው ለመርዳት።",
  faq_cta_btn: "ቡድናችን ያግኙ",

  footer_tagline: "በዓለም ዙሪያ ለልዩ የጉዞ ተሞክሮዎች የሚታመን አጋርዎ።",
  footer_links: "ፈጣን አገናኞች",
  footer_top_dest: "ምርጥ መዳረሻዎች",
  footer_contact: "ያግኙን",
  footer_rights: "© 2026 ONTOP የጉዞ አገልግሎት። መብቱ በህግ የተጠበቀ ነው።",
};

const translations: Record<Lang, Translations> = { en, am };

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => { },
  t: en,
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    const stored = localStorage.getItem("ontop-lang");
    return stored === "am" ? "am" : "en";
  });

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("ontop-lang", l);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
