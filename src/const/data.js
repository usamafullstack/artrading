const CONTACT = {
  city: "Rawalpindi, Pakistan",
  contacts: [
    {
      icon: "location",
      line1: "Suite # 101, 1st Floor, Executive Apartment, 6th road,",
      line2: "Rawalpindi, Pakistan.",
    },
    {
      icon: "phone",
      line1: "+92 333 5165446",
      line2: "+92 321 5225246",
    },
    {
      icon: "email",
      line1: "info@artrading.co",
      line2: "381artrading@gmail.com",
    },
  ],
};

const SERVICES = [
  "Export / Import",
  "General Order Supplies",
  "Maintenance",
  "Interior Design",
  "Construction",
  "Solar Energy",
];

const HOME_CARDS = [
  {
    text: "Export & Import",
    icon: "shipping",
  },
  { text: "General Order", icon: "orders" },
  { text: "Manpower", icon: "manpower" },
  { text: "Interior Design", icon: "design" },
  { text: "Maintenance", icon: "maintenance" },
  { text: "Solar Energy", icon: "energy" },
];

const ROUTING_OPTIONS = [
  { name: "Home", route: "/" },
  { name: "About", route: "/about" },
  { name: "Services", route: "/services" },
  { name: "Products", route: "/products" },
  { name: "Contact", route: "/contact" },
];

export { CONTACT, SERVICES, HOME_CARDS, ROUTING_OPTIONS };
