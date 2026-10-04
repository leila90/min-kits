import {describe, expect, it} from "vitest";
import {messages} from "@/app/i18n/messages";

function shape(value: unknown): unknown {
    if (Array.isArray(value)) {
        return value.map(shape);
    }
    if (value && typeof value === "object") {
        return Object.fromEntries(
            Object.entries(value)
                .sort(([a], [b]) => a.localeCompare(b))
                .map(([key, child]) => [key, shape(child)]),
        );
    }
    return typeof value;
}

describe("messages", () => {
    it("has the same structure in every locale", () => {
        expect(shape(messages.fa)).toEqual(shape(messages.en));
    });

    it("has no empty strings", () => {
        const empty: string[] = [];
        const walk = (value: unknown, trail: string) => {
            if (typeof value === "string" && value.trim() === "") empty.push(trail);
            else if (Array.isArray(value)) value.forEach((child, i) => walk(child, `${trail}[${i}]`));
            else if (value && typeof value === "object")
                Object.entries(value).forEach(([key, child]) => walk(child, `${trail}.${key}`));
        };
        walk(messages, "messages");

        expect(empty).toEqual([]);
    });
});
