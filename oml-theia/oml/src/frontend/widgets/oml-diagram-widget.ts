import { DiagramWidget, DiagramWidgetOptions, TheiaSprottyConnector } from "sprotty-theia";
import { TheiaDiagramServer } from "sprotty-theia/lib";
import { SearchBox, SearchBoxFactory, SearchBoxProps } from "@theia/core/lib/browser/tree/search-box";
import { TYPES, Action } from "sprotty/lib";
import { Widget } from "@phosphor/widgets";
import { Message } from "@phosphor/messaging/lib";
import { Container } from "inversify";
import { SearchBoxDebounce } from "@theia/core/lib/browser/tree/search-box-debounce";

export const createSearchBox: SearchBoxFactory = (props: SearchBoxProps) => {
    const debounce = new SearchBoxDebounce({ delay: 300 });
    return new SearchBox(props, debounce);
}

export class FilterAction implements Action {
    static KIND: string = 'filter';
    kind: string = FilterAction.KIND;
    data: string;

    constructor(data: string) {
        this.data = data;
    }
}

export class OmlDiagramWidget extends DiagramWidget {

    protected readonly searchBox: SearchBox;

    get modelSource(): TheiaDiagramServer {
        return this.diContainer.get(TYPES.ModelSource);
    }

    get diagramType(): string {
        return this.options.diagramType;
    }

    constructor(options: DiagramWidgetOptions, id: string, diContainer: Container, connector?: TheiaSprottyConnector) {
        super(options, id, diContainer, connector);
        this.searchBox = createSearchBox({ delay: 300 });
        this.toDispose.pushAll([
            this.searchBox,
            this.searchBox.onTextChange(data => this.modelSource.actionDispatcher.dispatch(new FilterAction(data || ''))),
            this.searchBox.onClose(() => this.modelSource.actionDispatcher.dispatch(new FilterAction('')))
        ]);
    }

    /**
     * Extend the DiagramWidget that renders the OML diagram to include a SearchBox for filtering
     */
    protected onAfterAttach(msg: Message): void {
        super.onAfterAttach(msg);
        if (this.searchBox.isAttached) {
            Widget.detach(this.searchBox);
        }
        Widget.attach(this.searchBox, this.node.parentElement!);
        this.addKeyListener(
            this.node,
            this.searchBox.keyCodePredicate.bind(this.searchBox),
            this.searchBox.handle.bind(this.searchBox)
        );
    }

    protected onAfterShow(msg: Message): void {
        super.onAfterShow(msg);
        if (this.searchBox.isHidden) {
            this.searchBox.show();
        }
    }
}
