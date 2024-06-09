const products = [
  {
    img_url:
      "https://t4.ftcdn.net/jpg/03/21/32/45/360_F_321324549_3utrdpZOFdsyUElymaPhm5LXRyTpnteh.jpg",
    title: "Burger",
    price: 5,
  },
  {
    img_url:
      "https://cellbuddy.in/buddy/wp-content/uploads/2022/09/14-Purple.png",
    title: "Iphone",
    price: 999,
  },
  {
    img_url:
      "https://img.freepik.com/premium-photo/car-isolated-white-background-tesla-model-3-white-car-blank-clean-white-backgr-white-black_655090-607332.jpg",
    title: "Tesla",
    price: 100000,
  },
  {
    img_url:
      "https://img.freepik.com/free-photo/flip-flops-blue-isolated-white-background_1101-2078.jpg",
    title: "flip-flops",
    price: 3,
  },
  {
    img_url: "https://neal.fun/spend/images/coca-cola-pack.jpg",
    title: "coca-cola pack",
    price: 10,
  },
  {
    img_url: "https://neal.fun/spend/images/year-of-netflix.jpg",
    title: "Year on Netflix",
    price: 100,
  },
  {
    img_url:
      "https://t4.ftcdn.net/jpg/05/05/19/33/360_F_505193359_26BkPIp9q4Ekwsp8jR1EW8FYBeCXKyBm.jpg",
    title: "airpods",
    price: 199,
  },
  {
    img_url: "https://hgworld.in/wp-content/uploads/2021/03/ps5-console.jpg",
    title: "PS-5",
    price: 499,
  },
  {
    img_url:
      "https://static.vecteezy.com/system/resources/previews/008/028/244/large_2x/exterior-luxury-house-classic-style-on-white-background-concept-for-real-estate-sale-or-property-investment3d-rendering-free-photo.jpg",
    title: "Bungalow",
    price: 1000000,
  },
  {
    img_url:
      "https://www.apple.com/newsroom/images/product/mac/standard/Apple_new-macbookair-wallpaper-screen_11102020_big.jpg.large.jpg",
    title: "Macbook",
    price: 1500,
  },
  {
    img_url:
      "https://c4.wallpaperflare.com/wallpaper/206/112/1023/jordan-themed-for-desktops-wallpaper-preview.jpg",
    title: "Air Jordans",
    price: 400,
  },
  {
    img_url:
      "https://i.pinimg.com/736x/a4/7d/aa/a47daa1437fbaba5dfd31bfe25ac6840.jpg",
    title: "Hummer",
    price: 120000,
  },
  {
    img_url:
      "https://media.istockphoto.com/id/514730265/photo/helicopter-isolated.jpg?s=612x612&w=0&k=20&c=27IL4k9NEP2Q1kIu8C1_3Cp30i_Oaj7CkLgz10D4iok=",
    title: "Helicopter ",
    price: 1000000,
  },
  {
    img_url:
      "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEyL2FuZ3VzdGVvd193aGl0ZV9sdXh1cnlfZXhlY3V0aXZlX2FpcmNyYWZ0X3dpdGhfYW5fb3BlbmVkX2dhbmd3YV9lY2I5Zjk3ZC1jN2MwLTQ2ZGQtOWJmYS0zNDcwNDQyNDY0NGJfMi5qcGc.jpg",
    title: "Private Jet",
    price: 20000000,
  },
  {
    img_url:
      "https://www.shutterstock.com/image-photo/autorickshaw-isolated-on-white-background-600nw-1082263865.jpg",
    title: "Rickshaw",
    price: 2000,
  },
  {
    img_url:
      "https://t4.ftcdn.net/jpg/00/74/05/11/360_F_74051134_CdXrAEOtlq7LcWo9EruXqW11wjy6MeKP.jpg",
    title: "Horse",
    price: 3000,
  },
  {
    img_url:
      "https://img.freepik.com/premium-photo/white-yacht-with-large-number-windows-is-white-background_934475-162.jpg",
    title: "Yacht",
    price: 110000,
  },
  {
    img_url: "https://m.media-amazon.com/images/I/61KO84Gx6XL.jpg",
    title: "Silk",
    price: 1,
  },
  {
    img_url: "https://lajoyalink.com/wp-content/uploads/2018/03/Movie.jpg",
    title: "Your own movie",
    price: 50000000,
  },
  {
    img_url:
      "https://png.pngtree.com/background/20230804/original/pngtree-isolated-on-white-analysis-of-female-cyborg-or-robot-in-3d-picture-image_4415074.jpg",
    title: "AI girlfriend",
    price: 15,
  },
  {
    img_url: "https://variety.com/wp-content/uploads/2017/09/anil_ambani1.png",
    title: "Anil Ambani",
    price: 1000000000,
  },
  {
    img_url:
      "https://t3.ftcdn.net/jpg/00/66/74/90/360_F_66749097_nCsOYh69ix0o7h1DDXztTADd4N3q0Kze.jpg",
    title: "Cute Doggo",
    price: 500,
  },
  {
    img_url:
      "https://img.freepik.com/free-photo/luxury-diamond-ring-isolated-white-background_123827-27630.jpg",
    title: "Diamond ring",
    price: 10000,
  },
  {
    img_url:
      "https://cdn.i.haymarketmedia.asia/?n=campaign-india%2Fcontent%2F20220325041349_750x500.jpg&h=570&w=855&q=100&v=20170226&c=1",
    title: "IPL team",
    price: 800000000,
  },
];

const structure = {
  img_url: "",
  title: "",
  price: 0,
};
products.sort((a, b) => a.price - b.price);

export default products;
