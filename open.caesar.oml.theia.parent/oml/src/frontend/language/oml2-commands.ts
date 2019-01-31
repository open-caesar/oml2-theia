import { inject, injectable } from "inversify";
import { CommandContribution, CommandRegistry, Command } from '@theia/core/lib/common';
import { EditorCommands } from "@theia/editor/lib/browser";
import { Workspace, WorkspaceEdit } from "@theia/languages/lib/browser";

/**
 * Show OML references
 */
export const SHOW_OML_REFERENCES: Command = {
    id: 'oml.show.references'
};

/**
 * Apply Workspace Edit
 */
export const APPLY_WORKSPACE_EDIT: Command = {
    id: 'oml.apply.workspaceEdit'
};

@injectable()
export class OmlCommandContribution implements CommandContribution {

    constructor(
        @inject(Workspace) protected readonly workspace: Workspace
    ) { }

    registerCommands(commands: CommandRegistry): void {
        commands.registerCommand(SHOW_OML_REFERENCES, {
            execute: (uri: string, position: Position, locations: Location[]) =>
                commands.executeCommand(EditorCommands.SHOW_REFERENCES.id, uri, position, locations)
        });
        commands.registerCommand(APPLY_WORKSPACE_EDIT, {
            execute: (changes: WorkspaceEdit) =>
                !!this.workspace.applyEdit && this.workspace.applyEdit(changes)
        });
    }

}
