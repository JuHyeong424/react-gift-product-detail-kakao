interface Announcement {
  name: string;
  value: string;
  displayOrder: number;
}

interface ProductDetailInfoProps {
  announcements: Announcement[];
}

export default function ProductDetailInfo({ announcements }: ProductDetailInfoProps) {
  const sorted = [...announcements].sort((a, b) => a.displayOrder - b.displayOrder);

  return (
    <>
      {sorted.map((item) => (
        <>
          <div>{item.name}</div>
          <div>{item.value}</div>
        </>
      ))}
    </>
  );
}
