import "@mantine/core/styles.css";
import "../globals.css"
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import '@mantine/notifications/styles.css';


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MantineProvider>
      <Notifications position="top-center" /> 
    {children}
    </MantineProvider>
  );
}
