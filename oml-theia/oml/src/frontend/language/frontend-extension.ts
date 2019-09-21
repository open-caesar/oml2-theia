import { ContainerModule, interfaces } from 'inversify'
import { CommandContribution } from '@theia/core/lib/common'
import { LanguageClientContribution } from '@theia/languages/lib/browser'
import { OmlLanguageClientContribution } from './oml-language-client-contribution'
import { DiagramConfiguration } from 'sprotty-theia/lib'
import { OmlDiagramConfiguration } from '../diagram/di.config'
import { DiagramManager, DiagramManagerProvider } from 'sprotty-theia/lib'
import { OmlDiagramManager } from '../diagram/oml-diagram-manager'
import { FrontendApplicationContribution, OpenHandler, WidgetFactory } from '@theia/core/lib/browser'
import { configuration } from './oml-monaco-language'
import { OmlCommandContribution } from './oml-commands'
import { MonacoEditorProvider } from '@theia/monaco/lib/browser/monaco-editor-provider'
import { OmlMonacoEditorProvider } from "../monaco/oml-monaco-editor-provider"
import 'sprotty/css/sprotty.css'
import 'sprotty-theia/css/theia-sprotty.css'
import { ContextMenuCommands } from './dynamic-commands'
import { ThemeManager } from '../diagram/theme-manager';
import { LanguageGrammarDefinitionContribution } from '@theia/monaco/lib/browser/textmate/textmate-contribution'
import { OmlTextmateContribution } from './oml-textmate-contribution'
import { OmlDiagramLanguageClient } from '../diagram/oml-diagram-language-client';

export default new ContainerModule((bind: interfaces.Bind, unbind: interfaces.Unbind, isBound: interfaces.IsBound, rebind: interfaces.Rebind) => {
    monaco.languages.register({
        id: 'oml',
        aliases: ['Oml', 'oml'],
        extensions: ['.oml'],
        mimetypes: ['text/oml']
    })
    monaco.languages.onLanguage('oml', () => {
        monaco.languages.setLanguageConfiguration('oml', configuration)
    });
    bind(OmlLanguageClientContribution).toSelf().inSingletonScope()
    bind(LanguageClientContribution).toService(OmlLanguageClientContribution)
    bind(LanguageGrammarDefinitionContribution).to(OmlTextmateContribution).inSingletonScope()

    bind(CommandContribution).to(OmlCommandContribution).inSingletonScope();
    bind(ContextMenuCommands).to(ContextMenuCommands).inSingletonScope()
    rebind(MonacoEditorProvider).to(OmlMonacoEditorProvider).inSingletonScope()

    bind(DiagramConfiguration).to(OmlDiagramConfiguration).inSingletonScope()
    bind(OmlDiagramLanguageClient).toSelf().inSingletonScope()
    bind(OmlDiagramManager).toSelf().inSingletonScope()
    bind(DiagramManagerProvider).toProvider<DiagramManager>(context => {
        return () => {
            return new Promise<DiagramManager>((resolve) => {
                let diagramManager = context.container.get<OmlDiagramManager>(OmlDiagramManager);
                resolve(diagramManager);
            })
        }
    }) // .whenTargetNamed('oml-diagram');

    bind(FrontendApplicationContribution).toService(OmlDiagramManager)
    bind(OpenHandler).toService(OmlDiagramManager)
    bind(WidgetFactory).toService(OmlDiagramManager)
    bind(ThemeManager).toSelf().inSingletonScope()
})