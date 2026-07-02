import { execFileSync } from "child_process";
import ffmpegPath from "ffmpeg-static";

const OUT = "C:/Users/fcast/Desktop/pagina web personal/public/videos";

const jobs = [
  { file: `${OUT}/monopatin-retro/render.mp4`, poster: `${OUT}/monopatin-retro/render-poster.jpg`, ts: "3" },
  { file: `${OUT}/dirona/proceso.mp4`, poster: `${OUT}/dirona/proceso-poster.jpg`, ts: "5" },
  { file: `${OUT}/tetera-ceramica/escena.mp4`, poster: `${OUT}/tetera-ceramica/escena-poster.jpg`, ts: "2" },
  { file: `${OUT}/recibidor/publicitario.mp4`, poster: `${OUT}/recibidor/publicitario-poster.jpg`, ts: "4" },
  { file: `${OUT}/molinillo-cafe/proceso.mp4`, poster: `${OUT}/molinillo-cafe/proceso-poster.jpg`, ts: "4" },
  { file: `${OUT}/sistema-luminico/presentacion.mp4`, poster: `${OUT}/sistema-luminico/presentacion-poster.jpg`, ts: "4" },
  { file: `${OUT}/mini-cargo-bike/catedra.mp4`, poster: `${OUT}/mini-cargo-bike/catedra-poster.jpg`, ts: "4" },
  { file: `${OUT}/produccion-fotografica/detras-de-camara.mp4`, poster: `${OUT}/produccion-fotografica/detras-de-camara-poster.jpg`, ts: "4" },
];

for (const job of jobs) {
  execFileSync(ffmpegPath, [
    "-y",
    "-ss", job.ts,
    "-i", job.file,
    "-frames:v", "1",
    job.poster,
  ], { stdio: "inherit" });
  console.log("OK", job.poster);
}
