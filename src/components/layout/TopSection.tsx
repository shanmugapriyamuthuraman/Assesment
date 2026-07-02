import Sidebar from "./Sidebar";
import Header from "./Header";

export default function TopSection({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex" style={{ background: "rgba(255, 248, 220, 1)" }}>
      <Sidebar />
      <div className="flex-1 min-w-0">
        <Header />
        {children}
      </div>
    </div>
  );
}
