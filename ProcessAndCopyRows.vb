Sub ProcessAndCopyRows()
    Dim ws As Worksheet
    Dim newWs As Worksheet
    Dim lastRow As Long
    Dim copyRow As Long
    Dim i As Long

    ' Set the active worksheet
    Set ws = ThisWorkbook.ActiveSheet
    
    ' Create or clear the target worksheet
    On Error Resume Next
    Set newWs = ThisWorkbook.Worksheets("FilteredData")
    If newWs Is Nothing Then
        Set newWs = ThisWorkbook.Worksheets.Add
        newWs.Name = "FilteredData"
    Else
        newWs.Cells.Clear
    End If
    On Error GoTo 0
    
    ' Get the last row of data in column A
    lastRow = ws.Cells(ws.Rows.Count, 1).End(xlUp).Row
    copyRow = 1
    
    ' Process each cell in column A
    For i = 1 To lastRow
        If Not IsEmpty(ws.Cells(i, 1)) Then
            ' Convert to string and trim the value
            Dim cellValue As String
            cellValue = Trim(CStr(ws.Cells(i, 1).Value))
            
            ' Check if the length is 4 characters
            If Len(cellValue) = 5 Then
                ' Copy the row to the new sheet
                ws.Rows(i).Copy Destination:=newWs.Rows(copyRow)
                copyRow = copyRow + 1
            End If
        End If
    Next i
    
    MsgBox "Rows with 5-character values have been copied to the 'FilteredData' sheet.", vbInformation
End Sub

