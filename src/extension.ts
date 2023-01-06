import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('vscode-ext-theia-test.testSnippetEdit', () => {

		const snippetEdit = vscode.SnippetTextEdit.insert(new vscode.Position(0, 0), new vscode.SnippetString('{ "testValue":"$0" }'));

		let workspaceEdit = new vscode.WorkspaceEdit();
		workspaceEdit.set(vscode.Uri.file(vscode.window.activeTextEditor?.document.fileName!), [snippetEdit]);
		if (vscode.workspace.workspaceFolders) {
			const uri = vscode.workspace.workspaceFolders[0].uri.toString
			workspaceEdit.set(vscode.Uri.parse(vscode.workspace.workspaceFolders[0].uri.toString() + "/file2.json"), [snippetEdit]);
		}
		vscode.workspace.applyEdit(workspaceEdit);
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() { }
