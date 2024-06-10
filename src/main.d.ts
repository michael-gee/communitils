export type RGB = [red: number, green: number, blue: number];
export declare function invertColor(color: string | RGB, options?: {
    bw: boolean;
}): string | number[];
export declare function isEmpty(value: unknown): boolean;
export declare function isNil(value: unknown): boolean;
export declare function omit(object: Record<string, unknown>, properties: string | string[]): {
    [x: string]: unknown;
};
export declare function pick(object: Record<string, unknown>, properties: string | string[]): Record<string, unknown>;
export interface UniqOptions {
    deep?: boolean;
}
export declare function uniq(array: unknown[], options?: UniqOptions): any[];
