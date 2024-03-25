export default function getFileNameFromFilePath(path: string): string {
    return path.replace(/^.*[\\/]/, '');
}
