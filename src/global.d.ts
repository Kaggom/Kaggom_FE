
export {};

declare global {
    interface Window {
        SNSID: string;
        SESSION_ID: string;
        NAME : string;
        EMAIL : string;
    }
}