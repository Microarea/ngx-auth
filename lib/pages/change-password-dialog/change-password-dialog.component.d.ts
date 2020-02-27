import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
export declare class ChangePasswordDialogComponent implements OnInit {
    private data;
    mdDialogRef: MatDialogRef<ChangePasswordDialogComponent>;
    title: string;
    error: string;
    message: string;
    placeHolder: string;
    placeHolder2: string;
    newpwd: string;
    newpwd2: string;
    constructor(data: any, mdDialogRef: MatDialogRef<ChangePasswordDialogComponent>);
    ngOnInit(): void;
    confirm(): void;
}
