/**
 * Google Sheets Integration Config
 * 
 * Ganti URL di bawah dengan link Google Sheets yang sudah di-publish sebagai JSON.
 * Format: https://docs.google.com/spreadsheets/d/{SHEET_ID}/gviz/tq?tqx=out:json
 * 
 * Pastikan spreadsheet sudah di-share sebagai "Anyone with the link can view"
 */

export const SHEETS_CONFIG = {
  // URL untuk data News/Berita
  NEWS_SHEET_URL: "",
  
  // URL untuk data Merchandise/Produk
  MERCH_SHEET_URL: "",
  
  // Interval refresh data (dalam milidetik) - default 5 menit
  REFRESH_INTERVAL: 5 * 60 * 1000,
};

/**
 * Helper untuk fetch data dari Google Sheets
 * Aktifkan ketika URL sudah diisi
 */
export const fetchSheetData = async (sheetUrl: string) => {
  if (!sheetUrl) {
    console.warn("Sheet URL belum dikonfigurasi");
    return null;
  }
  
  try {
    const response = await fetch(sheetUrl);
    const text = await response.text();
    // Google Sheets returns JSONP, extract the JSON
    const jsonString = text.match(/google\.visualization\.Query\.setResponse\(([\s\S]*)\);?/);
    if (jsonString && jsonString[1]) {
      return JSON.parse(jsonString[1]);
    }
    return null;
  } catch (error) {
    console.error("Error fetching sheet data:", error);
    return null;
  }
};
