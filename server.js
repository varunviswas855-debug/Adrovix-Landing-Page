import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = process.env.PORT || 3e3;
app.use(express.json());
app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    service: "ADROVIX Production Server"
  });
});
const distPath = path.resolve(__dirname, "dist");
app.use(
  express.static(distPath, {
    maxAge: "1y",
    immutable: true,
    setHeaders: (res, filePath) => {
      if (filePath.endsWith("index.html")) {
        res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
        res.setHeader("Pragma", "no-cache");
        res.setHeader("Expires", "0");
      }
    }
  })
);
const publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));
app.get("*", (_req, res) => {
  res.sendFile(path.join(distPath, "index.html"), (err) => {
    if (err) {
      res.status(500).send("Error loading ADROVIX application");
    }
  });
});
app.listen(PORT, () => {
  console.log(`ADROVIX production server listening on port ${PORT}`);
});
var server_default = app;
export {
  server_default as default
};
