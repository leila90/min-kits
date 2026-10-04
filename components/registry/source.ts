import "server-only";
import {readFile} from "node:fs/promises";
import path from "node:path";
import type {ComponentRegistryItem} from "./types";

/**
 * Reads the displayed source straight from the real component file,
 * so the documentation can never drift from the implementation.
 */
export async function getComponentSource(component: ComponentRegistryItem) {
    const filePath = path.join(process.cwd(), component.sourceFile);

    return (await readFile(filePath, "utf-8")).trimEnd();
}
