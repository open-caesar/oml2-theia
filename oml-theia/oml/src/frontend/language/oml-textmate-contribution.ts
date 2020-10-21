import { injectable } from 'inversify';
import { LanguageGrammarDefinitionContribution, TextmateRegistry } from '@theia/monaco/lib/browser/textmate';
import {configuration} from "./oml-monaco-language";
import {OML_LANGUAGE_FILE_EXTENSION, OML_LANGUAGE_SERVER_ID, OML_LANGUAGE_SERVER_NAME, OML_MIME_TYPE} from "../../common";

@injectable()
export class OmlTextmateContribution implements LanguageGrammarDefinitionContribution {

    registerTextmateLanguage(registry: TextmateRegistry) {
        monaco.languages.register({
            id: OML_LANGUAGE_SERVER_ID,
            aliases: [OML_LANGUAGE_SERVER_NAME, OML_LANGUAGE_SERVER_ID],
            extensions: [OML_LANGUAGE_FILE_EXTENSION],
            mimetypes: [OML_MIME_TYPE]
        })
        monaco.languages.setLanguageConfiguration(OML_LANGUAGE_SERVER_ID, configuration)

        const scope = 'source.oml';
        const omlGrammar = require('../../../data/grammars/oml.tmLanguage.json')
        registry.registerTextmateGrammarScope(scope, {
            async getGrammarDefinition() {
                return {
                    format: 'json',
                    content: omlGrammar
                };
            }
        })
        registry.mapLanguageIdToTextmateGrammar(OML_LANGUAGE_SERVER_ID, scope)
    }
}
