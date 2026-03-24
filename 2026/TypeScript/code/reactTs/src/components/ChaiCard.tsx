interface ChaiCardProps {
  name: string;
  price: number;
  isSpecial?: boolean; // Optional prop
}

export function ChaiCard({ name, price, isSpecial = false }: ChaiCardProps) {
  return (
    <article>
      <h3>
        {name}
        {isSpecial && <span> ✨</span>}
      </h3>
      <p>₹ {price}</p>
    </article>
  );
}
