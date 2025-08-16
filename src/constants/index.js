// constants/index.js

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export const navLinks = [
  { id: 'home', title: 'Home' },
  { id: 'explore', title: 'Explore' },
  { id: 'aboutus', title: 'About Us' },
  { id: 'contactus', title: 'Contact Us' },
];

export const features = [
  {
    id: "feature-1",
    title: "Custom Design",
    content:
      "We create labels tailored to your unique brand identity, enhancing product appeal.",
  },
  {
    id: "feature-2",
    title: "Precision Printing",
    content:
      "Our advanced printing techniques ensure sharp, vibrant, and durable labels.",
  },
  {
    id: "feature-3",
    title: "Bulk & Small Orders",
    content:
      "No order is too big or too small — we deliver quality regardless of quantity.",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      { name: "Home", link: "#home" },
      { name: "Products & Services", link: "#features" },
      { name: "About Us", link: "#about" },
      { name: "Contact Us", link: "#contact" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Help Center", link: "#" },
      { name: "Terms & Conditions", link: "#" },
      { name: "Privacy Policy", link: "#" },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-2",
    icon: FaInstagram,
    link: "https://www.instagram.com/deepthilabelsofficial",
  },
  {
    id: "social-media-3",
    icon: FaTwitter,
    link: "https://www.twitter.com/",
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Years of Experience",
    value: "12+",
  },
  {
    id: "stats-2",
    title: "Labels Printed",
    value: "20,000+",
  },
  {
    id: "stats-3",
    title: "Clients Served",
    value: "160+",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    name: "Aarav Mehta",
    title: "Founder, Aroma Essentials",
    content:
      "The custom labels gave our product the professional touch it needed. Outstanding quality and service!",
  },
  {
    id: "feedback-2",
    name: "Priya Sharma",
    title: "CEO, Craftsy Co.",
    content:
      "Great experience! The team understood our vision and delivered exactly what we imagined—if not better.",
  },
  {
    id: "feedback-3",
    name: "Ravi Patel",
    title: "Marketing Head, FreshBrew",
    content:
      "They’ve been our go-to for all labeling needs. Fast turnaround and premium results every time.",
  },
];
