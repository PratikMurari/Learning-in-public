import { jsx as _jsx } from "react/jsx-runtime";
// we are adding type to declair we are importing types and not funtionalities,
// this is a good practice to avoid confusion and also helps in better code readability
import { ChaiCard } from "./ChaiCard";
export function ChaiList({ items }) {
    return (_jsx("div", { children: items.map((chai) => (_jsx(ChaiCard, { name: chai.name, price: chai.price, isSpecial: chai.price > 100 }, chai.id))) }));
}
export default ChaiList;
//# sourceMappingURL=ChaiList.js.map