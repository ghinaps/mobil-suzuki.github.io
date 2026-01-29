import { Car, Testimonial, Article } from "./types";

export const SALES_INFO = {
  name: "Mardi Janwar",
  phone: "6281318229451", // Indonesian country code
};

export const SUZUKI_LOGO_URL = "https://iili.io/KJCXvz7.png";

export const HERO_SLIDES = [
  {
    image:
      "https://mobilsuzukisolo.com/wp-content/uploads/2024/02/Banner-All-New-Ertiga-Cruise.png",
    title: "Miliki Suzuki Impian Anda",
    subtitle:
      "Promo terbaik, layanan profesional, dan pengalaman berkendara tak terlupakan menanti Anda.",
  },
  {
    image:
      "https://mobilsuzukisolo.com/wp-content/uploads/2025/06/Banner-Mobil-Suzuki-Fronx.jpg",
    title: "Performa & Gaya dalam Satu Paket",
    subtitle:
      "Jelajahi berbagai pilihan mobil Suzuki yang dirancang untuk setiap kebutuhan.",
  },
  {
    image:
      "https://mobilsuzukisolo.com/wp-content/uploads/2020/02/Banner-Mobil-Suzuki-XL7-Hybrid.jpg",
    title: "Jadwalkan Test Drive Hari Ini",
    subtitle:
      "Rasakan langsung kenyamanan dan ketangguhan mobil Suzuki favorit Anda.",
  },
];

export const VIDEOS: { title: string; embedUrl: string }[] = [
  {
    title:
      "Suzuki Fronx | Educational Content | Lane Keep Assist & Lane Departure Prevention",
    embedUrl: "https://www.youtube.com/embed/42_kN4zU9Ts",
  },
  {
    title: "Kata Mereka Tentang Suzuki New XL7 Hybrid",
    embedUrl: "https://www.youtube.com/embed/GjucWKtMgQQ",
  },
  {
    title: "The legend is back - Suzuki Grand Vitara!",
    embedUrl: "https://www.youtube.com/embed/K7myLx48YRo",
  },
  {
    title: "The Last Journey | Suzuki Jimny",
    embedUrl: "https://www.youtube.com/embed/hvs0Y994GOQ",
  },
];

export const CARS: Car[] = [
  {
    id: "fronx",
    name: "Fronx",
    image:
      "https://imgcdn.oto.com/large/gallery/exterior/37/3224/suzuki-fronx-front-side-view-744342.jpg",
    tagline: "The Shape of New",
    description:
      "Suzuki Fronx adalah SUV coupe yang memadukan desain futuristik dengan performa sporty. Tampil beda di jalanan dengan gaya yang unik dan fitur-fitur canggih.",
    features: [
      {
        iconUrl: "https://i.imghippo.com/files/xVRR8374xXk.webp",
        text: "Parking Sensor",
      },
      {
        iconUrl: "https://i.imghippo.com/files/hzdh7743Lkg.webp",
        text: "Hill Hold Control HHC",
      },
      {
        iconUrl: "https://i.imghippo.com/files/Cx1687vQ.webp",
        text: "Dual Sensor Brake Support II DSBS II",
      },
      {
        iconUrl: "https://i.imghippo.com/files/mJb1026SM.webp",
        text: "Suzuki Safty Support",
      },
    ],
    colors: [
      {
        name: "Ice Grayish Blue",
        hex: ["#A8B6BD", "#2C2C2C"],
        imageUrl: "https://i.imghippo.com/files/ARkP8374QxU.webp",
      },
      {
        name: "White Black",
        hex: ["#FFFFFF", "#2C2C2C"],
        imageUrl: "https://i.imghippo.com/files/Khn4464Fb.webp",
      },
      {
        name: "Savanna Ivory Black",
        hex: ["#EAE0D3", "#2C2C2C"],
        imageUrl: "https://i.imghippo.com/files/fyG3310mUc.webp",
      },
      {
        name: "Snow White Pearl",
        hex: "#FFFFFF",
        imageUrl: "https://i.imghippo.com/files/zVC3295TCY.webp",
      },
      {
        name: "Cool Black",
        hex: "#2C2C2C",
        imageUrl: "https://i.imghippo.com/files/Sv6768iqg.webp",
      },
      {
        name: "Savanna Ivory",
        hex: "#EAE0D3",
        imageUrl: "https://i.imghippo.com/files/MCaS9722xIk.webp",
      },
      {
        name: "Metallic Magma Gray",
        hex: "#555555",
        imageUrl: "https://i.imghippo.com/files/TnJj7209K.webp",
      },
    ],
    variants: [
      { name: "FRONX GL MT", price: 261800000 },
      { name: "FRONX GL AT", price: 273800000 },
      { name: "FRONX GX MT", price: 278800000 },
      { name: "FRONX GX AT", price: 296600000 },
      { name: "FRONX SGX", price: 322600000 },
      { name: "FRONX SGX 2TONE", price: 324600000 },
    ],
  },
  {
    id: "xl7-hybrid",
    name: "Suzuki XL7 Hybrid",
    image:
      "https://imgcdn.oto.com/medium/gallery/exterior/37/2220/suzuki-xl7-12009.jpg",
    tagline: "Gear to Accomplish",
    description:
      "Suzuki XL7 Hybrid hadir dengan desain SUV yang gagah dan fitur canggih untuk menemani petualangan Anda. Dilengkapi teknologi Smart Hybrid Vehicle by Suzuki (SHVS) yang ramah lingkungan dan efisien.",
    features: [
      {
        iconUrl: "https://i.imghippo.com/files/y8736Gk.png",
        text: "Spoke Steering Wheel",
      },
      {
        iconUrl: "https://i.imghippo.com/files/eWhC4351Vi.png",
        text: "CRUISE CONTROL (ALPHA)",
      },
      {
        iconUrl: "https://i.imghippo.com/files/ufDA5545wFE.png",
        text: "Extra Spacious Luggage",
      },
      {
        iconUrl: "https://i.imghippo.com/files/VKd1591Bpk.png",
        text: "E-mirror Touch Screen*",
      },
    ],
    colors: [
      {
        name: "Savanna Ivory Black",
        hex: ["#EAE0D3", "#2C2C2C"],
        imageUrl: "https://i.imghippo.com/files/Sct7171cc.webp",
      },
      {
        name: "White Black",
        hex: ["#FFFFFF", "#2C2C2C"],
        imageUrl: "https://i.imghippo.com/files/HV2098EGw.webp",
      },
      {
        name: "Sunrise Orange Black",
        hex: ["#E67451", "#2C2C2C"],
        imageUrl: "https://i.imghippo.com/files/MlzI1488TrY.webp",
      },
      {
        name: "Snow White Pearl",
        hex: "#FFFFFF",
        imageUrl: "https://i.imghippo.com/files/yWW1938j.webp",
      },
      {
        name: "Metallic Magma Gray",
        hex: "#555555",
        imageUrl: "https://i.imghippo.com/files/M3194Fg.webp",
      },
      {
        name: "Cool Black",
        hex: "#2C2C2C",
        imageUrl: "https://i.imghippo.com/files/JWi4582Jo.webp",
      },
      {
        name: "Brave Khakhi",
        hex: "#4A3728",
        imageUrl: "https://i.imghippo.com/files/dUtg6545YJ.webp",
      },
    ],
    variants: [
      { name: "XL7 ZETA MT", price: 269900000 },
      { name: "XL7 ZETA AT", price: 281100000 },
      { name: "XL7 BETA MT HYBRID", price: 292200000 },
      { name: "XL7 BETA AT HYBRID", price: 303100000 },
      { name: "XL7 ALPHA MT HYBRID", price: 303300000 },
      { name: "XL7 ALPHA MT HYBRID 2TONE", price: 305300000 },
      { name: "XL7 ALPHA AT HYBRID", price: 314200000 },
      { name: "XL7 ALPHA AT HYBRID 2TONE", price: 316300000 },
    ],
  },
  {
    id: "all-new-ertiga",
    name: "All New Ertiga",
    image:
      "https://imgcdn.oto.com/large/gallery/exterior/37/2614/suzuki-ertiga-smart-hybrid-front-angle-low-view-164264.jpg",
    tagline: "Kebanggaan Keluarga",
    description:
      "All New Ertiga memberikan kenyamanan dan keamanan premium untuk keluarga Anda. Dengan kabin yang luas dan fitur modern, setiap perjalanan menjadi lebih menyenangkan.",
    features: [
      {
        iconUrl: "https://i.imghippo.com/files/mGEv5014xk.webp",
        text: "Air Bag",
      },
      {
        iconUrl: "https://i.imghippo.com/files/qxJ7565zg.webp",
        text: "Hill Hold Control HHC",
      },
      {
        iconUrl: "https://i.imghippo.com/files/EZM6597UE.webp",
        text: "Isofix Seat",
      },
      {
        iconUrl: "https://i.imghippo.com/files/MuT5614SkI.webp",
        text: "Electronic Stability Programme ESP",
      },
    ],
    colors: [
      {
        name: "Cool Black",
        hex: "#2C2C2C",
        imageUrl: "https://i.imghippo.com/files/xaIJ3386w.webp",
      },
      {
        name: "Pearl Snow White",
        hex: "#FFFFFF",
        imageUrl: "https://i.imghippo.com/files/KXNp9783ZSY.webp",
      },
      {
        name: "Pearl Radiant Red",
        hex: "#B82025",
        imageUrl: "https://i.imghippo.com/files/ecg7343ltw.webp",
      },
      {
        name: "Pearl Burgundy Red",
        hex: "#4C1C24",
        imageUrl: "https://i.imghippo.com/files/dEA1205Ww.webp",
      },
      {
        name: "Metallic Silky Silver",
        hex: "#C0C0C0",
        imageUrl: "https://i.imghippo.com/files/YUf2243as.webp",
      },
      {
        name: "Metallic Magma Gray",
        hex: "#555555",
        imageUrl: "https://i.imghippo.com/files/CpYQ3113ysk.webp",
      },
    ],
    variants: [
      { name: "ALL NEW ERTIGA GA", price: 241750000 },
      { name: "ALL NEW ERTIGA MC GL MT", price: 265350000 },
      { name: "ALL NEW ERTIGA MC GL AT", price: 276400000 },
      { name: "ALL NEW ERTIGA MC GX MT", price: 282000000 },
      { name: "ALL NEW ERTIGA MC GX AT", price: 293000000 },
      { name: "ALL NEW ERTIGA CRUISE MT", price: 294800000 },
      { name: "ALL NEW ERTIGA CRUISE MT 2TONE", price: 296800000 },
      { name: "ALL NEW ERTIGA CRUISE AT", price: 305700000 },
      { name: "ALL NEW ERTIGA CRUISE AT 2TONE", price: 307700000 },
    ],
  },
  {
    id: "grand-vitara",
    name: "Grand Vitara",
    image:
      "https://imgcdn.oto.com/large/gallery/exterior/37/2721/suzuki-grand-vitara-2023-front-angle-low-view-707340.jpg",
    tagline: "The Next Generation SUV",
    description:
      "Grand Vitara kembali dengan desain yang lebih modern, performa tangguh, dan teknologi hybrid canggih. Nikmati pengalaman berkendara yang luar biasa di segala medan.",
    features: [
      {
        iconUrl: "https://i.imghippo.com/files/GAPe4175iXs.png",
        text: "9 Inch Head Unit Display",
      },
      {
        iconUrl: "https://i.imghippo.com/files/gJeA9546pAM.png",
        text: "Head Up Display",
      },
      {
        iconUrl: "https://i.imghippo.com/files/OdZu8502W.png",
        text: "Wireless Charger",
      },
      {
        iconUrl: "https://i.imghippo.com/files/ueU4669bs.png",
        text: "360 View Camera",
      },
    ],
    colors: [
      {
        name: "Pearl Splendid Silver",
        hex: "#C0C0C0",
        imageUrl: "https://i.imghippo.com/files/vfT5448JNM.webp",
      },
      {
        name: "Pearl Midnight Black",
        hex: "#2C2C2C",
        imageUrl: "https://i.imghippo.com/files/ZUAn6190Lsg.webp",
      },
      {
        name: "Pearl Arctic White",
        hex: "#FFFFFF",
        imageUrl: "https://i.imghippo.com/files/Kur6821KI.webp",
      },
      {
        name: "Celestial Black",
        hex: "#1A4C8B",
        imageUrl: "https://i.imghippo.com/files/tlEc5929jPo.webp",
      },
    ],
    variants: [
      { name: "GRAND VITARA GX AT", price: 403200000 },
      { name: "GRAND VITARA GX AT 2TONE", price: 406100000 },
    ],
  },
  {
    id: "jimny",
    name: "Suzuki Jimny",
    image:
      "https://imgcdn.oto.com/medium/gallery/exterior/37/782/suzuki-jimny-24418.jpg",
    tagline: "The One and Only",
    description:
      "Suzuki Jimny adalah SUV legendaris yang siap menaklukkan segala medan. Desain ikonik, kemampuan off-road sejati, dan ukuran yang ringkas menjadikannya teman petualangan terbaik.",
    features: [
      {
        iconUrl: "https://i.imghippo.com/files/NqpJ7468gvU.webp",
        text: "Tech Body",
      },
      {
        iconUrl: "https://i.imghippo.com/files/DdpK6501Fcg.webp",
        text: "Electronic Stability Programme ESP",
      },
      {
        iconUrl: "https://i.imghippo.com/files/VODI2637uU.webp",
        text: "Brake Limited Slip Differential Traction Control",
      },
      {
        iconUrl: "https://i.imghippo.com/files/NJ4917M.webp",
        text: "Air Bags",
      },
    ],
    colors: [
      {
        name: "Kinetic Yellow 3 Door",
        hex: "#F7D002",
        imageUrl: "https://i.imghippo.com/files/AQP8540QU.webp",
      },
      {
        name: "Jungle Green 3 Door",
        hex: "#2E3B27",
        imageUrl: "https://i.imghippo.com/files/cOQ5943fc.webp",
      },
      {
        name: "Bluish Black Pearl Metallic 3 Door",
        hex: "#1C2127",
        imageUrl: "https://i.imghippo.com/files/QqQT7824kQ.webp",
      },
      {
        name: "Brisk Blue 3 Door",
        hex: "#1A4C8B",
        imageUrl: "https://i.imghippo.com/files/fHt5898iM.webp",
      },
      {
        name: "Chiffon Ivory Metallic 3 Door",
        hex: "#EAE0D3",
        imageUrl: "https://i.imghippo.com/files/gI8253JIw.webp",
      },
      {
        name: "Medium Gray 3 Door",
        hex: "#555555",
        imageUrl: "https://i.imghippo.com/files/dVP7348EGk.webp",
      },
      {
        name: "Silky Silver Metallic 3 Door",
        hex: "#C0C0C0",
        imageUrl: "https://i.imghippo.com/files/csX6594Ds.webp",
      },
      {
        name: "Superior White 3 Door",
        hex: "#FFFFFF",
        imageUrl: "https://i.imghippo.com/files/bXd5193bIs.webp",
      },
      {
        name: "Chiffon Ivory Metallic 5 Door",
        hex: "#EAE0D3",
        imageUrl: "https://i.imghippo.com/files/ILBR6871bJQ.webp",
      },
      {
        name: "Granite Grey Metallic 5 Door",
        hex: "#555555",
        imageUrl: "https://i.imghippo.com/files/dpn2170OZs.webp",
      },
      {
        name: "Jungle Green 5 Door",
        hex: "#2E3B27",
        imageUrl: "https://i.imghippo.com/files/vVw2222Jo.webp",
      },
      {
        name: "Kinetic Yellow 5 Door",
        hex: "#F7D002",
        imageUrl: "https://i.imghippo.com/files/hnX5879zk.webp",
      },
      {
        name: "Metallic Sizzling Red 5 Door",
        hex: "#B82025",
        imageUrl: "https://i.imghippo.com/files/hnX5879zk.webp",
      },
      {
        name: "Bluish Black Pearl Metallic 5 Door",
        hex: "#1C2127",
        imageUrl: "https://i.imghippo.com/files/peT1894DhM.webp",
      },
    ],
    variants: [
      { name: "JIMNY 3 DOOR MT", price: 511500000 },
      { name: "JIMNY 3 DOOR AT", price: 524000000 },
      { name: "JIMNY 3 DOOR MT 2TONE", price: 514850000 },
      { name: "JIMNY 3 DOOR AT 2TONE", price: 527300000 },
      { name: "JIMNY 5 DOOR MT", price: 496100000 },
      { name: "JIMNY 5 DOOR AT", price: 508700000 },
      { name: "JIMNY 5 DOOR MT 2TONE", price: 499350000 },
      { name: "JIMNY 5 DOOR AT 2TONE", price: 511900000 },
      { name: "JIMNY 5 DOOR AT WHITE RHINO", price: 522300000 },
    ],
  },
  {
    id: "s-presso",
    name: "S-Presso",
    image:
      "https://imgcdn.oto.com/large/gallery/exterior/37/2620/suzuki-s-presso-front-angle-low-view-628835.jpg",
    tagline: "Mini SUV, Big Spirit",
    description:
      "S-Presso adalah mini SUV yang lincah dan hemat bahan bakar, cocok untuk mobilitas perkotaan. Dengan ground clearance tinggi dan desain yang stylish, S-Presso siap menemani aktivitas Anda.",
    features: [
      {
        iconUrl: "https://i.imghippo.com/files/nnC3078IM.webp",
        text: "Engine Auto Start-Stop",
      },
      {
        iconUrl: "https://i.imghippo.com/files/zuOt2392wM.webp",
        text: "Electronic Stability Programme (ESP)",
      },
      {
        iconUrl: "https://i.imghippo.com/files/ikGI3264rSw.webp",
        text: "ABS dan EBD",
      },
      {
        iconUrl: "https://i.imghippo.com/files/YwtO9156OzI.webp",
        text: "Dual Airbags",
      },
    ],
    colors: [
      {
        name: "White",
        hex: "#FFFFFF",
        imageUrl: "https://i.imghippo.com/files/BRSe6891zew.webp",
      },
      {
        name: "Silky Silver Metallic",
        hex: "#AAA9AD",
        imageUrl: "https://i.imghippo.com/files/oOZ6122cM.webp",
      },
      {
        name: "Granite Grey Metallic",
        hex: "#808782",
        imageUrl: "https://i.imghippo.com/files/oXOc5268jGs.webp",
      },
      {
        name: "Solid Fire Red",
        hex: "#B82025",
        imageUrl: "https://i.imghippo.com/files/Boh6541CQ.webp",
      },
      {
        name: "Sizzle Orange",
        hex: "#FF6B1A",
        imageUrl: "https://i.imghippo.com/files/uT6186bM.webp",
      },
    ],
    variants: [
      { name: "S-PRESSO MT", price: 176600000 },
      { name: "S-PRESSO AT", price: 186600000 },
    ],
  },
  {
    id: "new-carry-pu",
    name: "New Carry PU",
    image:
      "https://imgcdn.oto.com/large/gallery/exterior/37/2158/suzuki-carry-front-angle-low-view-924731.jpg",
    tagline: "Rajanya Pick Up",
    description:
      "New Carry Pick Up adalah andalan para pengusaha. Dengan bak yang luas, sasis yang kuat, dan mesin yang irit, New Carry siap mengangkut berbagai macam muatan untuk kelancaran bisnis Anda.",
    features: [
      {
        iconUrl: "https://i.imghippo.com/files/Vqp6591Vt.webp",
        text: "Audio & AC",
      },
      {
        iconUrl: "https://i.imghippo.com/files/o2498YGw.webp",
        text: "Tangguh dan Kuat",
      },
      {
        iconUrl: "https://i.imghippo.com/files/dNc3546wLo.webp",
        text: "Irit Bahan Bakar dan Perawatannya",
      },
      {
        iconUrl: "https://i.imghippo.com/files/w6189hMI.webp",
        text: "Kursi Dapat Digeser",
      },
    ],
    colors: [
      {
        name: "Superior White",
        hex: "#FFFFFF",
        imageUrl: "https://i.imghippo.com/files/XGF2961jBs.webp",
      },
      {
        name: "Silky Silver",
        hex: "#C0C0C0",
        imageUrl: "https://i.imghippo.com/files/qvFj8686kGM.webp",
      },
      {
        name: "Real Black",
        hex: "#000000",
        imageUrl: "https://i.imghippo.com/files/fzwH2762avc.webp",
      },
      {
        name: "GRAPHITE GREY METALLIC",
        hex: "#4B4B4B",
        imageUrl: "https://i.imghippo.com/files/wOz6382Ql.webp",
      },
    ],
    variants: [
      { name: "NEW CARRY PU", price: 175500000 },
      { name: "NEW CARRY PU FD AC PS", price: 183500000 },
      { name: "NEW CARRY PU WD", price: 176600000 },
      { name: "NEW CARRY PU WD AC PS", price: 184400000 },
    ],
  },
  {
    id: "apv",
    name: "APV",
    image:
      "https://imgcdn.oto.com/large/gallery/exterior/37/326/suzuki-apv-arena-front-angle-low-view-886242.jpg",
    tagline: "Multi Purpose Vehicle",
    description:
      "APV adalah kendaraan serbaguna yang handal untuk keluarga maupun bisnis. Dengan kabin lega dan mesin bertenaga, APV memberikan fleksibilitas untuk segala kebutuhan Anda.",
    features: [
      {
        iconUrl: "https://i.imghippo.com/files/RYt4520bgM.webp",
        text: "Tect Body",
      },
      {
        iconUrl: "https://i.imghippo.com/files/pAmN2932Qo.webp",
        text: "Side Impact Beam",
      },
      {
        iconUrl: "https://i.imghippo.com/files/mfFZ7134wBA.webp",
        text: "Monocoque With Ladder Frame",
      },
      {
        iconUrl: "https://i.imghippo.com/files/xlye8362Dok.webp",
        text: "New Features Dual SRS-Airbag",
      },
    ],
    colors: [
      {
        name: "Cool Black",
        hex: "#2C2C2C",
        imageUrl: "https://i.imghippo.com/files/uye4419Fw.webp",
      },
      {
        name: "Silky Silver",
        hex: "#FFFFFF",
        imageUrl: "https://i.imghippo.com/files/lBh7749d.webp",
      },
      {
        name: "Burgundy Pearl",
        hex: "#4C1C24",
        imageUrl: "https://i.imghippo.com/files/OVKJ7120I.webp",
      },
    ],
    variants: [
      { name: "APV GE PS MT AB", price: 228200000 },
      { name: "APV GL MT AB", price: 236400000 },
      { name: "APV GX MT AB", price: 250500000 },
      { name: "APV SGX MT AB", price: 253900000 },
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Budi Santoso",
    car: "Suzuki XL7 Hybrid",
    imageUrl:
      "https://scontent-sin11-1.xx.fbcdn.net/v/t51.82787-15/624291950_18385588372145157_3727849259579521548_n.webp?stp=dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFK9bXHdziNOS7jcVM8W1zBIMXW61JrP0IgxdbrUms_Qgy3dQ0BLvF3RvzM9SRdrDvQERIx0ifdoAWsACFNl1KJ&_nc_ohc=ps7EetmASBQQ7kNvwEH2JFC&_nc_oc=AdldCrp7euy071wJv2WljQ1AAABlhTBGhGspp1TDsGsOr0For5Pxt35SI_7NJfZ-msI&_nc_zt=23&_nc_ht=scontent-sin11-1.xx&_nc_gid=UsYnB47C8AR-nvY5v9N1mA&oh=00_AfqunhOffl0QfxHUVcy4eqZW1_WzDaqKxgm4Mfp3kxkJhw&oe=69813E1E",
  },
  {
    name: "Markos H.",
    car: "Suzuki XL7 Hybrid",
    imageUrl:
      "https://scontent-sin11-2.xx.fbcdn.net/v/t51.82787-15/622328472_18385309696145157_8600172453198878760_n.webp?stp=dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGqFzDnPrWAyimgk2F6HCG-ZpDyLXQ-VpJmkPItdD5WkpZgE3MxdUm7poMOFKXlpcNijdUjaKYNU8n34jbWJMcA&_nc_ohc=avJab6-OqHsQ7kNvwFcjpoJ&_nc_oc=AdnL5S4rPgtVKtr-v1tjKEqhnB7V0joVHoArOEEav6xQGr2kg0zZmmTogTqRNjQ3xcE&_nc_zt=23&_nc_ht=scontent-sin11-2.xx&_nc_gid=IceBIB7DTXNuXYrkk1Pm5Q&oh=00_AfoIIpHUbC-WmAy6e7xeTUdGbrEYEB0Zty0NCPzndc0hrA&oe=69814E19",
  },
  {
    name: "Agus Setiawan",
    car: "Suzuki XL7 Hybrid",
    imageUrl:
      "https://scontent-sin11-1.xx.fbcdn.net/v/t51.82787-15/621166234_18384856567145157_458268583565734703_n.webp?stp=dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHs1jzXlv25n0WAWkh__wCmWwqh3PNeQvJbCqHc815C8qbN5qmQMXMwpHa7Tp15dGsnsVi67w5m39lkIWXuFC39&_nc_ohc=l6ZEJ2g83SIQ7kNvwFR9my6&_nc_oc=Adk8bf16DBwGXR0gCuJJ6mBMMXbbDRbDbCceLlhyiiqVoOCxDqR83q2xyxKxefSspF4&_nc_zt=23&_nc_ht=scontent-sin11-1.xx&_nc_gid=EbURth8IbfacuhbkTmnb4A&oh=00_AfobtqVr-OYJKvN6D3xBeEBA3MxvN3Hn4uOBkQc41TYHxw&oe=69814673",
  },
  {
    name: "Dewi Lestari",
    car: "Suzuki XL7 Hybrid",
    imageUrl:
      "https://scontent-sin2-3.xx.fbcdn.net/v/t51.82787-15/612204416_18383701063145157_1835360257366597593_n.webp?stp=dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFoN-evh64qIK0rRf1XhP_ErhQ0k92yNaGuFDST3bI1ocaC0zRUPiZiZkUxkeUMdcqcrKA2RndHXLuRsH9FiMen&_nc_ohc=YLUZ0yzXvN0Q7kNvwFPmUjZ&_nc_oc=AdlT_uUb_BUG-RFVDRAJn9zFYYqbm9ejettwI48a1XeXKQ1MZmbQhTbZRYqMQ-BpNCk&_nc_zt=23&_nc_ht=scontent-sin2-3.xx&_nc_gid=o3AdZnmVbQagEP1BhCVdmQ&oh=00_AfoGg26HmktQFUdXCRRLYNcePegkcsjBrSy_ych6RO8kRA&oe=69814C84",
  },
];

export const ARTICLES: Article[] = [
  {
    id: 1,
    title: "Panduan Praktis Merawat Mobil Hybrid Agar Awet & Efisien",
    excerpt:
      "Mobil hybrid dikenal irit dan ramah lingkungan. Agar performanya tetap maksimal, ada beberapa perawatan penting yang wajib diperhatikan oleh pemilik kendaraan hybrid.",
    content:
      "Mobil hybrid memiliki teknologi yang lebih canggih dibandingkan mobil konvensional, sehingga perawatannya perlu dilakukan dengan cara yang tepat. Salah satu hal utama yang harus diperhatikan adalah kondisi baterai hybrid, karena komponen ini berperan besar dalam efisiensi kendaraan. Pastikan mobil digunakan secara rutin agar baterai tetap berada dalam kondisi optimal.\n\nSelain itu, penggunaan bahan bakar sesuai standar pabrikan sangat disarankan untuk menjaga kinerja mesin dan sistem hybrid. Servis berkala di bengkel resmi Suzuki juga menjadi langkah penting agar seluruh sistem kendaraan dapat dicek menggunakan alat khusus.\n\nGaya berkendara turut memengaruhi usia komponen hybrid. Berkendara secara halus, menghindari akselerasi berlebihan, serta pengereman mendadak dapat membantu menjaga performa kendaraan tetap stabil. Terakhir, pastikan sistem pendingin dan filter udara selalu bersih agar suhu baterai dan mesin tetap terkontrol dengan baik.",
    imageUrl:
      "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FXL-7-03%2Fimages%2Frevisibannerxl7kuro2_1758194269306.png&w=2048&q=75",
    author: "Mardi Suzuki",
    publishDate: "01 Januari 2026",
  },
  {
    id: 2,
    title: "Keunggulan Suzuki AllGrip Pro untuk Medan Off-Road Ekstrem",
    excerpt:
      "Suzuki AllGrip Pro dikenal sebagai sistem penggerak 4x4 andalan pada Suzuki Jimny. Simak keunggulannya dan alasan teknologi ini unggul di medan off-road ekstrem.",
    content:
      "Suzuki AllGrip Pro merupakan sistem penggerak empat roda (4x4) part-time yang dirancang khusus untuk menghadapi berbagai kondisi medan berat. Teknologi ini memungkinkan pengemudi memilih mode penggerak sesuai kebutuhan melalui transfer case yang terdiri dari tiga pilihan utama, yaitu 2H, 4H, dan 4L.\n\nMode 2H digunakan untuk kondisi jalan normal dan efisiensi bahan bakar yang lebih baik. Saat menghadapi jalan licin, berbatu, atau berlumpur, pengemudi dapat mengaktifkan mode 4H untuk meningkatkan traksi ke seluruh roda. Sementara itu, mode 4L dirancang untuk medan ekstrem seperti tanjakan curam, turunan tajam, atau jalur off-road berat karena mampu menghasilkan torsi maksimal dengan kontrol yang lebih presisi.\n\nKeunggulan AllGrip Pro semakin terasa berkat kombinasi sasis ladder frame yang kokoh dan sistem suspensi 3-link rigid axle khas Suzuki Jimny. Struktur ini membuat kendaraan tetap stabil, tangguh, dan mampu menjaga traksi roda di berbagai kondisi permukaan. Tidak hanya kuat, sistem ini juga memberikan rasa percaya diri lebih bagi pengemudi saat menjelajah medan off-road.\n\nDengan teknologi AllGrip Pro, Suzuki Jimny menjadi pilihan ideal bagi pecinta petualangan yang membutuhkan kendaraan 4x4 sejati, tangguh, dan dapat diandalkan untuk aktivitas off-road maupun penggunaan harian.",
    imageUrl:
      "https://www.suzuki.ee/wp-content/uploads/2018/11/allgrip_pro1.jpg",
    author: "Mardi Suzuki",
    publishDate: "10 Januari 2026",
  },
  {
    id: 3,
    title: "Perbandingan Mobil Keluarga Suzuki: XL7 Hybrid vs All New Ertiga",
    excerpt:
      "Suzuki XL7 Hybrid dan All New Ertiga sama-sama populer sebagai mobil keluarga 7 penumpang. Simak perbandingan lengkap untuk menentukan pilihan terbaik sesuai kebutuhan Anda.",
    content:
      "Suzuki XL7 Hybrid dan All New Ertiga merupakan dua mobil keluarga andalan Suzuki yang menawarkan kenyamanan serta efisiensi bahan bakar, namun dengan karakter yang berbeda. XL7 Hybrid hadir dengan tampilan SUV yang lebih gagah serta ground clearance tinggi, sehingga cocok bagi keluarga yang sering bepergian ke berbagai kondisi jalan atau memiliki gaya hidup aktif.\n\nSementara itu, All New Ertiga dirancang sebagai MPV yang mengutamakan kenyamanan kabin, ruang penumpang yang lega, serta pengalaman berkendara yang halus. Mobil ini sangat ideal untuk penggunaan harian di perkotaan maupun perjalanan jarak jauh bersama keluarga.\n\nDari sisi fitur, kedua model telah dibekali teknologi modern, sistem keselamatan yang memadai, serta efisiensi konsumsi bahan bakar yang baik. Kehadiran teknologi hybrid pada XL7 juga menjadi nilai tambah bagi konsumen yang menginginkan kendaraan lebih ramah lingkungan.\n\nPada akhirnya, pilihan antara XL7 Hybrid dan All New Ertiga bergantung pada kebutuhan serta gaya hidup keluarga. Jika menginginkan tampilan tangguh dan fleksibilitas medan, XL7 Hybrid bisa menjadi pilihan tepat. Namun jika kenyamanan dan kepraktisan menjadi prioritas utama, All New Ertiga adalah solusi mobil keluarga yang sangat ideal.",
    imageUrl:
      "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FXL-7-03%2Fthree-six-zero%2Finterior%2Fdesktop%2FInteriorDesktopvers_1758194523105.png&w=2048&q=75",

    author: "Mardi Suzuki",
    publishDate: "20 Januari 2026",
  },
];
