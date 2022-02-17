import fs from 'fs';

const folderPath = 'style';

type CreateFileStreamFn = (fileName: string) => {
  fileNames: Array<string>;
  stream: fs.WriteStream;
};

const getFileExtension = (fileName: string) => fileName.split('.')[1];

const createWriteStream = (fileName: string) =>
  fs.createWriteStream(`${folderPath}/${fileName}`);

const readFileNames = (extension: string) =>
  fs
    .readdirSync(folderPath)
    .filter((file: string) => file.endsWith(`.${extension}`))
    .map((file: string) => file.split('.')[0]);

const createFileStream = (fileName: string) => {
  const extension = getFileExtension(fileName);
  const fileNames = readFileNames(extension);

  const stream = createWriteStream(fileName);

  return { fileNames, stream };
};

const createNativeIndexFile =
  (fn: CreateFileStreamFn) => (fileName: string) => {
    const { fileNames, stream } = fn(fileName);

    stream.once('open', () => {
      fileNames.forEach((fileName) => {
        stream.write(`import * as ${fileName} from './${fileName}';\n`);
      });

      stream.write(`export {${fileNames.join(',')}}\n`);
      stream.end();
    });
  };

const createWebIndexFile = (fn: CreateFileStreamFn) => (fileName: string) => {
  const { fileNames, stream } = fn(fileName);

  stream.once('open', () => {
    fileNames.forEach((fileName) => {
      stream.write(`@import '${fileName}';\n`);
    });

    stream.end();
  });
};

(() => {
  createNativeIndexFile(createFileStream)('index.ts');
  createWebIndexFile(createFileStream)('main.scss');
})();
