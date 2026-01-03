export default function HeaderContent3({ left, center, right }) {
  return (
    <header className="max-w-full h-25 flex items-center justify-center content-p1 bg-background border-b">
      <div className="w-7xl flex items-center justify-center">
        <div className="w-16">
          {left}
        </div>
        <div className="flex-1 flex justify-center gap-6">
          {center}
        </div>
        <div className="w-16 flex justify-end">
          {right}
        </div>
      </div>
    </header>
  );
}