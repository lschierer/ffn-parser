import { readFile } from "fs/promises";
import { join } from "path";
import { JSDOM } from "jsdom";

export async function loadResource(name: string): Promise<string> {
  const file = join(__dirname, "resources", name);
  const buffer = await readFile(file);
  return buffer.toString("utf-8");
}

export async function loadTestCase(name: string): Promise<DocumentFragment> {
  const html = await loadResource(join("test-cases", name));
  return JSDOM.fragment(html);
}
