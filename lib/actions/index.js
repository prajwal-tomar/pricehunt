"use server";

import { amazonWebScraper } from "@/scraper";

export async function scrapeTheProductLink(url) {
  if (!url) return "The product link was not right. Something went wrong.";
  try {
    const scrapedProduct = await amazonWebScraper(url);
  } catch (error) {
    throw new Error(`Failed to create/update the product: ${error.message}`);
  }
}
