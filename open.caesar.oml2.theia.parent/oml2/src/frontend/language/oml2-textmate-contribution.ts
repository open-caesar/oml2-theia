import { injectable } from 'inversify';
import { LanguageGrammarDefinitionContribution, TextmateRegistry } from '@theia/monaco/lib/browser/textmate';

@injectable()
export class Oml2TextmateContribution implements LanguageGrammarDefinitionContribution {

    registerTextmateLanguage(registry: TextmateRegistry) {
        const scope = 'source.oml2';
        const oml2Grammar = require('../../../data/grammars/oml2.tmlanguage.json');
        registry.registerTextmateGrammarScope(scope, {
            async getGrammarDefinition() {
                return {
                    format: 'json',
                    content: oml2Grammar
                };
            }
        });
        registry.registerGrammarConfiguration('oml2', {
            tokenizerOption: {
            }
        });
        registry.mapLanguageIdToTextmateGrammar('oml2', scope);
    }
}
