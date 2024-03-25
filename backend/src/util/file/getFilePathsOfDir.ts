import fs from "fs";

export default function getFiles(dir: string, files_: string[] = []): string[] {
    const files = fs.readdirSync(dir);
    files.forEach((file) => {
        const name = dir + '/' + file;
        if (fs.statSync(name).isDirectory()) {
            getFiles(name, files_);
        } else {
            files_.push(name);
        }
    })
    return files_;
}
