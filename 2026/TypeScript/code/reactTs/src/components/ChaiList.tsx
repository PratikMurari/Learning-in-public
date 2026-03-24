import type { Chai } from "../types";
// we are adding type to declair we are importing types and not funtionalities,
// this is a good practice to avoid confusion and also helps in better code readability
import { ChaiCard } from "./ChaiCard";

interface ChaiListProps {
  items: Chai[];
}

export function ChaiList({ items }: ChaiListProps) {
  return (
    <div>
      {items.map((chai) => (
        <ChaiCard
          key={chai.id}
          name={chai.name}
          price={chai.price}
          isSpecial={chai.price > 100}
        />
      ))}
    </div>
  );
}

export default ChaiList;
