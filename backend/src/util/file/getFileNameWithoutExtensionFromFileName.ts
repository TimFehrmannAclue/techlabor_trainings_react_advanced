export default function getFileNameWithoutExtensionFromFileName(fileName: string): string {
    return fileName.replace(/\.[^/.]+$/, "");
}
