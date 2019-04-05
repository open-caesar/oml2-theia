import { inject, injectable } from 'inversify';
import { CommandRegistry, MenuModelRegistry, Disposable } from '@theia/core/lib/common';
import { EDITOR_CONTEXT_MENU, EditorManager, EditorWidget } from '@theia/editor/lib/browser';

@injectable()
export class ContextMenuCommands {

    constructor(@inject(MenuModelRegistry) protected menuRegistry: MenuModelRegistry,
                @inject(CommandRegistry) protected registry: CommandRegistry,
                @inject(EditorManager) protected editorManager: EditorManager) {
    }

    registerCommand(id: string, callback: (...args: any[]) => any, thisArg?: any): Disposable {
        const execute = callback.bind(thisArg);
        const removeCommand = this.registry.registerCommand({ id: id }, {
            execute: () => {
                const currentEditor = this.editorManager.currentEditor
                if (this.isOmlEditor(currentEditor)) {
                    execute(currentEditor.editor.document.uri)
                }
            },
            isVisible: () => this.isOmlEditor(this.editorManager.currentEditor)
        });
        const removeMenu = this.menuRegistry.registerMenuAction(EDITOR_CONTEXT_MENU.concat("2_oml"), {
            commandId: id,
            label: id
        });
        return {
            dispose : () => {
                removeCommand.dispose()
                removeMenu.dispose()
            }
        }
    }

    private isOmlEditor(widget: EditorWidget | undefined): widget is EditorWidget {
        if (widget)
            return widget.editor.document.languageId === 'oml';
        else
            return false;
    }
}