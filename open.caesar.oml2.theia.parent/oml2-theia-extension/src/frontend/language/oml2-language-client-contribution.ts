/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */

import { inject, injectable } from 'inversify'
import { FrontendApplication, KeybindingRegistry } from '@theia/core/lib/browser'
import {
    BaseLanguageClientContribution,
    LanguageClientFactory,
    Languages,
    Workspace,
    ILanguageClient
} from '@theia/languages/lib/browser'
import { MessageConnection } from 'vscode-jsonrpc';
import { CommandRegistry, Disposable } from '@theia/core/lib/common';
import { SemanticHighlightingService } from '@theia/editor/lib/browser/semantic-highlight/semantic-highlighting-service';
import { ContextMenuCommands } from './dynamic-commands';

@injectable()
export class Oml2LanguageClientContribution extends BaseLanguageClientContribution {

    readonly id = 'oml2'
    readonly name = 'Oml2'

    constructor(
        @inject(Workspace) workspace: Workspace,
        @inject(Languages) languages: Languages,
        @inject(LanguageClientFactory) languageClientFactory: LanguageClientFactory,
        @inject(KeybindingRegistry) protected keybindingRegistry: KeybindingRegistry,
        @inject(CommandRegistry) protected commandRegistry: CommandRegistry,
        @inject(ContextMenuCommands) protected commands: ContextMenuCommands,
        @inject(SemanticHighlightingService) protected readonly semanticHighlightingService: SemanticHighlightingService
    ) {
        super(workspace, languages, languageClientFactory)
    }

    protected get globPatterns() {
        return [
            '**/*.oml2'
        ]
    }

    waitForActivation(app: FrontendApplication): Promise<any> {
        return Promise.race([
            super.waitForActivation(app)
        ])
    }

    createLanguageClient(connection: MessageConnection): ILanguageClient {
        const client: ILanguageClient & Readonly<{ languageId: string }> = Object.assign(super.createLanguageClient(connection), { languageId: this.id });
        client.registerFeature(SemanticHighlightingService.createNewFeature(this.semanticHighlightingService, client));
        return client;
    }

    registerCommand(id: string, callback: (...args: any[]) => any, thisArg?: any): Disposable {
        return this.commands.registerCommand(id, callback, thisArg)
    }
}
