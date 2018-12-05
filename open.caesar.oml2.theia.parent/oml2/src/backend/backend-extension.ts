import { injectable, ContainerModule } from "inversify"
import { BaseLanguageServerContribution, LanguageServerContribution, IConnection } from "@theia/languages/lib/node"
import { createSocketConnection } from 'vscode-ws-jsonrpc/lib/server'
import * as path from 'path'
import * as net from 'net'
import * as fs from 'fs'


function getPort(): number | undefined {
    let arg = process.argv.filter(arg => arg.startsWith('--LSP_PORT='))[0]
    if (!arg) {
        return undefined
    } else {
        return Number.parseInt(arg.substring('--LSP_PORT='.length), 10)
    }
}

@injectable()
class Oml2LanguageServerContribution extends BaseLanguageServerContribution {

    readonly id = 'oml2'
    readonly name = 'Oml2'

    readonly description = {
        id: 'oml2',
        name: 'Oml2',
        documentSelector: ['oml2'],
        fileEvents: [
            '**/*.oml2'
        ]
    }

    start(clientConnection: IConnection): void {
        let socketPort = getPort();
        if (socketPort) {
            const socket = new net.Socket()
            const serverConnection = createSocketConnection(socket, socket, () => {
                socket.destroy()
            });
            this.forward(clientConnection, serverConnection)
            socket.connect(socketPort)
        } else {
            const folder = path.join(__dirname, '../../build')
            const files = fs.readdirSync(folder).filter(el => el.startsWith("oml2-language-server"))
            const jar = path.resolve(folder + '/' + files[0])

            const command = 'java'
            const args: string[] = [
                '-jar',
                jar
            ]

            const serverConnection = this.createProcessStreamConnection(command, args)
            this.forward(clientConnection, serverConnection)
        }
    }

}

export default new ContainerModule(bind => {
    bind(LanguageServerContribution).to(Oml2LanguageServerContribution).inSingletonScope()
})