
/**
 * Generated using theia-plugin-generator
 */

import * as theia from '@theia/plugin';
import { CancellationToken, Progress, ProgressLocation } from "@theia/plugin";

export function start() {
    const informationMessageTestCommand = {
        id: 'hello-world-example-generated',
        label: "Hello World"
    };
    theia.commands.registerCommand(informationMessageTestCommand, (...args: any[]) => {
        theia.window.withProgress({
            location: ProgressLocation.Notification,
            title: 'sdg'
        }, (progress, token) => dopromise(progress, token));
    });

}

function sleep(time: number) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

const dopromise = async function(progress: Progress<{ message?: string; increment?: number }>, token: CancellationToken): Promise<void> {
    token.onCancellationRequested(() => {});
    await sleep(2000).then(() => {});
    progress.report({ message: 'hello' });
};

export function stop() {

}
