import { ContainerModule, interfaces } from 'inversify'
import { CommandContribution } from '@theia/core/lib/common'
import { LanguageClientContribution } from '@theia/languages/lib/browser'
import { Oml2LanguageClientContribution } from './oml2-language-client-contribution'
import { configuration } from './oml2-monaco-language'
import { Oml2CommandContribution } from './oml2-commands'
import { MonacoEditorProvider } from '@theia/monaco/lib/browser/monaco-editor-provider'
import { Oml2MonacoEditorProvider } from "../monaco/oml2-monaco-editor-provider"
import { ContextMenuCommands } from './dynamic-commands'
import { LanguageGrammarDefinitionContribution } from '@theia/monaco/lib/browser/textmate/textmate-contribution'
import { Oml2TextmateContribution } from './oml2-textmate-contribution'

export default new ContainerModule((bind: interfaces.Bind, unbind: interfaces.Unbind, isBound: interfaces.IsBound, rebind: interfaces.Rebind) => {
    monaco.languages.register({
        id: 'oml2',
        aliases: ['Oml2', 'oml2'],
        extensions: ['.oml2'],
        mimetypes: ['text/oml2']
    })
    monaco.languages.onLanguage('oml2', () => {
        monaco.languages.setLanguageConfiguration('oml2', configuration)
    });
    bind(CommandContribution).to(Oml2CommandContribution).inSingletonScope();
    bind(Oml2LanguageClientContribution).toSelf().inSingletonScope()
    bind(LanguageClientContribution).toDynamicValue(ctx => ctx.container.get(Oml2LanguageClientContribution))
    bind(ContextMenuCommands).to(ContextMenuCommands).inSingletonScope()
    rebind(MonacoEditorProvider).to(Oml2MonacoEditorProvider).inSingletonScope()
    bind(LanguageGrammarDefinitionContribution).to(Oml2TextmateContribution).inSingletonScope()
})