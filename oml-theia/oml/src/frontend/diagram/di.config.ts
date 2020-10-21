/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */

import { Container, injectable } from "inversify"
import { KeyTool, TYPES, configureModelElement, configureCommand } from 'sprotty/lib'
import { CodeActionPalettePopupProvider, CodeActionProvider, CompletionLabelEditor,
    DeleteWithWorkspaceEditCommand, DiagramConfiguration, EditDiagramLocker, IRootPopupModelProvider,
    PaletteButton, PaletteMouseListener,
    RenameLabelEditor, WorkspaceEditCommand} from "sprotty-theia/lib"
import { LSTheiaDiagramServer, LSTheiaDiagramServerProvider, TheiaDiagramServer, TheiaKeyTool } from "sprotty-theia/lib"
import { createOmlDiagramContainer } from 'oml-sprotty/lib'
import { OmlDiagramServer } from "./oml-diagram-server"
import { PaletteButtonView } from "oml-sprotty/lib/html-views"

export const OML_DIAGRAM_TYPE = 'oml-diagram'

@injectable()
export class OmlDiagramConfiguration implements DiagramConfiguration {
    diagramType: string = OML_DIAGRAM_TYPE

    createContainer(widgetId: string): Container {
        const container = createOmlDiagramContainer(widgetId)
        container.bind(OmlDiagramServer).toSelf().inSingletonScope()
        container.bind(TheiaDiagramServer).toService(OmlDiagramServer)
        container.bind(LSTheiaDiagramServer).toService(OmlDiagramServer)
        container.bind(TYPES.ModelSource).toService(TheiaDiagramServer)
        container.rebind(KeyTool).to(TheiaKeyTool).inSingletonScope()

        container.bind(LSTheiaDiagramServerProvider).toProvider<LSTheiaDiagramServer>(context => {
            return () => {
                return new Promise<LSTheiaDiagramServer>(resolve => {
                    resolve(context.container.get(LSTheiaDiagramServer))
                })
            }
        })
        container.bind(CodeActionProvider).toSelf().inSingletonScope()
        container.bind(IRootPopupModelProvider).to(CodeActionPalettePopupProvider).inSingletonScope()
        container.bind(PaletteMouseListener).toSelf().inSingletonScope()
        container.rebind(TYPES.PopupMouseListener).to(PaletteMouseListener)
        configureModelElement(container, "button:create", PaletteButton, PaletteButtonView)

        configureCommand(container, DeleteWithWorkspaceEditCommand)
        configureCommand(container, WorkspaceEditCommand)

        container.bind(CompletionLabelEditor).toSelf().inSingletonScope()
        container.bind(RenameLabelEditor).toSelf().inSingletonScope()

        container.bind(EditDiagramLocker).toSelf().inSingletonScope()
        container.rebind(TYPES.IDiagramLocker).toService(EditDiagramLocker)

        return container
    }
}