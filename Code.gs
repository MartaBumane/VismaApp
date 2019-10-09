var url = "https://docs.google.com/spreadsheets/d/1g-A-6vCult5UaRVQ9ALulscaO67JA39uZAu5OeAsWv4/edit#gid=192842750";

function doGet() {
  return HtmlService.createHtmlOutputFromFile('page');
}


function getTableData(){
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("responses");
  var dataTable = ws.getRange(2, 1, ws.getLastRow()-1, 4).getValues();
 
  
  return dataTable;
  
  
}