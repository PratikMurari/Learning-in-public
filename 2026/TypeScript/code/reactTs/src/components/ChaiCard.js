import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function ChaiCard({ name, price, isSpecial = false }) {
    return (_jsxs("article", { children: [_jsxs("h3", { children: [name, isSpecial && _jsx("span", { children: " \u2728" })] }), _jsxs("p", { children: ["\u20B9 ", price] })] }));
}
//# sourceMappingURL=ChaiCard.js.map