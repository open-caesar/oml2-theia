import { inject, injectable, multiInject } from 'inversify'
import { LanguageClientFactory, Languages, Workspace } from '@theia/languages/lib/browser'
import { DiagramManagerProvider, DiagramLanguageClientContribution } from 'sprotty-theia/lib'

@injectable()
export class OmlLanguageClientContribution extends DiagramLanguageClientContribution {

    readonly id = 'oml'
    readonly name = 'Oml'

    constructor(
        @inject(Workspace) protected readonly workspace: Workspace,
        @inject(Languages) protected readonly languages: Languages,
        @inject(LanguageClientFactory) protected readonly languageClientFactory: LanguageClientFactory,
        @multiInject(DiagramManagerProvider) protected diagramManagerProviders: DiagramManagerProvider[]
    ) {
        super(workspace, languages, languageClientFactory, diagramManagerProviders)
    }

    protected get globPatterns() {
        return [
            '**/*.oml'
        ]
    }

    protected get documentSelector(): string[] {
        return [
            this.id
        ]
    }
}
