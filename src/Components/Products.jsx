import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

function Products() {
  var products = [
    {
      title: "arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
      bgImg:
        "https://web.archive.org/web/20240216094842im_/https://assets-global.website-files.com/6334198f239547f2fccd84c1/650c621a3aa0ee3ae147d692_arqitel-bg-p-2000.webp",
      vid: "https://cdn.refokus.com/website/Arqitel/Arqitel%20project%20video%204_3.webm",
      caseImg:
        "https://web.archive.org/web/20240216094842im_/https://assets-global.website-files.com/6334198f239547f2fccd84c1/650c5f15978b05dc7f2ae554_14.webp",
    },
    {
      title: "Cula",
      description:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      live: true,
      case: true,
      bgImg:
        "https://web.archive.org/web/20240216094842im_/https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b41319bda140bccae204ae_bg%202.png",
      vid: "https://cdn.refokus.com/website/Cula_promo_new_4_3.mp4",
      caseImg:
        "https://web.archive.org/web/20240216094842im_/https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b41324914b470b20ec7d03_Frame%203.png",
    },
    {
      title: "Layout",
      description:
        "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
      live: true,
      case: false,
      bgImg:
        "https://web.archive.org/web/20240216094842im_/https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b2ccf5af18668cfbd3a8d6_bg%201-p-1600.png",
      vid: "https://cdn.refokus.com/website/Maniv-Compressed.mp4",
      caseImg:
        "https://web.archive.org/web/20240216094842im_/https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b2cab86e8df24e528c4441_Frame%201.png",
    },
    {
      title: "TTR",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      case: false,
      bgImg:
        "https://web.archive.org/web/20240216094842im_/https://assets-global.website-files.com/6334198f239547f2fccd84c1/63ede953b6b5f3582560753a_Work%20Background-p-2000.jpg",
      vid: "https://cdn.refokus.com/website/TTR/TTR%20project%20video%204_3_H.264.webm",
      caseImg:
        "https://web.archive.org/web/20240216094842im_/https://assets-global.website-files.com/6334198f239547f2fccd84c1/64cd6ecc885579ba1b4ffc97_10.jpg",
    },
    {
      title: "YIR 2022",
      description:
        "our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
      live: true,
      case: true,
      bgImg:
        "https://web.archive.org/web/20240216094842im_/https://assets-global.website-files.com/6334198f239547f2fccd84c1/6450586e80fac7eb1655014f_yir2022%E2%80%93bg-p-2000.png",
      vid: "https://cdn.refokus.com/website/YIR%20website%202022%204_3_VP9.webm",
      caseImg:
        "https://web.archive.org/web/20240216094842im_/https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b41cfab581d98facecc35d_YIR2022%20-%20mobile.png",
    },
    {
      title: "LMagic",
      description:
        "We designed and developed a magical gaming experience made a Webflow to promote the translation service and their sponsorship of the 2022 webflow Conference.",
      live: true,
      case: false,
      bgImg:
        "https://web.archive.org/web/20240216094842im_/https://assets-global.website-files.com/6334198f239547f2fccd84c1/63ede953b6b5f3582560753a_Work%20Background-p-2000.jpg",
      vid: "https://cdn.refokus.com/website/Cula_promo_new_4_3.mp4",
      caseImg:
        "https://web.archive.org/web/20240216094842im_/https://assets-global.website-files.com/6334198f239547f2fccd84c1/64cc2e2943eeaaaf5d8961a7_6.jpg",
    },
    {
      title: "Rocket",
      description:
        "We built a beautiful, clean website in Webflow for RocketChat that is scalable, easy to maintain and built in a modular manner for future changes",
      live: true,
      case: false,
      bgImg:
        "https://web.archive.org/web/20240216094842im_/https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b41319bda140bccae204ae_bg%202.png",
      vid: "https://cdn.refokus.com/website/TTR/TTR%20project%20video%204_3_H.264.webm",
      caseImg:
        "https://web.archive.org/web/20240216094842im_/https://assets-global.website-files.com/6334198f239547f2fccd84c1/64cc29f66c6594c072ba1a38_02.jpg",
    },
    {
      title: "Yahoo!",
      description:
        "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
      live: true,
      case: false,
      bgImg:
        "https://web.archive.org/web/20240216094842im_/https://assets-global.website-files.com/6334198f239547f2fccd84c1/635299cbb5dc5fd8b2972010_Yahoo%20bg.png",
      vid: "https://cdn.refokus.com/website/2022/videos/yahoo.webm",
      caseImg:
        "https://web.archive.org/web/20240216094842im_/https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b41cd5ec5fbe7d560d053f_Yahoo%20-%20mobile.png",
    },
    {
      title: "Haufe",
      description:
        "Besides the continuous work we do with Haufe--shipping over 50 projects per year--we partnered with them to create a new website for their core brand.",
      live: true,
      case: false,
      bgImg:
        "https://web.archive.org/web/20240216094842im_/https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b41319bda140bccae204ae_bg%202.png",
      vid: "https://cdn.refokus.com/website/Cula_promo_new_4_3.mp4",
      caseImg:
        "https://web.archive.org/web/20240216094842im_/https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b41324914b470b20ec7d03_Frame%203.png",
    },
    {
      title: "Rainfall",
      description:
        "We creafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.",
      live: true,
      case: false,
      bgImg:
        "https://web.archive.org/web/20240216094842im_/https://assets-global.website-files.com/6334198f239547f2fccd84c1/635299ec9a478d08095a0122_Rainfall%20bg-p-1600.png",
      vid: "https://cdn.refokus.com/website/Arqitel/Arqitel%20project%20video%204_3.webm",
      caseImg:
        "https://web.archive.org/web/20240216094842im_/https://assets-global.website-files.com/6334198f239547f2fccd84c1/64cc2f1683a983fb66bd96c4_8.jpg",
    },
    {
      title: "Candid",
      description:
        "A complete redesign of a health-startup website followed by cutting edge development.",
      live: true,
      case: false,
      bgImg:
        "https://web.archive.org/web/20240216094842im_/https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b2ccf5af18668cfbd3a8d6_bg%201-p-1600.png",
      vid: "https://cdn.refokus.com/website/Maniv-Compressed.mp4",
      caseImg:
        "https://web.archive.org/web/20240216094842im_/https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b2cab86e8df24e528c4441_Frame%201.png",
    },
    {
      title: "Showcase",
      description:
        "Our OMR22 Masterclass teaches how to create a showcase website, and we made a showcase website about showcase websites to promote the art of showcasing.",
      live: true,
      case: false,
      bgImg:
        "https://web.archive.org/web/20240216094842im_/https://assets-global.website-files.com/6334198f239547f2fccd84c1/63529a2191211c3ebc67e4b7_Remind%20bg-p-1600.png",
      vid: "https://cdn.refokus.com/website/Maniv-Compressed.mp4",
      caseImg:
        "https://web.archive.org/web/20240216094842im_/https://assets-global.website-files.com/6334198f239547f2fccd84c1/64cc2cad43eeaaaf5d87b274_4.jpg",
    },
  ];

  const [position, setPosition] = useState(0);
  const mover = (val) => {
    setPosition(val * 23);
  };

  return (
    <div className="mt-32 relative md:p-0 p-3">
      {products.map((val, index) => (
        <Product key={index} val={val} mover={mover} count={index} />
      ))}

      <div className="lg:block hidden lg:absolute top-0 w-full h-full pointer-events-none">
        <motion.div
          initial={{ y: position, x: "-50%" }}
          animate={{ y: position + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className="window absolute w-[32rem] h-[23rem] bg-white left-[44%] overflow-hidden rounded-xl"
        >
          {products.map((elem, index) => (
            <motion.div
              key={index}
              animate={{ y: -position + "rem" }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
              className="w-full h-full rounded-lg"
            >
              <video autoPlay muted loop>
                <source src={elem.vid} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          ))}
          {/* <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="window w-full h-full bg-sky-100"
          ></motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="window w-full h-full bg-sky-200"
          ></motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="window w-full h-full bg-sky-300"
          ></motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="window w-full h-full bg-sky-400"
          ></motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="window w-full h-full bg-sky-500"
          ></motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="window w-full h-full bg-sky-600"
          ></motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="window w-full h-full bg-sky-700"
          ></motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="window w-full h-full bg-sky-800"
          ></motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="window w-full h-full bg-sky-900"
          ></motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="window w-full h-full bg-sky-100"
          ></motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="window w-full h-full bg-sky-200"
          ></motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="window w-full h-full bg-sky-300"
          ></motion.div> */}
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
