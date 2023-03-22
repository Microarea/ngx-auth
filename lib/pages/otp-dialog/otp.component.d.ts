import { EventEmitter, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import * as i0 from "@angular/core";
export declare class OtpComponent implements OnInit {
    mdDialogRef: MatDialogRef<OtpComponent>;
    private data;
    title: string;
    accname: string;
    message: string;
    placeHolder: string;
    inputValue: string;
    buttonCancel: string;
    resendOTPpLabel: string;
    alternative: boolean;
    alternativelbl: string;
    resendRequested: EventEmitter<any>;
    constructor(mdDialogRef: MatDialogRef<OtpComponent>, data: any);
    ngOnInit(): void;
    cancel(): void;
    resendOTP(): Promise<void>;
    closeDialog(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<OtpComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OtpComponent, "otp-dialog", never, {}, {}, never, never>;
}
