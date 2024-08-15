import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import InstaIcon from "@/assets/social-insta.svg";
import LinkedinIcon from "@/assets/social-linkedin.svg";
import PinIcon from "@/assets/social-pin.svg";
import XIcon from "@/assets/social-x.svg";
import YoutubeIcon from "@/assets/social-youtube.svg";



import leaf from "@/assets/leaf.svg";
import pointer from "@/assets/pointer.svg";
import lock from "@/assets/lock.svg";
import notification from "@/assets/notification.svg";
import acme from "@/assets/logo-acme.png";
import quantum from "@/assets/logo-quantum.png";
import echo from "@/assets/logo-echo.png";
import celestial from "@/assets/logo-celestial.png";
import pulse from "@/assets/logo-pulse.png";
import apex from "@/assets/logo-apex.png";
import puzzle from "@/assets/puzzle.png";
import square from "@/assets/square.png";
export const navbar = [
  "about",
  "features",
  "updates",
  "help",
  "customers",
] as const;

export const logos = [
  {
    src: acme,
    alt: "acme",
  },
  {
    src: quantum,
    alt: "quantum",
  },
  {
    src: echo,
    alt: "echo",
  },
  {
    src: celestial,
    alt: "celestial",
  },
  {
    src: pulse,
    alt: "pulse",
  },
  {
    src: apex,
    alt: "apex",
  },
] as const;

export const productShowcaseFeatures = [
  {
    title: "Integration ecosystem",
    desc: "Track your progress and motivate your efforts everyday.",
    icon: leaf,
  },
  {
    title: "Goal setting and tracking",
    desc: "Set and track goals with manageable task breakdowns.",
    icon: pointer,
  },
  {
    title: "Secure data encryption",
    desc: "Ensure your data's safety with top-tier encryption.",
    icon: lock,
  },
  {
    title: "Customizable notifications",
    desc: "Get alerts on tasks and deadlines that matter most.",
    icon: notification,
  },
] as const;

export const features = [
  {
    src: puzzle,
    title: "Integration ecosystem",
    desc: "Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one place.",
  },
  {
    src: square,
    title: "Goal setting and tracking",
    desc: "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
  },
];

export const pricing = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
] as const;

export const testimonials = [
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    imageSrc: avatar1.src,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Our team's productivity has skyrocketed since we started using this tool. ",
    imageSrc: avatar2.src,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "This app has completely transformed how I manage my projects and deadlines.",
    imageSrc: avatar3.src,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    imageSrc: avatar4.src,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    imageSrc: avatar5.src,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch.",
    imageSrc: avatar6.src,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    imageSrc: avatar7.src,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    imageSrc: avatar8.src,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
    imageSrc: avatar9.src,
    name: "Casey Harper",
    username: "@casey09",
  },
] as const;



export const footerLinks = [InstaIcon ,LinkedinIcon , PinIcon , XIcon , YoutubeIcon ]


