import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import fs from "fs";
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
let distPath = path.resolve(__dirname, "dist");
if (!fs.existsSync(distPath)) {
  const cwdDist = path.resolve(process.cwd(), "dist");
  if (fs.existsSync(cwdDist)) {
    distPath = cwdDist;
  }
}
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
if (fs.existsSync(publicPath)) {
  app.use(express.static(publicPath));
}
app.use("/assets", (_req, res) => {
  res.status(404).type("text/plain").send("Asset not found");
});
app.use("/api/*", (_req, res) => {
  res.status(404).json({ error: "API route not found" });
});
app.get("*", (req, res, next) => {
  if (path.extname(req.path)) {
    return res.status(404).type("text/plain").send("File not found");
  }
  const indexPath = path.join(distPath, "index.html");
  res.sendFile(indexPath, (err) => {
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
