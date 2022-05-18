import { OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatDialogRef } from '@angular/material/dialog';
import * as i0 from "@angular/core";
export declare class AlertDialogComponent implements OnInit {
    private data;
    private mdDialogRef;
    title: string;
    message: string;
    dontshow: string;
    subkey: string;
    imagePath: string;
    imageAlt: string;
    dontshowanymore: boolean;
    constructor(data: {
        Message: string;
        Title: string;
        DontShow: string;
        SubKey: string;
        ImagePath: string;
        ImageAlt: string;
    }, mdDialogRef: MatDialogRef<AlertDialogComponent>);
    ngOnInit(): void;
    showOptions(event: MatCheckboxChange): void;
    closeDialog(): void;
    static ɵfac: i0.ɵɵFactoryDef<AlertDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<AlertDialogComponent, "app-alert-dialog", never, {}, {}, never, never>;
}
