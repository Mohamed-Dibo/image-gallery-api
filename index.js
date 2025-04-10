const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://masasya-v2.vercel.app");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Credentials", "true");

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  next();
});

app.get("/app.html", (req, res) => {
  // Serve the HTML file
  res.sendFile(path.join(__dirname, "public", "app.html"));
});
app.get("/app_ar.html", (req, res) => {
  // Serve the HTML file
  res.sendFile(path.join(__dirname, "public", "app_ar.html"));
});

// Chipboardpanels
app.get("/api/images/Chipboardpanels", (req, res) => {
  fs.readdir(
    path.join(__dirname, "public", "images", "Chipboardpanels"),
    (err, files) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error reading images directory");
        return;
      }
      const images = files.map((file, i) => ({
        id: i + 1,
        name: file,
        productName: path.basename(file, path.extname(file)),
        MEG1: "2100 * 2800 * 18mm",
        MEG2: "2100 * 2800 * 8mm",
        Note: "Edge Banding Available For All Colors",
        imageURL: `/images/Chipboardpanels/${file}`,
      }));

      res.json(images);
    }
  );
});

// Glossary-Hpl
app.get("/api/images/Glossary-Hpl", (req, res) => {
  fs.readdir(
    path.join(__dirname, "public", "images", "Glossary-Hpl"),
    (err, files) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error reading images directory");
        return;
      }
      const images = files.map((file, i) => ({
        id: i + 1,
        name: file.replace(/\s+/g, ""),
        MEG1: "122 * 244 * 1.8 ",
        productName: path.basename(file, path.extname(file)),
        imageURL: `/images/Glossary-Hpl/${file.replace(/\s+/g, "")}`,
      }));

      res.json(images);
    }
  );
});

// hpl-colors
app.get("/api/images/HPL-COLORS", (req, res) => {
  fs.readdir(
    path.join(__dirname, "public", "images", "HPL-COLORS"),
    (err, files) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error reading images directory");
        return;
      }
      const images = files.map((file, i) => ({
        id: i + 1,
        name: file,
        MEG1: "244 * 122 * 1.8 ",
        productName: path.basename(file, path.extname(file)),
        imageURL: `/images/HPL-COLORS/${file}`,
      }));

      res.json(images);
    }
  );
});
// mdf high glossy
app.get("/api/images/mdfhighglossy", (req, res) => {
  fs.readdir(
    path.join(__dirname, "public", "images", "mdfhighglossy"),
    (err, files) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error reading images directory");
        return;
      }
      const images = files.map((file, i) => ({
        id: i + 1,
        name: file,
        MEG1: "1220 * 2800 * 18mm ",
        Note: "Edge Banding Available For All Colors",
        productName: path.basename(file, path.extname(file)),
        imageURL: `/images/mdfhighglossy/${file}`,
      }));

      res.json(images);
    }
  );
});

// HANDLES
app.get("/api/images/HANDLES", (req, res) => {
  fs.readdir(
    path.join(__dirname, "public", "images", "HANDLES"),
    (err, files) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error reading images directory");
        return;
      }
      const images = files.map((file, i) => ({
        id: i + 1,
        name: file,
        MEG1: "",
        productName: path.basename(file, path.extname(file)),
        imageURL: `/images/HANDLES/${file}`,
      }));

      res.json(images);
    }
  );
});
// NEW HANDLES
app.get("/api/images/HANDLES/newhandels", (req, res) => {
  fs.readdir(
    path.join(__dirname, "public", "images", "HANDLES", "newhandels"),
    (err, files) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error reading images directory");
        return;
      }
      const images = files.map((file, i) => ({
        id: i + 1,
        name: file,
        MEG: "NEW",
        productName: path.basename(file, path.extname(file)),
        imageURL: `/images/HANDLES/newhandels/${file}`,
      }));

      res.json(images);
    }
  );
});
// matthpl
app.get("/api/images/Matthpl", (req, res) => {
  fs.readdir(
    path.join(__dirname, "public", "images", "Matthpl"),
    (err, files) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error reading images directory");
        return;
      }
      const images = files.map((file, i) => ({
        id: i + 1,
        name: file,
        MEG1: "18 * 280 * 210 ",
        productName: path.basename(file, path.extname(file)),
        imageURL: `/images/Matthpl/${file}`,
      }));

      res.json(images);
    }
  );
});

// logos
app.get("/api/images/LOGO", (req, res) => {
  fs.readdir(path.join(__dirname, "public", "images", "LOGO"), (err, files) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error reading images directory");
      return;
    }
    const images = files.map((file, i) => ({
      id: i + 1,
      name: file,
      productName: path.basename(file, path.extname(file)),
      imageURL: `/images/LOGO/${file}`,
    }));

    res.json(images);
  });
});

// app
app.get("/api/images/app/:category/:position/:name", (req, res) => {
  fs.readdir(
    path.join(
      __dirname,
      "public",
      "images",
      "App",
      req.params.category,
      req.params.position
    ),
    (err, files) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error reading images directory");
        return;
      }
      const imageFileName = `${req.params.name}.png`; // Assuming the images have a .jpg extension
      const image = files.find((file) => file === imageFileName);
      if (image) {
        const imageObject = {
          id: 1,
          category: req.params.category,
          position: req.params.position,
          name: req.params.name,
          productName: path.basename(
            imageFileName,
            path.extname(imageFileName)
          ),
          imageURL: `/images/App/${req.params.category}/${req.params.position}/${image}`,
        };
        res.json(imageObject);
      } else {
        res.status(404).send("Image not found");
      }
    }
  );
});

// app.get("/api/images/app/:category/:position", (req, res) => {
//   // res.send(req.params);
//   fs.readdir(
//     path.join(
//       __dirname,
//       "public",
//       "images",
//       "App",
//       req.params.category,
//       req.params.position
//     ),
//     (err, files) => {
//       if (err) {
//         console.error(err);
//         res.status(500).send("Error reading images directory");
//         return;
//       }
//       const images = files.map((file, i) => ({
//         id: i + 1,
//         category: req.params.category,
//         position: req.params.position,
//         name: file,
//         productName: path.basename(file, path.extname(file)),
//         imageURL: `/images/App/${req.params.category}/${req.params.position}/${file}`,
//       }));
//       res.json(images);
//     }
//   );
// });

// to rename file name
// const directory = "./public/images/Glossary-Hpl";

// fs.readdir(directory, (err, files) => {
//   if (err) {
//     console.error(err);
//     return;
//   }

//   files.forEach((file) => {
//     const oldPath = path.join(directory, file);
//     const newPath = path.join(directory, file.replace(/\s/g, ""));

//     fs.rename(oldPath, newPath, (err) => {
//       if (err) {
//         console.error(err);
//         return;
//       }

//       console.log(`Renamed ${oldPath} to ${newPath}`);
//     });
//   });
// });

// Start the server
app.listen(port, () => {
  console.log(`Image API listening at http://localhost:${port}`);
});
