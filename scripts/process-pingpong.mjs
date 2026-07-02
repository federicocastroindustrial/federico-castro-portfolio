import sharp from "sharp";

const SRC = "C:/Users/fcast/Desktop/recursos/paletas 3D ping pog.jpg";
const OUT = "C:/Users/fcast/Desktop/pagina web personal/public/images/projects/paletas-ping-pong";

const jobs = [
  {
    output: `${OUT}/hero.jpg`,
    crop: { left: 0, top: 670, width: 3506, height: 1934 },
  },
  {
    output: `${OUT}/proceso-modulos.jpg`,
    crop: { left: 0, top: 2827, width: 1700, height: 1041 },
  },
  {
    output: `${OUT}/mano.jpg`,
    crop: { left: 2480, top: 2827, width: 1027, height: 794 },
  },
];

const run = async () => {
  for (const job of jobs) {
    await sharp(SRC)
      .rotate()
      .extract(job.crop)
      .resize({ width: 2000, withoutEnlargement: true })
      .jpeg({ quality: 85, mozjpeg: true })
      .toFile(job.output);
    console.log("OK", job.output);
  }
};

run();
