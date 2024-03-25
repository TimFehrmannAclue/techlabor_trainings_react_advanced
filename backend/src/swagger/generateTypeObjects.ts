import fs from "fs";
import * as TJS from "typescript-json-schema";
import path from "path";
import getAllFilePaths from "../util/file/getFilePathsOfDir";
import getFileNameWithoutExtensionFromFileName from "../util/file/getFileNameWithoutExtensionFromFileName";
import getFileNameFromFilePath from "../util/file/getFileNameFromFilePath";
import ITypeObject from "../../type/backend/swagger/ITypeObject";

export default function generateTypeObjects(typeDir: string, tsConfigFile: string): ITypeObject[] {
    const filePaths = getAllFilePaths(typeDir);
    const tsconfigPath = path.resolve(tsConfigFile);
    // ToDo There is probably a better solution for this
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const tsconfig = require(tsconfigPath);

    // Generate a program from the files specified in your tsconfig
    const program = TJS.getProgramFromFiles(
        filePaths.map(file => path.resolve(file)),
        tsconfig.compilerOptions,
    );

    // Generate schemas for each type
    return filePaths.map((file) => generateTypeObject(program, file));
}

function generateTypeObject(program: TJS.Program, filePath: string): ITypeObject | never {
    const fileName = getFileNameFromFilePath(filePath);
    const fileNameWithoutExtension = getFileNameWithoutExtensionFromFileName(fileName);
    const schema = TJS.generateSchema(program, fileNameWithoutExtension, {required: true});
    if (!schema) {
        console.error('Could not generate schema for filePath: ', filePath);
        throw Error('Failed to generate schema');
    }

    const json = JSON.stringify(schema, null, 2);
    // Optional to save those out
    fs.writeFileSync(`typeObject/${fileNameWithoutExtension}.json`, json);

    return {name: fileNameWithoutExtension, obj: JSON.parse(json)};
}
