import { createUploadthing } from "uploadthing/next";
const f = createUploadthing();

export const ourFileRouter = {
 
  pdfUploader: f({ pdf: { maxFileSize: "4MB" } }).onUploadComplete(
    async ({ metadata, file }) => {
      console.log("file url", file.url);
    }
  ),
 
};
