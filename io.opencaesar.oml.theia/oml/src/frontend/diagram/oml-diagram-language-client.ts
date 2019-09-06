import { EditorManager } from "@theia/editor/lib/browser";
import { inject, injectable } from "inversify";
import { DiagramLanguageClient } from "sprotty-theia/lib";
import { OmlLanguageClientContribution } from "../language/oml-language-client-contribution";

@injectable()
export class OmlDiagramLanguageClient extends DiagramLanguageClient {
    constructor(
        @inject(OmlLanguageClientContribution) languageClientContribution: OmlLanguageClientContribution,
        @inject(EditorManager) editorManager: EditorManager
    ) {
        super(languageClientContribution, editorManager);
    }
}
