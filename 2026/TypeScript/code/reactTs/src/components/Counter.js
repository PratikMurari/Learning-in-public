import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
export function Counter() {
    const [count, setCount] = useState(0);
    return (_jsxs("div", { children: [_jsxs("p", { children: ["Cups orderded: ", count, " "] }), _jsx("button", { onClick: () => setCount(count + 1), children: "Order one More" })] }));
}
//# sourceMappingURL=Counter.js.map