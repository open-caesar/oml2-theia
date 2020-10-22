/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */

import { inject, injectable } from 'inversify'
import { EditorManager } from '@theia/editor/lib/browser'
import { OmlDiagramLanguageClient } from "./oml-diagram-language-client";
import { TheiaSprottyConnector, LSTheiaSprottyConnector, TheiaFileSaver, DiagramManager, DiagramWidgetOptions } from 'sprotty-theia/lib'
import { ThemeManager } from './theme-manager';
import { WidgetManager, QuickPickService } from '@theia/core/lib/browser';
import { MonacoWorkspace } from "@theia/monaco/lib/browser/monaco-workspace";
import { OmlDiagramWidget } from '../widgets/oml-diagram-widget';
import {OML_DIAGRAM_TYPE} from "./di.config";
import {DiagramWidget} from "sprotty-theia/lib/theia/diagram-widget";

@injectable()
export class OmlDiagramManager extends DiagramManager {

    readonly diagramType = OML_DIAGRAM_TYPE
    readonly iconClass = 'fa fa-microchip'

    _diagramConnector: TheiaSprottyConnector

    constructor(@inject(OmlDiagramLanguageClient) diagramLanguageClient: OmlDiagramLanguageClient,
                @inject(TheiaFileSaver) fileSaver: TheiaFileSaver,
                @inject(WidgetManager) widgetManager: WidgetManager,
                @inject(EditorManager) editorManager: EditorManager,
                @inject(MonacoWorkspace) workspace: MonacoWorkspace,
                @inject(QuickPickService) quickPickService: QuickPickService,
                @inject(ThemeManager) themeManager: ThemeManager) {
        super()
        themeManager.initialize()
        this._diagramConnector = new LSTheiaSprottyConnector({
            diagramLanguageClient, fileSaver, editorManager, widgetManager, workspace, quickPickService, diagramManager: this
        })
    }

    async createWidget(options?: any): Promise<DiagramWidget> {
        console.log("CREATING DIAGRAM WIDGET")
        if (DiagramWidgetOptions.is(options)) {
            const clientId = this.createClientId();
            const config = this.diagramConfigurationRegistry.get(options.diagramType);
            const diContainer = config.createContainer(clientId + "_sprotty");
            const filterWidget = new OmlDiagramWidget(options, clientId, diContainer, this.diagramConnector);
            return filterWidget;
        }
        throw Error('DiagramWidgetFactory needs DiagramWidgetOptions but got ' + JSON.stringify(options));
    }

    // TS2611: 'diagramConnector' is defined as a property in class 'DiagramManager', but is overridden here in 'OmlDiagramManager' as an accessor.
    // @ts-ignore
    get diagramConnector() {
        return this._diagramConnector
    }

    get label() {
        return 'Oml diagram'
    }
}
