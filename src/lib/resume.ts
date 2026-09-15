import "server-only";
import path from "node:path";
import mammoth from "mammoth";

export async function getResumeHtml(): Promise<string> {
  const filePath = path.join(process.cwd(), "public", "Rijul-Minhas-Resume.docx");
  const result = await mammoth.convertToHtml({ path: filePath });
  return result.value;
}
