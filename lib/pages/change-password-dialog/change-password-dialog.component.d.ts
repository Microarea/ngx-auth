import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import * as i0 from "@angular/core";
export declare class ChangePasswordDialogComponent implements OnInit {
    mdDialogRef: MatDialogRef<ChangePasswordDialogComponent>;
    private data;
    title: string;
    error: string;
    message: string;
    placeHolder_1: string;
    placeHolder_2: string;
    newpwd: string;
    newpwd2: string;
    buttonCancel: string;
    changeButton: string;
    showError: boolean;
    constructor(mdDialogRef: MatDialogRef<ChangePasswordDialogComponent>, data: any);
    ngOnInit(): void;
    cancel(): void;
    confirm(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ChangePasswordDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ChangePasswordDialogComponent, "app-change-password-dialog", never, {}, {}, never, never>;
}
