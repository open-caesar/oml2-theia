/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */

import { inject, injectable } from "inversify";
import { CommandContribution, CommandRegistry, Command } from '@theia/core/lib/common';
import { EditorCommands } from "@theia/editor/lib/browser";
import { Workspace, WorkspaceEdit } from "@theia/languages/lib/browser";

/**
 * Show OML2 references
 */
export const SHOW_OML2_REFERENCES: Command = {
    id: 'oml2.show.references'
};

/**
 * Apply Workspace Edit
 */
export const APPLY_WORKSPACE_EDIT: Command = {
    id: 'oml2.apply.workspaceEdit'
};

@injectable()
export class Oml2CommandContribution implements CommandContribution {

    constructor(
        @inject(Workspace) protected readonly workspace: Workspace
    ) { }

    registerCommands(commands: CommandRegistry): void {
        commands.registerCommand(SHOW_OML2_REFERENCES, {
            execute: (uri: string, position: Position, locations: Location[]) =>
                commands.executeCommand(EditorCommands.SHOW_REFERENCES.id, uri, position, locations)
        });
        commands.registerCommand(APPLY_WORKSPACE_EDIT, {
            execute: (changes: WorkspaceEdit) =>
                !!this.workspace.applyEdit && this.workspace.applyEdit(changes)
        });
    }

}
