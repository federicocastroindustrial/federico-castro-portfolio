import sharp from "sharp";

const B = "C:/Users/fcast/Desktop/recursos/behance-fetch";
const OUT = "C:/Users/fcast/Desktop/pagina web personal/public/images/projects";

const jobs = [
  {
    input: `${B}/oruga-4.jpg`,
    output: `${OUT}/lampara-oruga/real-triple.jpg`,
    crop: { left: 0, top: 822, width: 1400, height: 568 },
  },
  {
    input: `${B}/oruga-4.jpg`,
    output: `${OUT}/lampara-oruga/real-mesa.jpg`,
    crop: { left: 0, top: 0, width: 790, height: 812 },
  },
  {
    input: `${B}/planif-3.jpg`,
    output: `${OUT}/especiero/explotada.jpg`,
    crop: null,
  },
  {
    input: `${B}/planif-2.jpg`,
    output: `${OUT}/especiero/real-manos.jpg`,
    crop: { left: 0, top: 230, width: 1400, height: 940 },
  },
  {
    input: `${B}/planif-1.jpg`,
    output: `${OUT}/especiero/producto-cocina.jpg`,
    crop: { left: 0, top: 210, width: 1400, height: 880 },
  },
];

const run = async () => {
  for (const job of jobs) {
    let pipeline = sharp(job.input).rotate();
    if (job.crop) pipeline = pipeline.extract(job.crop);
    await pipeline
      .resize({ width: 2000, withoutEnlargement: true })
      .jpeg({ quality: 85, mozjpeg: true })
      .toFile(job.output);
    console.log("OK", job.output);
  }
};

run();
