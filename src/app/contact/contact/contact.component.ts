import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactFormDialogComponent } from '../contact-form-dialog/contact-form-dialog.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    const dialogRef = this.dialog.open(ContactFormDialogComponent, {
      width: '250px',
      data: {name: 'Vadim', animal: 'Moz'}
    });
  }

}
