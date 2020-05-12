import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
export declare class ChangePasswordDialogComponent implements OnInit {
    mdDialogRef: MatDialogRef<ChangePasswordDialogComponent>;
    private data;
    title: string;
    error: string;
    message: string;
    placeHolder: string;
    placeHolder2: string;
    newpwd: string;
    newpwd2: string;
    constructor(mdDialogRef: MatDialogRef<ChangePasswordDialogComponent>, data: any);
    ngOnInit(): void;
    cancel(): void;
    confirm(): void;
}
