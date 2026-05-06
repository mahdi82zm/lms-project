import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import "../globals.css";
import SideBar from "@/components/(dashboard)/SideBar";
import Header from "@/components/(dashboard)/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MantineProvider>
      <div className="flex flex-col">
        <Header />
        <div className="grid grid-cols-5">
          <div className="col-span-1">
            <SideBar />
          </div>
          <div className="colspan4">{children}</div>
        </div>
      </div>
    </MantineProvider>
  );
}
