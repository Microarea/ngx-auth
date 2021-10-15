import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import * as i0 from "@angular/core";
export declare class ForgotPasswordComponent implements OnInit {
    mdDialogRef: MatDialogRef<ForgotPasswordComponent>;
    private data;
    title: string;
    message: string;
    placeHolder: string;
    inputValue: string;
    buttonCancel: string;
    constructor(mdDialogRef: MatDialogRef<ForgotPasswordComponent>, data: any);
    ngOnInit(): void;
    cancel(): void;
    confirm(): void;
    static ɵfac: i0.ɵɵFactoryDef<ForgotPasswordComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ForgotPasswordComponent, "forgot-password-dialog", never, {}, {}, never, never>;
}
