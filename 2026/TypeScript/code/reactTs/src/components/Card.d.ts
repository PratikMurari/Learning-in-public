import type { PropsWithChildren, ReactNode } from "react";
interface CardProps extends PropsWithChildren {
    title: string;
    footer?: ReactNode;
}
export declare function Card({ title, children, footer }: CardProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Card.d.ts.map