import { Layout } from "@/components/layouts/Layout";
import HeaderTemplate from "@/components/layouts/header/Variants/HeaderTemplate"; // Import sesuai kebutuhan system posnod

const VARIANTS = {
  template: HeaderTemplate, // Ganti sesuai import
};

export default function Header({ variant, left, center, right, size = "lg" }) {
  if (variant) {
    const VariantComponent = VARIANTS[variant];
    if (VariantComponent) {
      return <VariantComponent size={size} />;
    }
    console.warn(`Header variant "${variant}" not found. Using default.`);
  }

  return (
    <header className="w-full bg-primary border-b ">
      <Layout size={size}>
        <div className="header-row">
          <div className="header-left">{left}</div>
          <div className="header-center">{center}</div>
          <div className="header-right">{right}</div>
        </div>
      </Layout>
    </header>
  );
}