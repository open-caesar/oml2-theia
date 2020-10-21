import { injectable, ContainerModule } from "inversify"
import { BaseLanguageServerContribution, LanguageServerContribution, IConnection } from "@theia/languages/lib/node"
import { createSocketConnection } from 'vscode-ws-jsonrpc/lib/server'
import {OML_LANGUAGE_FILE_EXTENSION, OML_LANGUAGE_SERVER_ID, OML_LANGUAGE_SERVER_NAME} from "../common";
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
class OmlLanguageServerContribution extends BaseLanguageServerContribution {

    readonly id = OML_LANGUAGE_SERVER_ID
    readonly name = OML_LANGUAGE_SERVER_NAME

    readonly description = {
        id: this.id,
        name: this.name,
        documentSelector: [this.id],
        fileEvents: [
            '**/*' + OML_LANGUAGE_FILE_EXTENSION
        ]
    }

    start(clientConnection: IConnection): void {
        let socketPort = getPort();
        console.log("SOCKET PORT:", socketPort);
        if (socketPort) {
            const socket = new net.Socket()
            socket.connect(socketPort)
            const serverConnection = createSocketConnection(socket, socket, () => {
                socket.destroy()
            });
            this.forward(clientConnection, serverConnection)
        } else {
            const folder = path.join(__dirname, '../../build')
            const files = fs.readdirSync(folder).filter(el => el.startsWith("oml-server"))
            const jar = path.resolve(folder + '/' + files[0])

            const command = 'java'
            const args: string[] = [
                '-jar',
                // Uncomment the next line to attach a debugger. Use a socket listener at port 8000
                // '-agentlib:jdwp=transport=dt_socket,address=127.0.0.1:8000,server=n,suspend=n',
                jar
            ]

            this.createProcessStreamConnectionAsync(command, args).then((serverConnection: IConnection) => this.forward(clientConnection, serverConnection))
        }
    }

}

export default new ContainerModule(bind => {
    bind(LanguageServerContribution).to(OmlLanguageServerContribution).inSingletonScope()
})