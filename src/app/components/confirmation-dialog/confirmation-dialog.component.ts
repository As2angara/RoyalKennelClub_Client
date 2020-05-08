import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent implements OnInit {

  message: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private dialogRef: MatDialogRef<ConfirmationDialogComponent>,) {

    this.message = this.data;
  }

  ngOnInit() {
    setTimeout( () => {
      this.dialogRef.close();

    }, 1500);

    this.dialogRef.afterClosed().subscribe(result => {
      window.location.reload();
    });
  }

}
