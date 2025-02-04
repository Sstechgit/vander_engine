import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";
import fs from "fs";

// Define your React routes here
const routes = [
  { path: "/", changefreq: "daily", priority: 1.0 },
  { path: "/social-media-marketing-agency-chicago", changefreq: "monthly", priority: 0.8 },
  { path: "/web-development-agency-chicago", changefreq: "monthly", priority: 0.8 },
  { path: "/content-writing-agency-chicago", changefreq: "monthly", priority: 0.8 },
  { path: "/ppc-company-chicago", changefreq: "monthly", priority: 0.8 },
  { path: "/PricingBox", changefreq: "monthly", priority: 0.7 },
  { path: "/graphic-design-services-chicago", changefreq: "monthly", priority: 0.8 },
  { path: "/bpo-services-chicago", changefreq: "monthly", priority: 0.8 },
  { path: "/seo-agency-chicago", changefreq: "monthly", priority: 0.8 },
  { path: "/career", changefreq: "monthly", priority: 0.7 },
  { path: "/courses", changefreq: "monthly", priority: 0.7 },
  { path: "/portfolio", changefreq: "monthly", priority: 0.8 },
  { path: "/contact", changefreq: "monthly", priority: 0.8 },
  { path: "/about", changefreq: "monthly", priority: 0.8 },
  { path: "/Privacy", changefreq: "monthly", priority: 0.8 },
  { path: "/thankyou", changefreq: "monthly", priority: 0.8 },
  { path: "/mentorcourses", changefreq: "monthly", priority: 0.7 },
  { path: "/popup2", changefreq: "monthly", priority: 0.6 }, // Popup route without header and footer
];

// Generate the sitemap
async function generateSitemap() {
  const hostname = "https://sstechservices.net"; // Replace with your actual domain

  const urls = routes.map((route) => ({
    url: route.path,
    changefreq: route.changefreq,
    priority: route.priority,
  }));

  const stream = new SitemapStream({ hostname });

  // Create sitemap from routes
  const sitemap = await streamToPromise(Readable.from(urls).pipe(stream)).then(
    (data) => data.toString()
  );

  // Save the sitemap as sitemap.xml in the public directory
  fs.writeFileSync("./public/sitemap.xml", sitemap);

  console.log("Sitemap successfully generated!");
}

// Call the function to generate the sitemap
generateSitemap().catch((error) => {
  console.error("Error generating sitemap:", error);
});
