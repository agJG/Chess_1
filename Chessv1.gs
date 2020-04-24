//this is a google apps script to format and auto update an 8x8 chess board in google sheets

function myFunction() {
}


function onEdit(e) {

  //this bit of code tells the script which spreadsheet to work with
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Sheet1");;
  
  //this bit of code tells the script where to put the chess board
  var range = sheet.getRange('A1:J10'); 
  range.activate();

  var values = range.getValues();
  var rows = SpreadsheetApp.getActiveSheet().getDataRange().getValues();
  
  //this bit of code walks through each cell, one at a time, and determines what color it should be
  for(var i = 0; i < values.length; i++) {             //this goes through each row
    setRowHeight(30);
    for( var j = 0; j< values[i].length ; j++){        //this goes through each column
      var cell = range.getCell(i+1, j+1);              //this is the current cell
      

      //if the cell is a border cell (i =0,9; j = 0,9), color it black
      if ((i == 0 || i == 9) || (j == 0 || j == 9)) {
        cell.setBackground('black');
      }
      //if both indices are even, or both indices are odd, color the cell white
      else if ((i%2 == 0 && j%2 == 0) || (i%2 == 1 && j%2 == 1)) {
         cell.setBackground('white');
      }
      //otherwise color the cell grey
      else {
        cell.setBackground('grey');
      }
    } 
  }
 }



//if both indices are even, or both indices are odd, color the cell grey"""
