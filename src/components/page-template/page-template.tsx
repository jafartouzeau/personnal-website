import SideMenu from "@/components/side-menu/side-menu";

export default function PageTemplate({
  content,
  sideMenuData,
}: Readonly<{
  content: React.ReactNode;
  sideMenuData: Record<string, any>;
}>) {
    return (<>
        <SideMenu data={sideMenuData}/>
        {content}
    </>)
}