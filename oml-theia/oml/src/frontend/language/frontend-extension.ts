import { FrontendApplicationContribution, KeybindingContribution, OpenHandler, WidgetFactory } from '@theia/core/lib/browser'
import { CommandContribution, MenuContribution } from '@theia/core/lib/common'
import { LanguageClientContribution } from '@theia/languages/lib/browser'
import { LanguageGrammarDefinitionContribution } from '@theia/monaco/lib/browser/textmate'

import { ContainerModule, interfaces } from 'inversify'
import { DiagramConfiguration, DiagramManager, DiagramManagerProvider, LSDiagramCommandContribution,
    LSDiagramKeybindingContribution } from 'sprotty-theia'

import { OmlDiagramConfiguration } from '../diagram/di.config'
import { OmlDiagramLanguageClient } from '../diagram/oml-diagram-language-client'
import { OmlDiagramManager } from '../diagram/oml-diagram-manager'
import { OmlCommandContribution, OmlMemuContribution } from './oml-contributions'
import { MonacoEditorProvider } from '@theia/monaco/lib/browser/monaco-editor-provider'
import { OmlMonacoEditorProvider } from "../monaco/oml-monaco-editor-provider"
import 'sprotty/css/sprotty.css'
import 'sprotty-theia/css/theia-sprotty.css'
import { ContextMenuCommands } from './dynamic-commands'
import { ThemeManager } from '../diagram/theme-manager';
import { OmlTextmateContribution } from './oml-textmate-contribution'
import { OmlLanguageClientContribution } from './oml-language-client-contribution'

export default new ContainerModule((bind: interfaces.Bind, unbind: interfaces.Unbind, isBound: interfaces.IsBound, rebind: interfaces.Rebind) => {

    bind(CommandContribution).to(OmlCommandContribution)
    bind(MenuContribution).to(OmlMemuContribution)

    bind(OmlLanguageClientContribution).toSelf().inSingletonScope()
    bind(LanguageClientContribution).toService(OmlLanguageClientContribution)
    bind(LanguageGrammarDefinitionContribution).to(OmlTextmateContribution).inSingletonScope()

    bind(OmlDiagramLanguageClient).toSelf().inSingletonScope()
    bind(CommandContribution).to(LSDiagramCommandContribution).inSingletonScope()
    bind(KeybindingContribution).to(LSDiagramKeybindingContribution).inSingletonScope()

    bind(DiagramConfiguration).to(OmlDiagramConfiguration).inSingletonScope()
    bind(OmlDiagramManager).toSelf().inSingletonScope()
    bind(FrontendApplicationContribution).toService(OmlDiagramManager)
    bind(OpenHandler).toService(OmlDiagramManager)
    bind(WidgetFactory).toService(OmlDiagramManager)


    bind(DiagramManagerProvider).toProvider<DiagramManager>(context => {
        return () => {
            return new Promise<DiagramManager>((resolve) => {
                let diagramManager = context.container.get<OmlDiagramManager>(OmlDiagramManager);
                resolve(diagramManager)
            })
        }
    })

    rebind(MonacoEditorProvider).to(OmlMonacoEditorProvider).inSingletonScope()

    // Is this really functional?
    bind(ContextMenuCommands).to(ContextMenuCommands).inSingletonScope()
    bind(ThemeManager).toSelf().inSingletonScope()
})