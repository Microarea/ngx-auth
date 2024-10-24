import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TbAuthService } from '../../auth.service';
import { LoginRequest } from '../../models/login-request';
import * as i0 from "@angular/core";
export declare class ChangePasswordDialogComponent implements OnInit {
    mdDialogRef: MatDialogRef<ChangePasswordDialogComponent>;
    private data;
    authService: TbAuthService;
    title: string;
    message_1: string;
    message_2: string;
    message_3: string;
    message_4: string;
    message_5: string;
    message_6: string;
    message_7: string;
    message_8: string;
    message_9: string;
    message_10: string;
    message_11: string;
    pswRulesSymbol: string;
    placeHolder_1: string;
    placeHolder_2: string;
    newpwd: string;
    newpwd2: string;
    buttonCancel: string;
    changeButton: string;
    currentBrowserLanguage: string;
    blocMaiusc: string;
    loginRequest: LoginRequest;
    resetPassword: string;
    capsLockOn: boolean;
    hidenewpwd: boolean;
    hidenewpwd2: boolean;
    loading: boolean;
    constructor(mdDialogRef: MatDialogRef<ChangePasswordDialogComponent>, data: any, authService: TbAuthService);
    ngOnInit(): void;
    cancel(): void;
    confirm(): Promise<void>;
    keyUpFunction(event: KeyboardEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ChangePasswordDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ChangePasswordDialogComponent, "app-change-password-dialog", never, {}, {}, never, never, false, never>;
}
