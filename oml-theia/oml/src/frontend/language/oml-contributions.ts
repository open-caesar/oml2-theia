import { inject, injectable } from "inversify";
import { CommandContribution, CommandRegistry, Command, MenuContribution, MenuModelRegistry, MessageService } from '@theia/core/lib/common';
import { EditorCommands } from "@theia/editor/lib/browser";
import { Workspace, WorkspaceEdit } from "@theia/languages/lib/browser";
import { CommonMenus } from "@theia/core/lib/browser";

/**
 * Show OML references
 */
export const SHOW_OML_REFERENCES: Command = {
    id: 'oml.show.references',
    label: "Show references"
}

/**
 * Apply Workspace Edit
 */
export const APPLY_WORKSPACE_EDIT: Command = {
    id: 'oml.apply.workspaceEdit',
    label: "Apply workspace edit"
}

export const SHOW_MESSAGE: Command = {
    id: 'oml.show.message',
    label: "Shows a message"
}

@injectable()
export class OmlCommandContribution implements CommandContribution {

    constructor(
        @inject(MessageService) private readonly messageService: MessageService,
        @inject(Workspace) protected readonly workspace: Workspace
    ) { }

    registerCommands(registry: CommandRegistry): void {
        registry.registerCommand(SHOW_OML_REFERENCES, {
            execute: (uri: string, position: Position, locations: Location[]) =>
                registry.executeCommand(EditorCommands.SHOW_REFERENCES.id, uri, position, locations)
        })
        registry.registerCommand(APPLY_WORKSPACE_EDIT, {
            execute: (changes: WorkspaceEdit) =>
                !!this.workspace.applyEdit && this.workspace.applyEdit(changes)
        })
        registry.registerCommand(SHOW_MESSAGE, {
            execute: () => this.messageService.info('Hello World!')
        })
    }

}

@injectable()
export class OmlMemuContribution implements MenuContribution {

    registerMenus(registry: MenuModelRegistry): void {
        registry.registerMenuAction(CommonMenus.EDIT_FIND, {
            commandId: SHOW_MESSAGE.id,
            label: SHOW_MESSAGE.label
        })
    }
}
