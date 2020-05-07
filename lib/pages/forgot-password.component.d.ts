import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
export declare class ForgotPasswordComponent implements OnInit {
    mdDialogRef: MatDialogRef<ForgotPasswordComponent>;
    private data;
    title: string;
    message: string;
    placeHolder: string;
    inputValue: string;
    constructor(mdDialogRef: MatDialogRef<ForgotPasswordComponent>, data: any);
    ngOnInit(): void;
    cancel(): void;
    confirm(): void;
}
