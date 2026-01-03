// components/layouts/page/Pages.jsx
import { Layout } from "@/components/layouts/Layout";

export default function Pages({ children, size = "lg" }) {
  return (
    <div className="w-full">
      <Layout size={size}>
        {children}
      </Layout>
    </div>
  );
}