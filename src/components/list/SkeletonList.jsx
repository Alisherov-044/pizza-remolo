export const SkeletonList = ({ Node, count = 3 }) => {
  const countArr = [];
  if (count < 3) {
    count = 3;
  }
  for (let i = 0; i < count; i++) {
    countArr.push(i);
  }

  return (
    <div className="products__list">
      {countArr.map((index) => (
        <Node key={index} />
      ))}
    </div>
  );
};
