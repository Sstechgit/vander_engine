import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";
import fs from "fs";
import axios from "axios";

// Static Routes
const staticRoutes = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/about", changefreq: "monthly", priority: 0.8 },
  { url: "/blog/", changefreq: "weekly", priority: 0.7 },
  { url: "/financing", changefreq: "monthly", priority: 0.8 },
  { url: "/contact", changefreq: "monthly", priority: 0.8 },
  { url: "/shipping", changefreq: "monthly", priority: 0.8 },
  { url: "/return", changefreq: "monthly", priority: 0.8 },
  { url: "/warranty", changefreq: "monthly", priority: 0.8 },
  { url: "/termsofservice", changefreq: "monthly", priority: 0.8 },
  { url: "/privacy", changefreq: "monthly", priority: 0.8 },
  { url: "/thankyou", changefreq: "monthly", priority: 0.8 },
  { url: "/addtocart", changefreq: "monthly", priority: 0.8 },
  { url: "/wishlist", changefreq: "monthly", priority: 0.8 },
  { url: "/product", changefreq: "monthly", priority: 0.8 },
  { url: "/updateproduct", changefreq: "monthly", priority: 0.8 },
];

// Function to fetch engine data
async function fetchEngineData() {
  try {
    const response = await axios.get("https://backend.vanderengines.com/api/engines");
    console.log("Engine data fetched:", response.data);  // Log the data to inspect it
    return response.data; // assuming the API returns an object with engine data
  } catch (error) {
    console.error("Error fetching engine data:", error);
    return {};
  }
}

// Function to fetch transmission data
async function fetchTransmissionData() {
  try {
    const response = await axios.get("https://backend.vanderengines.com/api/transmission");
    console.log("Transmission data fetched:", response.data);  // Log the data to inspect it
    return response.data; // assuming the API returns an object with transmission data
  } catch (error) {
    console.error("Error fetching transmission data:", error);
    return {};
  }
}

// Generate Dynamic Routes based on engine data
async function generateEngineRoutes() {
  const engineData = await fetchEngineData();
  const engineRoutes = [];

  for (const year in engineData) {
    for (const make in engineData[year]) {
      for (const model in engineData[year][make]) {
        for (const variant in engineData[year][make][model]) {
          const engineUrl = `/engine/${year}/${make}/${model}/${variant}`;
          engineRoutes.push({
            url: engineUrl,
            changefreq: "monthly",
            priority: 0.9,
          });
        }
      }
    }
  }

  return engineRoutes;
}

// Generate Dynamic Routes based on transmission data
async function generateTransmissionRoutes() {
  const transmissionData = await fetchTransmissionData();
  const transmissionRoutes = [];

  // Assuming the transmission data is similar to engine data
  for (const year in transmissionData) {
    for (const make in transmissionData[year]) {
      for (const model in transmissionData[year][make]) {
        for (const variant in transmissionData[year][make][model]) {
          const transmissionUrl = `/transmission/${year}/${make}/${model}/${variant}`;
          transmissionRoutes.push({
            url: transmissionUrl,
            changefreq: "monthly",
            priority: 0.9,
          });
        }
      }
    }
  }

  return transmissionRoutes;
}

// Combine Static, Engine, and Transmission Routes
async function generateSitemap() {
  const engineRoutes = await generateEngineRoutes();
  const transmissionRoutes = await generateTransmissionRoutes();
  const allRoutes = [...staticRoutes, ...engineRoutes, ...transmissionRoutes];

  // Generate the sitemap
  const stream = new SitemapStream({ hostname: "https://vanderengines.com" });

  const sitemap = await streamToPromise(Readable.from(allRoutes).pipe(stream)).then(
    (data) => data.toString()
  );

  // Save the sitemap to your public directory
  fs.writeFileSync("./public/sitemap.xml", sitemap);

  console.log("Sitemap successfully generated!");
}

// Call the function to generate the sitemap
generateSitemap();
