/*
 * Copyright (C) 2018 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */

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
