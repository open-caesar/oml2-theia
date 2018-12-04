import { ContainerModule } from "inversify";
import { LanguageClientContribution } from '@theia/languages/lib/browser';
import { Oml2ClientContribution } from "./language-contribution";

export default new ContainerModule(bind => {
    bind<LanguageClientContribution>(LanguageClientContribution).to(Oml2ClientContribution).inSingletonScope();
})

