import { inject, injectable } from "inversify";
import { LSTheiaDiagramServer, CompletionLabelEditor, RenameLabelEditor, isTraceable } from "sprotty-theia/lib";
import { Action, ActionHandlerRegistry, IModelFactory, TYPES, ReconnectCommand,
    EditLabelAction, SModelRoot, SLabel, getSubType, RequestPopupModelAction, SetPopupModelAction } from "sprotty";
import { FilterAction } from "../widgets/oml-diagram-widget";

@injectable()
export class OmlDiagramServer extends LSTheiaDiagramServer {
    @inject(CompletionLabelEditor) completionLabelEditor: CompletionLabelEditor;
    @inject(RenameLabelEditor) renameLabelEditor: RenameLabelEditor;
    @inject(TYPES.IModelFactory) modelFactory: IModelFactory;

    initialize(registry: ActionHandlerRegistry) {
        super.initialize(registry);
        registry.register(FilterAction.KIND, this);
        registry.register(ReconnectCommand.KIND, this);
        registry.register(EditLabelAction.KIND, this);
    }

    handleLocally(action: Action): boolean {
        if (action.kind === EditLabelAction.KIND) {
            const label = this.getElement((action as EditLabelAction).labelId);
            if (label instanceof SLabel && isTraceable(label)) {
                if (getSubType(label) === 'xref') {
                    this.completionLabelEditor.edit(label);
                } else {
                    this.renameLabelEditor.edit(label);
                }
            }
            return false;
        } else if (action instanceof RequestPopupModelAction) {
            return this.handleRequestPopupModel(action);
        }
        return super.handleLocally(action);
    }

    handleRequestPopupModel(action: RequestPopupModelAction): boolean {
        const head = this.currentRoot.children ? this.currentRoot.children[0] : null;
        if (head && action.elementId === head.id) {
            this.rootPopupModelProvider.getPopupModel(action, head).then(model => {
                if (model) {
                    this.actionDispatcher.dispatch(new SetPopupModelAction(model));
                }
            });
            return false;
        }
        return true;
    }

    private getElement(elementId: string) {
        const root = (this.currentRoot instanceof SModelRoot)
            ? this.currentRoot
            : this.modelFactory.createRoot(this.currentRoot);
        return root.index.getById(elementId);
    }
}
