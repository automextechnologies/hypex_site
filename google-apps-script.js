/**
 * ============================================================================
 * HYPEX LEAD CAPTURE - GOOGLE APPS SCRIPT (v2 - Robust & Universal)
 * ============================================================================
 * 
 * ⚠️ WHY SUBMISSIONS WERE BLOCKED:
 * When testing your Web App URL, Google returned "You need access".
 * That means the deployment permission was set to "Only myself" instead of "Anyone".
 * 
 * ----------------------------------------------------------------------------
 * STEP-BY-STEP FIX IN GOOGLE APPS SCRIPT:
 * ----------------------------------------------------------------------------
 * 1. Open your Google Sheet.
 * 2. Go to: Extensions > Apps Script.
 * 3. Replace all code in the editor with this file's code.
 * 4. (Optional) If this script was created outside the sheet, paste your
 *    Spreadsheet ID below in SPREADSHEET_ID. If opened from the sheet, leave it blank.
 * 5. Click "Save" (💾).
 * 6. In the top right, click "Deploy" > "Manage deployments".
 * 7. Click the PENCIL ICON ✏️ next to your active deployment.
 * 8. CRITICAL SETTINGS:
 *    - Version: select "New version"
 *    - Execute as: "Me" (your email)
 *    - Who has access: "Anyone"  <--- (MUST BE "Anyone", NOT "Only myself")
 * 9. Click "Deploy".
 * ============================================================================
 */

// OPTIONAL: If your script is standalone (not bound to the sheet), paste the Sheet ID here.
// The Sheet ID is the long string in your sheet URL: https://docs.google.com/spreadsheets/d/<SPREADSHEET_ID>/edit
var SPREADSHEET_ID = ""; 

function getTargetSheet() {
  var doc = null;
  if (SPREADSHEET_ID && SPREADSHEET_ID.trim() !== "") {
    doc = SpreadsheetApp.openById(SPREADSHEET_ID.trim());
  } else {
    doc = SpreadsheetApp.getActiveSpreadsheet();
  }
  if (!doc) {
    throw new Error("Could not find Spreadsheet. Please ensure the script was opened via 'Extensions > Apps Script' in your Google Sheet, or set SPREADSHEET_ID at the top of the script.");
  }
  return doc.getActiveSheet();
}

/**
 * ONE-CLICK AUTHORIZATION & TEST:
 * Select "testSetup" in the toolbar dropdown and click "Run" (▶).
 * This will:
 * 1. Prompt you to authorize Google Sheets access (click "Review permissions" -> "Allow")
 * 2. Immediately insert a test row in your sheet so you can confirm it works!
 */
function testSetup() {
  var sheet = getTargetSheet();
  Logger.log("Connected to sheet: " + sheet.getName());
  
  if (sheet.getLastRow() === 0) {
    var headers = [
      "Timestamp",
      "Name",
      "Phone",
      "SMS Opt-in",
      "WhatsApp Opt-in",
      "Terms & Conditions Accepted"
    ];
    sheet.appendRow(headers);
    var headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setFontWeight("bold");
    headerRange.setBackground("#0A0A0A");
    headerRange.setFontColor("#FFFFFF");
    sheet.setFrozenRows(1);
    Logger.log("Headers created!");
  }
  
  sheet.appendRow([new Date(), "Test Lead", "971 50 123 4567", true, true, true]);
  Logger.log("SUCCESS! Test row added at row " + sheet.getLastRow() + ". Check your Google Sheet!");
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000); // Wait up to 10 seconds for other operations to complete

  try {
    var sheet = getTargetSheet();

    // Auto-create and format header row if sheet is empty
    if (sheet.getLastRow() === 0) {
      var headers = [
        "Timestamp",
        "Name",
        "Phone",
        "SMS Opt-in",
        "WhatsApp Opt-in",
        "Terms & Conditions Accepted"
      ];
      sheet.appendRow(headers);
      var headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#0A0A0A");
      headerRange.setFontColor("#FFFFFF");
      sheet.setFrozenRows(1);
    }

    // Parse incoming data safely
    var data = {};
    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        // If not valid JSON, try form parameter fallback
        data = e.parameter || {};
      }
    } else if (e && e.parameter) {
      data = e.parameter;
    }

    var timestamp = new Date();
    var name = String(data.name || "").trim();
    var phone = String(data.phone || "").replace(/\+/g, "").trim();
    
    // Normalize boolean consent values (true / false)
    var smsOptin = parseBoolean(data.sms_optin !== undefined ? data.sms_optin : data.smsOptin);
    var whatsappOptin = parseBoolean(data.whatsapp_optin !== undefined ? data.whatsapp_optin : data.whatsappOptin);
    var termsAccepted = parseBoolean(data.terms_accepted !== undefined ? data.terms_accepted : data.termsAccepted);

    // Append row to sheet
    sheet.appendRow([
      timestamp,
      name,
      phone,
      smsOptin,
      whatsappOptin,
      termsAccepted
    ]);

    var lastRow = sheet.getLastRow();
    sheet.getRange(lastRow, 1).setNumberFormat("yyyy-mm-dd hh:mm:ss");

    return ContentService
      .createTextOutput(JSON.stringify({
        status: "success",
        message: "Data recorded successfully",
        row: lastRow
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({
        status: "error",
        message: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } finally {
    lock.releaseLock();
  }
}

// GET endpoint for easy testing directly in the browser
function doGet(e) {
  try {
    var sheet = getTargetSheet();
    
    // If test parameters are provided in URL (e.g. ?name=Test&phone=123)
    if (e && e.parameter && (e.parameter.name || e.parameter.phone)) {
      return doPost(e);
    }

    return ContentService
      .createTextOutput(JSON.stringify({
        status: "ok",
        message: "Hypex Google Apps Script is active and connected to sheet: '" + sheet.getName() + "' with " + sheet.getLastRow() + " rows."
      }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({
        status: "error",
        message: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function parseBoolean(val) {
  if (typeof val === "boolean") return val;
  if (typeof val === "string") {
    var lower = val.trim().toLowerCase();
    return lower === "true" || lower === "1" || lower === "yes" || lower === "on";
  }
  if (typeof val === "number") return val === 1;
  return false;
}
