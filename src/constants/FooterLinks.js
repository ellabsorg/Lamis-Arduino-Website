const FooterLinks = {
  "content-left": [
    {
      id: 1,
      title: "Trademark",
      url: "/",
    },
    {
      id: 2,
      title: "Contact Us",
      url: "/",
    },
    {
      id: 3,
      title: "Distributors",
      url: "/",
    },
    {
      id: 4,
      title: "Careers",
      url: "/",
    },
    {
      id: 5,
      title: "Help Center",
      url: "/",
    },
    {
      id: 6,
      title: "Whistleblowing",
      url: "/",
    },
  ],

  bottom: [
    {
      id: 7,
      title: "Terms Of Service",
      url: "/",
    },
    {
      id: 8,
      title: "Privacy Policy",
      url: "/",
    },
    {
      id: 9,
      title: "Security",
      url: "/",
    },
    {
      id: 10,
      title: "Cookie Settings",
      url: "/",
    },
  ],
};
export default FooterLinks;

export const AllFooterLinks = [
  ...FooterLinks["content-left"],
  ...FooterLinks["bottom"],
];
