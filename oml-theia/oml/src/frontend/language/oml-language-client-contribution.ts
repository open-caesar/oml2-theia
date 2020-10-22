import { inject, injectable, multiInject } from 'inversify'
// oml-theia/node_modules/sprotty-theia/node_modules/@theia/languages/src/browser/language-client-factory.ts
import { LanguageClientFactory, Languages, Workspace } from '@theia/languages/lib/browser'
import { DiagramManagerProvider, DiagramLanguageClientContribution } from 'sprotty-theia/lib'
import {OML_LANGUAGE_SERVER_ID, OML_LANGUAGE_SERVER_NAME, OML_LANGUAGE_FILE_EXTENSION} from "../../common";

@injectable()
export class OmlLanguageClientContribution extends DiagramLanguageClientContribution {

    readonly id = OML_LANGUAGE_SERVER_ID
    readonly name = OML_LANGUAGE_SERVER_NAME

    constructor(
        @inject(Workspace) protected readonly workspace: Workspace,
        @inject(Languages) protected readonly languages: Languages,
        @inject(LanguageClientFactory) protected readonly languageClientFactory: LanguageClientFactory,
        @multiInject(DiagramManagerProvider) protected diagramManagerProviders: DiagramManagerProvider[]
    ) {
        super(workspace, languages, languageClientFactory, diagramManagerProviders)
    }

    // TS2611: 'globPatterns' is defined as a property in class 'DiagramLanguageClientContribution', but is overridden here in 'OmlLanguageClientContribution' as an accessor.
    // @ ts-ignore
    protected get globPatterns(): string[]  {
        return [
            '**/*' + OML_LANGUAGE_FILE_EXTENSION
        ]
    }

    // TS2611: 'documentSelector' is defined as a property in class 'DiagramLanguageClientContribution', but is overridden here in 'OmlLanguageClientContribution' as an accessor.
    // @ ts-ignore
    protected get documentSelector(): string[] {
        return [
            this.id
        ]
    }
}
