export function Layout({ size = 'lg', children }) {
  return (
    <div className={`layout-c ${size}`}>
      {children}
    </div>
  );
}