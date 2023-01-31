function sendEmail () {
  
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  
  var sheet1 = ss.getSheetByName('List');
  var sheet2 = ss.getSheetByName('Message');
  var subject = sheet2.getRange(2,1).getValue();
  var n = sheet1.getLastRow()
    for (var i = 2; i < n + 1; i++){
      var emailAddress = sheet1.getRange(i,2).getValue();
      var name = sheet1.getRange (i,1).getValue();
      var message = sheet2.getRange (2,2).getValue();

  message = message.replace("<name>",name);
  MailApp.sendEmail(emailAddress, subject, message);
  }
}
