import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import * as i0 from "@angular/core";
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
    static ɵfac: i0.ɵɵFactoryDef<ChangePasswordDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ChangePasswordDialogComponent, "app-change-password-dialog", never, {}, {}, never, never>;
}
