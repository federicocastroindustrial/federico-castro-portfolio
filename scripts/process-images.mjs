import sharp from "sharp";
import path from "path";

const R = "C:/Users/fcast/Desktop/recursos";
const OUT = "C:/Users/fcast/Desktop/pagina web personal/public/images/projects";
const ABOUT_OUT = "C:/Users/fcast/Desktop/pagina web personal/public/images/about";

const jobs = [
  // McFly (monopatin retro) - crop hero render + exploded components from panel
  {
    input: `${R}/McFly (monopatín plegable)/Panel principal.jpg`,
    output: `${OUT}/monopatin-retro/hero.jpg`,
    crop: { left: 140, top: 70, width: 4700, height: 3750 },
  },
  {
    input: `${R}/McFly (monopatín plegable)/Panel principal.jpg`,
    output: `${OUT}/monopatin-retro/proceso-explosion.jpg`,
    crop: { left: 140, top: 9020, width: 4700, height: 2320 },
  },
  {
    input: `${R}/Mesa de trabajo 1.png`,
    output: `${OUT}/monopatin-retro/proceso-bocetos.jpg`,
    crop: null,
  },
  // Dirona
  {
    input: `${R}/Dirona (humidificador)/dirona/panel entrga 100% 1511.jpg`,
    output: `${OUT}/dirona/hero.jpg`,
    crop: { left: 0, top: 0, width: 2527, height: 3054 },
  },
  {
    input: `${R}/Dirona (humidificador)/dirona/panel entrga 100% 1511.jpg`,
    output: `${OUT}/dirona/producto-blanco.jpg`,
    crop: { left: 1500, top: 4870, width: 1250, height: 1000 },
  },
  // Tetera
  {
    input: `${R}/tetera de cerámica/tetera.jpg`,
    output: `${OUT}/tetera-ceramica/hero.jpg`,
    crop: { left: 2420, top: 0, width: 2540, height: 2550 },
  },
  {
    input: `${R}/tetera de cerámica/tetera.jpg`,
    output: `${OUT}/tetera-ceramica/proceso-boceto.jpg`,
    crop: { left: 0, top: 2682, width: 4961, height: 3260 },
  },
  // Sistema Luminico - clean technical drawings, no crop needed
  {
    input: `${R}/Sistema Lumínico/planos/lampara pie tajamar .jpg`,
    output: `${OUT}/sistema-luminico/plano-pie.jpg`,
    crop: null,
  },
  {
    input: `${R}/Sistema Lumínico/planos/velador.jpg`,
    output: `${OUT}/sistema-luminico/plano-velador.jpg`,
    crop: null,
  },
  {
    input: `${R}/Sistema Lumínico/planos/SPOT.jpg`,
    output: `${OUT}/sistema-luminico/plano-spot.jpg`,
    crop: null,
  },
  // Recibidor - real photos, no crop
  {
    input: `${R}/Recibidor pasillos estrechos/imagenes reales/Compartido desde Lightroom mobile.jpg`,
    output: `${OUT}/recibidor/real-01.jpg`,
    crop: null,
  },
  {
    input: `${R}/Recibidor pasillos estrechos/imagenes reales/Compartido desnnjde Lightroom mobile.jpg`,
    output: `${OUT}/recibidor/real-02.jpg`,
    crop: null,
  },
  {
    input: `${R}/Recibidor pasillos estrechos/imagenes reales/Compartido deshjfjde Lightroom mobile.jpg`,
    output: `${OUT}/recibidor/real-03.jpg`,
    crop: null,
  },
  // Produccion fotografica
  {
    input: `${R}/Producción fotográfica/jpg foto estudio/entrega 100% produccion grafica_Página_04.jpg`,
    output: `${OUT}/produccion-fotografica/modelo.jpg`,
    crop: { left: 60, top: 400, width: 950, height: 780 },
  },
  {
    input: `${R}/Producción fotográfica/jpg foto estudio/entrega 100% produccion grafica_Página_09.jpg`,
    output: `${OUT}/produccion-fotografica/resultado-01.jpg`,
    crop: null,
  },
  {
    input: `${R}/Producción fotográfica/jpg foto estudio/entrega 100% produccion grafica_Página_11.jpg`,
    output: `${OUT}/produccion-fotografica/resultado-02.jpg`,
    crop: null,
  },
  // Molinillo - clean exploded technical drawing
  {
    input: `${R}/molinillo de café/EXPLOTADA-A1-NPRD.jpg`,
    output: `${OUT}/molinillo-cafe/explotada.jpg`,
    crop: null,
  },
  // About - portrait
  {
    input: `${R}/IMG_6879.JPG`,
    output: `${ABOUT_OUT}/retrato.jpg`,
    crop: null,
  },
  // Mini cargo bike - first frame of gif
  {
    input: `${R}/Mini cargo bike CABA/bicicleta con materiales.139.gif`,
    output: `${OUT}/mini-cargo-bike/hero.jpg`,
    crop: null,
  },
];

const run = async () => {
  for (const job of jobs) {
    try {
      let pipeline = sharp(job.input).rotate();
      if (job.crop) pipeline = pipeline.extract(job.crop);
      await pipeline
        .resize({ width: 2400, withoutEnlargement: true })
        .jpeg({ quality: 85, mozjpeg: true })
        .toFile(job.output);
      console.log("OK", path.basename(job.output));
    } catch (err) {
      console.error("FAIL", job.output, err.message);
    }
  }
};

run();
