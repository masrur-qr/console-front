export async function FileREader(File: any) {
  console.log("File", File);

  return new Promise((resolve, reject) => {
    let fileData = File;
    let reader = new FileReader();

    reader.onloadend = function () {
      let rawData: any = reader.result;

      let chunkSize = 100536;
      let offset = 0;
      let bt = "";

      while (offset < rawData.byteLength) {
        let chunk: any = rawData.slice(offset, offset + chunkSize);
        let chunkArray: number[] = Array.from(new Uint8Array(chunk));
        bt += btoa(String.fromCharCode.apply(null, chunkArray));
        offset += chunkSize;
      }

      resolve(bt);
    };

    reader.onerror = function () {
      reject(reader.error);
    };

    reader.readAsArrayBuffer(fileData);
  });
}
