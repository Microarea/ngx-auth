import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import * as i0 from "@angular/core";
export declare class OtpComponent implements OnInit {
    mdDialogRef: MatDialogRef<OtpComponent>;
    private data;
    title: string;
    message: string;
    placeHolder: string;
    inputValue: string;
    buttonCancel: string;
    constructor(mdDialogRef: MatDialogRef<OtpComponent>, data: any);
    ngOnInit(): void;
    cancel(): void;
    confirm(): void;
    static ɵfac: i0.ɵɵFactoryDef<OtpComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<OtpComponent, "otp-dialog", never, {}, {}, never, never>;
}
