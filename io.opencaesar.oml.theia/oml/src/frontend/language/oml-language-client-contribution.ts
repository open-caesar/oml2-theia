import { inject, injectable, named } from 'inversify'
import { FrontendApplication, KeybindingRegistry } from '@theia/core/lib/browser'
import URI from '@theia/core/lib/common/uri'
import {
    BaseLanguageClientContribution,
    LanguageClientFactory,
    Languages,
    Workspace,
    ILanguageClient
} from '@theia/languages/lib/browser'
import { MessageConnection } from 'vscode-jsonrpc';
import { DiagramManagerProvider, DiagramManager } from 'theia-sprotty/lib'
import { CommandRegistry, Disposable } from '@theia/core/lib/common';
import { SemanticHighlightingService } from '@theia/editor/lib/browser/semantic-highlight/semantic-highlighting-service';
import { ContextMenuCommands } from './dynamic-commands';

@injectable()
export class OmlLanguageClientContribution extends BaseLanguageClientContribution {

    readonly id = 'oml'
    readonly name = 'Oml'

    constructor(
        @inject(Workspace) workspace: Workspace,
        @inject(Languages) languages: Languages,
        @inject(LanguageClientFactory) languageClientFactory: LanguageClientFactory,
        @inject(DiagramManagerProvider)@named('oml-diagram') protected omlDiagramManagerProvider: DiagramManagerProvider,
        @inject(KeybindingRegistry) protected keybindingRegistry: KeybindingRegistry,
        @inject(CommandRegistry) protected commandRegistry: CommandRegistry,
        @inject(ContextMenuCommands) protected commands: ContextMenuCommands,
        @inject(SemanticHighlightingService) protected readonly semanticHighlightingService: SemanticHighlightingService
    ) {
        super(workspace, languages, languageClientFactory)
    }

    protected get globPatterns() {
        return [
            '**/*.oml'
        ]
    }

    waitForActivation(app: FrontendApplication): Promise<any> {
        return Promise.race([
            super.waitForActivation(app),
            this.waitForOpenDiagrams(this.omlDiagramManagerProvider())
        ])
    }

    createLanguageClient(connection: MessageConnection): ILanguageClient {
        const client: ILanguageClient & Readonly<{ languageId: string }> = Object.assign(super.createLanguageClient(connection), { languageId: this.id });
        client.registerFeature(SemanticHighlightingService.createNewFeature(this.semanticHighlightingService, client));
        return client;
    }

    protected waitForOpenDiagrams(diagramManagerProvider: Promise<DiagramManager>): Promise<any> {
        return diagramManagerProvider.then(diagramManager => {
            return new Promise<URI>((resolve) => {
                const disposable = diagramManager.onDiagramOpened((uri: URI) => {
                    disposable.dispose()
                    resolve(uri)
                })
            })
        })
    }

    registerCommand(id: string, callback: (...args: any[]) => any, thisArg?: any): Disposable {
        return this.commands.registerCommand(id, callback, thisArg)
    }
}
