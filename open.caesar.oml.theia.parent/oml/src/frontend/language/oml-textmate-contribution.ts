import { injectable } from 'inversify';
import { LanguageGrammarDefinitionContribution, TextmateRegistry } from '@theia/monaco/lib/browser/textmate';

@injectable()
export class OmlTextmateContribution implements LanguageGrammarDefinitionContribution {

    registerTextmateLanguage(registry: TextmateRegistry) {
        const scope = 'source.oml';
        const omlGrammar = require('../../../data/grammars/oml.tmlanguage.json');
        registry.registerTextmateGrammarScope(scope, {
            async getGrammarDefinition() {
                return {
                    format: 'json',
                    content: omlGrammar
                };
            }
        });
        registry.registerGrammarConfiguration('oml', {
            tokenizerOption: {
            }
        });
        registry.mapLanguageIdToTextmateGrammar('oml', scope);
    }
}
