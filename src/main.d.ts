export type RGB = [red: number, green: number, blue: number];
export declare function getContrastColor(color: string | RGB, options?: {
    returnAs: 'text' | 'hex' | 'rgb';
}): number[] | "black" | "white" | "#000" | "#fff";
export declare function isEmpty(value: string | object | unknown[] | Set<unknown> | Map<unknown, unknown>): boolean;
export declare function isNil(value: unknown): boolean;
export declare function omit(object: Record<string, unknown>, properties: string | string[]): {
    [x: string]: unknown;
};
export declare function pick(object: Record<string, unknown>, properties: string | string[]): Record<string, unknown>;
export interface UniqOptions {
    deep?: boolean;
}
export declare function uniq(array: unknown[], options?: UniqOptions): any[];
