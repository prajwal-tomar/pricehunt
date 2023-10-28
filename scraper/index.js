"use server";

import axios from "axios";
import * as cheerio from "cheerio";

export async function amazonWebScraper(url) {
  if (!url) return; // if the url is not valid, then just return without moving ahead.
  const username = String(process.env.BRIGHT_DATA_USERNAME);
  const password = String(process.env.BRIGHT_DATA_PASSWORD);
  const port = 22225;
  const session_id = (1000000 * Math.random()) | 0;

  // the below options is to recreate the base CURL provided by bright data, i.e
  //curl --proxy brd.superproxy.io:22225 --proxy-user brd-customer-hl_cd350ed2-zone-unblocker:jbncff07ipdo -k https://lumtest.com/myip.json

  const options = {
    auth: {
      username: `${username}-session-${session_id}`,
      password,
    },
    host: "brd.superproxy.io",
    port,
    rejectUnauthorized: false,
  };

  try {
    const response = await axios.get(url, options);
    const $ = cheerio.load(response.data);

    const title = $("#productTitle").text().trim();
    console.log(title);
  } catch (error) {
    throw new Error(`Something went wrong: ${error.message} `);
  }
}
