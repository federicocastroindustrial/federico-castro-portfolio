import { execFileSync } from "child_process";
import path from "path";
import fs from "fs";
import ffmpegPath from "ffmpeg-static";

const R = "C:/Users/fcast/Desktop/recursos";
const OUT = "C:/Users/fcast/Desktop/pagina web personal/public/videos";

const jobs = [
  {
    input: `${R}/McFly (monopatín plegable)/Comp 2_2.mp4`,
    slug: "monopatin-retro",
    name: "render",
  },
  {
    input: `${R}/Dirona (humidificador)/video dirona.mp4`,
    slug: "dirona",
    name: "proceso",
  },
  {
    input: `${R}/tetera de cerámica/tetera en escena.mp4`,
    slug: "tetera-ceramica",
    name: "escena",
  },
  {
    input: `${R}/Recibidor pasillos estrechos/video publicitario de mebke recibidor.mp4`,
    slug: "recibidor",
    name: "publicitario",
  },
  {
    input: `${R}/molinillo de café/video molinillo de café.mp4`,
    slug: "molinillo-cafe",
    name: "proceso",
  },
  {
    input: `${R}/Sistema Lumínico/video/video presentación.mp4`,
    slug: "sistema-luminico",
    name: "presentacion",
  },
  {
    input: `${R}/Mini cargo bike CABA/Federico Castro- Cátedra Quispe (1).mp4`,
    slug: "mini-cargo-bike",
    name: "catedra",
  },
  {
    input: `${R}/Producción fotográfica/jpg foto estudio/video pruducción fotografica.mp4`,
    slug: "produccion-fotografica",
    name: "detras-de-camara",
  },
];

for (const job of jobs) {
  const dir = path.join(OUT, job.slug);
  fs.mkdirSync(dir, { recursive: true });
  const outFile = path.join(dir, `${job.name}.mp4`);
  const posterFile = path.join(dir, `${job.name}-poster.jpg`);

  console.log("Transcoding", job.input);
  execFileSync(ffmpegPath, [
    "-y",
    "-i", job.input,
    "-vf", "scale='min(1280,iw)':-2",
    "-c:v", "libx264",
    "-preset", "medium",
    "-crf", "27",
    "-c:a", "aac",
    "-b:a", "128k",
    "-movflags", "+faststart",
    outFile,
  ], { stdio: "inherit" });

  execFileSync(ffmpegPath, [
    "-y",
    "-i", job.input,
    "-ss", "00:00:00.5",
    "-frames:v", "1",
    "-vf", "scale='min(1280,iw)':-2",
    posterFile,
  ], { stdio: "inherit" });

  console.log("OK", job.slug, job.name);
}
